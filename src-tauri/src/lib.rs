use reqwest::{Client, Method};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::env;
use std::fs;
use std::path::PathBuf;
use std::process::Command;

const KEYCHAIN_SERVICE: &str = "com.local.marketing-webflow-cleaner.webflow";
const WEBFLOW_API_BASE: &str = "https://api.webflow.com/v2";

#[tauri::command]
fn ping() -> String {
    "pong".to_string()
}

#[tauri::command]
fn save_token(token_ref: String, token: String) -> Result<(), String> {
    let output = Command::new("security")
        .args([
            "add-generic-password",
            "-a",
            token_ref.as_str(),
            "-s",
            KEYCHAIN_SERVICE,
            "-w",
            token.as_str(),
            "-U",
        ])
        .output()
        .map_err(|error| format!("Failed to access macOS Keychain: {error}"))?;

    if output.status.success() {
        Ok(())
    } else {
        Err(sanitize_security_error(&output.stderr))
    }
}

#[tauri::command]
fn read_token(token_ref: String) -> Result<Option<String>, String> {
    read_token_from_keychain(&token_ref)
}

#[tauri::command]
fn delete_token(token_ref: String) -> Result<(), String> {
    let output = Command::new("security")
        .args([
            "delete-generic-password",
            "-a",
            token_ref.as_str(),
            "-s",
            KEYCHAIN_SERVICE,
        ])
        .output()
        .map_err(|error| format!("Failed to access macOS Keychain: {error}"))?;

    if output.status.success() {
        return Ok(());
    }

    let stderr = String::from_utf8_lossy(&output.stderr);
    if stderr.contains("could not be found") {
        return Ok(());
    }

    Err(sanitize_security_error(&output.stderr))
}

fn sanitize_security_error(stderr: &[u8]) -> String {
    let message = String::from_utf8_lossy(stderr);
    let trimmed = message.trim();
    if trimmed.is_empty() {
        "Keychain operation failed".to_string()
    } else {
        trimmed.to_string()
    }
}

fn read_token_from_keychain(token_ref: &str) -> Result<Option<String>, String> {
    let output = Command::new("security")
        .args([
            "find-generic-password",
            "-a",
            token_ref,
            "-s",
            KEYCHAIN_SERVICE,
            "-w",
        ])
        .output()
        .map_err(|error| format!("Failed to access macOS Keychain: {error}"))?;

    if output.status.success() {
        let token = String::from_utf8(output.stdout)
            .map_err(|_| "Keychain returned a non-UTF8 token".to_string())?
            .trim()
            .to_string();
        return Ok(Some(token));
    }

    let stderr = String::from_utf8_lossy(&output.stderr);
    if stderr.contains("could not be found") {
        return Ok(None);
    }

    Err(sanitize_security_error(&output.stderr))
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct WebflowRequestPayload {
    token_ref: String,
    path: String,
    method: String,
    body: Option<Value>,
}

#[derive(Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
struct PersistedConnection {
    id: String,
    name: String,
    site_id: String,
    workspace_label: String,
    token_ref: String,
    status: String,
    last_synced_at: String,
    collections: usize,
}

#[tauri::command]
fn load_connections() -> Result<Vec<PersistedConnection>, String> {
    let path = connections_file_path()?;
    if !path.exists() {
        return Ok(Vec::new());
    }

    let contents = fs::read_to_string(&path)
        .map_err(|error| format!("Failed to read saved connections: {error}"))?;
    if contents.trim().is_empty() {
        return Ok(Vec::new());
    }

    serde_json::from_str(&contents).map_err(|error| format!("Failed to parse saved connections: {error}"))
}

#[tauri::command]
fn save_connections(connections: Vec<PersistedConnection>) -> Result<(), String> {
    let path = connections_file_path()?;
    if let Some(parent) = path.parent() {
        fs::create_dir_all(parent)
            .map_err(|error| format!("Failed to prepare app data directory: {error}"))?;
    }

    let contents = serde_json::to_string_pretty(&connections)
        .map_err(|error| format!("Failed to serialize saved connections: {error}"))?;
    fs::write(&path, contents).map_err(|error| format!("Failed to save connections: {error}"))
}

#[tauri::command]
async fn webflow_request(payload: WebflowRequestPayload) -> Result<Value, String> {
    let token = read_token_from_keychain(&payload.token_ref)?
        .ok_or_else(|| "No Webflow token found in macOS Keychain for this connection.".to_string())?;

    let method = Method::from_bytes(payload.method.as_bytes())
        .map_err(|error| format!("Unsupported HTTP method: {error}"))?;

    let url = format!("{WEBFLOW_API_BASE}{}", payload.path);
    let client = Client::new();
    let mut request = client
        .request(method, &url)
        .header("Authorization", format!("Bearer {token}"))
        .header("Content-Type", "application/json");

    if let Some(body) = payload.body {
        request = request.json(&body);
    }

    let response = request
        .send()
        .await
        .map_err(|error| format!("Webflow request could not be sent: {error}"))?;

    let status = response.status();
    let text = response
        .text()
        .await
        .map_err(|error| format!("Webflow response could not be read: {error}"))?;

    if !status.is_success() {
        return Err(format!("WEBFLOW_HTTP_{status}::{text}"));
    }

    if status.as_u16() == 204 || text.trim().is_empty() {
        return Ok(Value::Object(Default::default()));
    }

    serde_json::from_str(&text).map_err(|error| format!("Invalid Webflow JSON response: {error}"))
}

fn connections_file_path() -> Result<PathBuf, String> {
    let home = env::var("HOME").map_err(|_| "HOME environment variable is not set.".to_string())?;
    Ok(PathBuf::from(home)
        .join("Library")
        .join("Application Support")
        .join("marketing-webflow-cleaner")
        .join("connections.json"))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            ping,
            save_token,
            read_token,
            delete_token,
            webflow_request,
            load_connections,
            save_connections
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
