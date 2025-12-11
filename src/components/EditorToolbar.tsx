import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  List, 
  ListOrdered,
  Link2,
  Image,
  MoreHorizontal 
} from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

interface EditorToolbarProps {
  editor?: any;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  if (!editor) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-background">
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <Underline className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <ListOrdered className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <Link2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <Image className="h-4 w-4" />
        </Button>
        
        <Separator orientation="vertical" className="h-6 mx-1" />
        
        <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-background">
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().toggleBold().run()}
        data-active={editor.isActive('bold')}
        style={{
          backgroundColor: editor.isActive('bold') ? 'var(--muted)' : 'transparent'
        }}
      >
        <Bold className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        style={{
          backgroundColor: editor.isActive('italic') ? 'var(--muted)' : 'transparent'
        }}
      >
        <Italic className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        style={{
          backgroundColor: editor.isActive('strike') ? 'var(--muted)' : 'transparent'
        }}
      >
        <Underline className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6 mx-1" />
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        style={{
          backgroundColor: editor.isActive('bulletList') ? 'var(--muted)' : 'transparent'
        }}
      >
        <List className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        style={{
          backgroundColor: editor.isActive('orderedList') ? 'var(--muted)' : 'transparent'
        }}
      >
        <ListOrdered className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6 mx-1" />
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => {
          const url = window.prompt('Enter URL:');
          if (url) {
            editor.chain().focus().setLink({ href: url }).run();
          }
        }}
      >
        <Link2 className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8"
        onClick={() => {
          const url = window.prompt('Enter image URL:');
          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      >
        <Image className="h-4 w-4" />
      </Button>
      
      <Separator orientation="vertical" className="h-6 mx-1" />
      
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}
