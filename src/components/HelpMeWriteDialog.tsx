import { motion, AnimatePresence } from 'motion/react';
import { X, Edit3 } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface HelpMeWriteDialogProps {
  show: boolean;
  onClose: () => void;
  onCreate: (prompt: string) => void;
  sidebarOpen?: boolean;
}

export function HelpMeWriteDialog({ show, onClose, onCreate, sidebarOpen = true }: HelpMeWriteDialogProps) {
  const [prompt, setPrompt] = useState('');

  const handleCreate = () => {
    if (prompt.trim()) {
      onCreate(prompt);
      setPrompt('');
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleCreate();
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24"
          style={{
            paddingRight: sidebarOpen ? '24rem' : '0',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full mx-8 rounded-lg shadow-2xl overflow-hidden"
            style={{
              maxWidth: '800px',
              backgroundColor: 'var(--primary)',
              opacity: 0.95,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2">
              <div className="flex items-center gap-2">
                <Edit3 
                  className="h-5 w-5" 
                  style={{ color: 'var(--primary-foreground)' }}
                />
                <h3 
                  className="normal-case"
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: 'var(--text-h3)',
                    fontWeight: 'var(--font-weight-bold)',
                    lineHeight: '1.5',
                    color: 'var(--primary-foreground)',
                  }}
                >
                  Help me write
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-1 hover:bg-black/10 transition-colors"
                style={{ color: 'var(--primary-foreground)' }}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 pb-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Plan for an article about Croatia"
                autoFocus
                className="w-full bg-transparent border-none outline-none resize-none placeholder:opacity-60"
                rows={2}
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-weight-regular)',
                  lineHeight: '1.5',
                  color: 'var(--primary-foreground)',
                }}
              />
            </div>

            {/* Footer */}
            <div className="px-6 pb-4 flex justify-end">
              <button
                onClick={handleCreate}
                disabled={!prompt.trim()}
                className="px-4 py-2 rounded normal-case transition-all hover:bg-white/30 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  color: 'var(--primary-foreground)',
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: 'var(--text-button)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.5',
                  opacity: prompt.trim() ? 1 : 0.5,
                  borderRadius: 'var(--radius)',
                }}
              >
                Create
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
