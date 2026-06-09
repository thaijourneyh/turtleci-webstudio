import { EditorContent, useEditor } from '@tiptap/react';
import { BubbleMenu, FloatingMenu } from '@tiptap/react/menus';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

function ToolbarButton({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
        active ? 'bg-stone-900 text-white' : 'bg-white text-slate-700 hover:bg-stone-100'
      }`}
    >
      {children}
    </button>
  );
}

export function RichTextEditor({ label, value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      Image,
      Placeholder.configure({
        placeholder: `Write ${label.toLowerCase()}...`,
      }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class:
          'tiptap ProseMirror min-h-[14rem] rounded-2xl border border-stone-200 bg-white px-4 py-4 text-[15px] text-slate-900 shadow-inner shadow-stone-100',
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) {
      return;
    }

    if (editor.getHTML() !== value) {
      editor.commands.setContent(value || '<p></p>', { emitUpdate: false });
    }
  }, [editor, value]);

  if (!editor) {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-slate-600">{label}</label>
        <div className="field-shell min-h-[14rem] animate-pulse bg-stone-100" />
      </div>
    );
  }

  const addLink = () => {
    const current = editor.getAttributes('link').href as string | undefined;
    const url = window.prompt('Enter link URL', current ?? 'https://');
    if (url === null) {
      return;
    }
    if (!url.trim()) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url.trim() }).run();
  };

  const addImage = () => {
    const src = window.prompt('Paste image URL');
    if (!src?.trim()) {
      return;
    }
    editor.chain().focus().setImage({ src: src.trim() }).run();
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <label className="block text-sm font-medium text-slate-600">{label}</label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={addImage}
            className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-stone-50"
          >
            Add image
          </button>
          <button
            type="button"
            onClick={addLink}
            className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-stone-50"
          >
            Add link
          </button>
        </div>
      </div>

      <div className="relative">
        <BubbleMenu
          editor={editor}
          options={{ placement: 'top' }}
          className="flex flex-wrap gap-2 rounded-2xl border border-stone-200 bg-stone-950/95 p-2 shadow-2xl"
        >
          <ToolbarButton active={editor.isActive('bold')} onClick={() => editor.chain().focus().toggleBold().run()}>
            Bold
          </ToolbarButton>
          <ToolbarButton active={editor.isActive('italic')} onClick={() => editor.chain().focus().toggleItalic().run()}>
            Italic
          </ToolbarButton>
          <ToolbarButton active={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
            H1
          </ToolbarButton>
          <ToolbarButton active={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            H2
          </ToolbarButton>
          <ToolbarButton active={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            H3
          </ToolbarButton>
          <ToolbarButton active={editor.isActive('link')} onClick={addLink}>
            Link
          </ToolbarButton>
        </BubbleMenu>

        <FloatingMenu
          editor={editor}
          options={{ placement: 'left-start' }}
          className="flex flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl"
        >
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-lg font-semibold text-white"
          >
            +
          </button>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className="rounded-xl border border-stone-200 px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-stone-50"
            >
              Bullet list
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className="rounded-xl border border-stone-200 px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-stone-50"
            >
              Ordered list
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className="rounded-xl border border-stone-200 px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-stone-50"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={addImage}
              className="rounded-xl border border-stone-200 px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-stone-50"
            >
              Image
            </button>
          </div>
        </FloatingMenu>

        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
