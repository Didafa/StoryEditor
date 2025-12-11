import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface GenerateDocumentDialogProps {
  show: boolean;
  onClose: () => void;
  onGenerate: (prompt: string) => void;
  sidebarOpen?: boolean;
}

export function GenerateDocumentDialog({ show, onClose, onGenerate, sidebarOpen = true }: GenerateDocumentDialogProps) {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = () => {
    if (prompt.trim()) {
      onGenerate(prompt);
      setPrompt('');
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleGenerate();
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full rounded-lg shadow-2xl overflow-hidden mb-8"
          style={{
            backgroundColor: 'rgba(0, 167, 238, 0.1)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <Sparkles 
                className="h-5 w-5" 
                style={{ color: '#000000' }}
              />
              <h3 
                className="normal-case"
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: 'var(--text-h3)',
                  fontWeight: 'var(--font-weight-bold)',
                  lineHeight: '1.5',
                  color: '#000000',
                }}
              >
                Generate article
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-black/10 transition-colors"
              style={{ color: '#000000' }}
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
              placeholder="Describe the article you want to create. Type @ to include content from your knowledge."
              autoFocus
              className="w-full bg-transparent border-none outline-none resize-none placeholder:opacity-60"
              rows={2}
              style={{
                fontFamily: 'Figtree, sans-serif',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-weight-regular)',
                lineHeight: '1.5',
                color: '#000000',
              }}
            />
          </div>

          {/* Footer */}
          <div className="px-6 pb-4 flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim()}
              className="px-4 py-2 rounded normal-case transition-all hover:bg-black/20 disabled:cursor-not-allowed"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.15)',
                color: '#000000',
                fontFamily: 'Figtree, sans-serif',
                fontSize: 'var(--text-button)',
                fontWeight: 'var(--font-weight-bold)',
                lineHeight: '1.5',
                opacity: prompt.trim() ? 1 : 0.5,
                borderRadius: 'var(--radius)',
              }}
            >
              Generate
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}