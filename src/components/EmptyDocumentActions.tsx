import { motion } from 'motion/react';
import { Sparkles, Edit3, LayoutTemplate, Image } from 'lucide-react';

interface EmptyDocumentActionsProps {
  onAction: (action: 'generate' | 'help' | 'templates' | 'image') => void;
}

export function EmptyDocumentActions({ onAction }: EmptyDocumentActionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-2"
    >
      {/* Generate document - Primary blue */}
      <button
        onClick={() => onAction('generate')}
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:shadow-md"
        style={{
          backgroundColor: '#0052CC',
          color: 'white',
        }}
      >
        <Sparkles className="h-4 w-4" />
        <span
          className="normal-case"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: 'var(--text-button)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.5',
          }}
        >
          Generate article
        </span>
      </button>

      {/* Help me write - Light blue */}
      <button
        onClick={() => onAction('help')}
        className="flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:shadow-md"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'var(--primary-foreground)',
        }}
      >
        <Edit3 className="h-4 w-4" />
        <span
          className="normal-case"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: 'var(--text-button)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.5',
          }}
        >
          Help me write
        </span>
      </button>

      {/* Templates */}
      <button
        onClick={() => onAction('templates')}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border transition-all hover:bg-muted hover:shadow-md"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--foreground)',
        }}
      >
        <LayoutTemplate className="h-4 w-4" />
        <span
          className="normal-case"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: 'var(--text-button)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.5',
          }}
        >
          Templates
        </span>
      </button>

      {/* Main image */}
      <button
        onClick={() => onAction('image')}
        className="flex items-center gap-2 px-4 py-2 rounded-full border border-border transition-all hover:bg-muted hover:shadow-md"
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--foreground)',
        }}
      >
        <Image className="h-4 w-4" />
        <span
          className="normal-case"
          style={{
            fontFamily: 'Figtree, sans-serif',
            fontSize: 'var(--text-button)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: '1.5',
          }}
        >
          Main image
        </span>
      </button>
    </motion.div>
  );
}
