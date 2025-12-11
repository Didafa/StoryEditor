import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Maximize2, Minimize2, MessageSquare, CheckCircle } from 'lucide-react';
import svgPaths from '../imports/svg-5rsyqvl061';

interface FloatingMenuProps {
  show: boolean;
  position: { top: number; left: number };
  onAction: (action: string) => void;
}

export function FloatingMenu({ show, position, onAction }: FloatingMenuProps) {
  const [showImproveMenu, setShowImproveMenu] = useState(false);

  const handleImproveClick = () => {
    setShowImproveMenu(true);
  };

  const handleActionClick = (action: string) => {
    onAction(action);
    setShowImproveMenu(false);
  };

  // Reset state when menu is hidden
  const handleExitComplete = () => {
    setShowImproveMenu(false);
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute z-50"
          style={{ top: position.top, left: position.left }}
        >
          {!showImproveMenu ? (
            // Main Toolbar
            <div 
              className="bg-white rounded overflow-hidden"
              style={{
                borderRadius: 'var(--radius)',
                boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2)'
              }}
            >
              <div className="flex items-center px-2.5 py-1 gap-2">
                {/* Format Dropdown - Paragraph */}
                <button className="flex items-center gap-2 px-1 py-0.5 hover:bg-muted rounded transition-colors normal-case">
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-button)',
                      lineHeight: '22px',
                      letterSpacing: '0.46px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Paragraph
                  </p>
                  <div className="size-6 flex items-center justify-center">
                    <svg className="block size-[18px]" fill="none" viewBox="0 0 18 18">
                      <path d={svgPaths.p3a559be0} fill="currentColor" fillOpacity="0.87" />
                    </svg>
                  </div>
                </button>

                {/* Bold */}
                <button className="p-1.5 hover:bg-muted rounded-full transition-colors">
                  <svg className="block size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p25d66f0} fill="currentColor" fillOpacity="0.56" />
                  </svg>
                </button>

                {/* Italic */}
                <button className="p-1.5 hover:bg-muted rounded-full transition-colors">
                  <svg className="block size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p16145c80} fill="currentColor" fillOpacity="0.56" />
                  </svg>
                </button>

                {/* Strikethrough */}
                <button className="p-1.5 hover:bg-muted rounded-full transition-colors">
                  <svg className="block size-5" fill="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p26baa000} fill="currentColor" fillOpacity="0.56" />
                  </svg>
                </button>

                {/* Divider */}
                <div className="h-5 flex items-center py-1">
                  <div className="h-full w-px bg-border opacity-20" />
                </div>

                {/* Comment */}
                <button className="flex items-center gap-2 px-1 py-0.5 hover:bg-muted rounded transition-colors normal-case">
                  <svg className="block size-4" fill="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p2ec05880} fill="currentColor" fillOpacity="0.56" />
                  </svg>
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-button)',
                      lineHeight: '22px',
                      letterSpacing: '0.46px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Comment
                  </p>
                </button>

                {/* Divider */}
                <div className="h-5 flex items-center py-1">
                  <div className="h-full w-px bg-border opacity-20" />
                </div>

                {/* Improve writing - AI Button */}
                <button 
                  onClick={handleImproveClick}
                  className="flex items-center gap-2 px-1 py-0.5 hover:bg-muted rounded transition-colors normal-case"
                >
                  <svg className="block size-4" fill="none" viewBox="0 0 16 16">
                    <g>
                      <path d={svgPaths.p6688780} fill="currentColor" fillOpacity="0.56" />
                      <path d={svgPaths.p78f580} fill="currentColor" fillOpacity="0.54" />
                      <path d={svgPaths.pb8fc000} fill="currentColor" fillOpacity="0.54" />
                    </g>
                  </svg>
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-button)',
                      lineHeight: '22px',
                      letterSpacing: '0.46px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Improve writing
                  </p>
                </button>
              </div>
            </div>
          ) : (
            // AI Actions Submenu
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded overflow-hidden"
              style={{
                borderRadius: 'var(--radius)',
                boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2)',
                minWidth: '200px'
              }}
            >
              <div className="py-1">
                <button
                  onClick={() => handleActionClick('expand')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors text-left normal-case"
                >
                  <Maximize2 className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: '24px',
                      letterSpacing: '0.17px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Expand
                  </p>
                </button>
                <button
                  onClick={() => handleActionClick('shorten')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors text-left normal-case"
                >
                  <Minimize2 className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: '24px',
                      letterSpacing: '0.17px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Shorten
                  </p>
                </button>
                <button
                  onClick={() => handleActionClick('tone')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors text-left normal-case"
                >
                  <MessageSquare className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: '24px',
                      letterSpacing: '0.17px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Change tone
                  </p>
                </button>
                <button
                  onClick={() => handleActionClick('check')}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors text-left normal-case"
                >
                  <CheckCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p 
                    className="text-foreground normal-case"
                    style={{
                      fontSize: 'var(--text-base)',
                      lineHeight: '24px',
                      letterSpacing: '0.17px',
                      fontWeight: 'var(--font-weight-regular)'
                    }}
                  >
                    Fact-check
                  </p>
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
