import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X } from 'lucide-react';
import { Button } from './ui/button';

interface ContextualTooltipProps {
  show: boolean;
  message: string;
  onAccept?: () => void;
  onDismiss: () => void;
  position?: { top: number; left: number };
  type?: 'suggestion' | 'hint';
}

export function ContextualTooltip({ 
  show, 
  message, 
  onAccept, 
  onDismiss,
  position = { top: 0, left: 0 },
  type = 'suggestion'
}: ContextualTooltipProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute z-50"
          style={{ top: position.top, left: position.left }}
        >
          <div 
            className="bg-card border border-border rounded-lg shadow-lg p-3 max-w-xs"
            style={{
              borderColor: type === 'hint' ? '#FFD700' : '#0052CC'
            }}
          >
            <div className="flex items-start gap-2">
              <div 
                className="shrink-0 mt-0.5"
                style={{ color: type === 'hint' ? '#FFD700' : '#0052CC' }}
              >
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm">{message}</p>
                {onAccept && (
                  <div className="flex gap-2 mt-2">
                    <Button 
                      size="sm" 
                      onClick={onAccept}
                      style={{ backgroundColor: '#0052CC' }}
                      className="h-7 px-3 text-white hover:opacity-90"
                    >
                      Yes, please
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={onDismiss}
                      className="h-7 px-3"
                    >
                      Not now
                    </Button>
                  </div>
                )}
              </div>
              {!onAccept && (
                <button 
                  onClick={onDismiss}
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
