import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ContextualTooltip } from './ContextualTooltip';
import { FloatingMenu } from './FloatingMenu';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EditorContentProps {
  scene: number;
  selectedImage?: string;
  onSceneProgress: () => void;
}

export function EditorContent({ scene, selectedImage, onSceneProgress }: EditorContentProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const [floatingMenuPos, setFloatingMenuPos] = useState({ top: 0, left: 0 });
  const [highlightedText, setHighlightedText] = useState<string | null>(null);
  const [researchHighlights, setResearchHighlights] = useState<boolean>(false);
  const editorRef = useRef<HTMLDivElement>(null);
  
  // Show research highlights when entering scene 3
  useState(() => {
    if (scene === 3) {
      setResearchHighlights(true);
    } else {
      setResearchHighlights(false);
    }
  });

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      if (editorRef.current) {
        const editorRect = editorRef.current.getBoundingClientRect();
        setFloatingMenuPos({
          top: rect.top - editorRect.top - 50,
          left: rect.left - editorRect.left
        });
        setShowFloatingMenu(true);
        setHighlightedText(selection.toString());
      }
    } else {
      setShowFloatingMenu(false);
    }
  };

  const handleFloatingAction = (action: string) => {
    setShowFloatingMenu(false);
    
    if (action === 'check') {
      setHighlightedText(null);
      setTimeout(() => {
        setShowTooltip(true);
        setTooltipPos({ top: 350, left: 100 });
      }, 300);
    }
  };

  const handleParagraphClick = (e: React.MouseEvent) => {
    if (scene === 0) {
      const target = e.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      
      if (editorRef.current) {
        const editorRect = editorRef.current.getBoundingClientRect();
        setTooltipPos({
          top: rect.top - editorRect.top + rect.height,
          left: rect.left - editorRect.left
        });
        setShowTooltip(true);
      }
    }
  };

  return (
    <div 
      ref={editorRef}
      className="flex-1 overflow-y-auto px-16 py-12 relative"
      onMouseUp={handleTextSelect}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Title */}
        <h1 className="mb-8">
          The Future of Content Creation: How AI Transforms Writing
        </h1>

        {/* Hero Image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 rounded-lg overflow-hidden"
          >
            <ImageWithFallback
              src={selectedImage}
              alt="Article hero"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="space-y-6">
          <p onClick={handleParagraphClick}>
            Artificial intelligence is revolutionizing how we create content. From automated 
            suggestions to real-time fact-checking, AI-powered editors are becoming 
            indispensable tools for writers, journalists, and content creators worldwide.
          </p>

          <p>
            Modern text editors now feature intelligent assistants that understand context, 
            anticipate needs, and provide proactive support. These tools don't replace human 
            creativity—they amplify it, handling repetitive tasks while writers focus on 
            crafting compelling narratives.
          </p>

          <h2>The New Writing Experience</h2>

          <p 
            className={highlightedText ? 'bg-yellow-100 dark:bg-yellow-900/30 transition-colors' : ''}
          >
            Unlike traditional word processors, next-generation editors operate as collaborative 
            partners. They suggest improvements, find relevant sources, and even help with 
            research—all while maintaining the writer's unique voice and style.
          </p>

          <p>
            This shift represents more than technological advancement. It's a fundamental 
            reimagining of the creative process, where human insight and machine intelligence 
            work in harmony to produce better content, faster.
          </p>

          <h2>Key Capabilities</h2>

          <ul 
            className={`list-disc pl-6 space-y-2 ${
              scene === 3 ? 'border-l-4 border-accent pl-8 bg-accent/5 py-3 rounded-r' : ''
            } transition-all duration-300`}
          >
            <li>Real-time grammar and style suggestions</li>
            <li>Contextual media recommendations</li>
            <li>Automated fact-checking and source validation</li>
            <li>SEO optimization and metadata generation</li>
            <li>Tone and readability analysis</li>
          </ul>

          <p>
            As these tools evolve, they're becoming more intuitive, understanding not just 
            what we write, but why we write it. The result is a writing experience that feels 
            less like using software and more like collaborating with an insightful colleague.
          </p>
          
          {/* Research Mode Overlay Hint */}
          {scene === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 p-4 bg-accent/10 border-2 border-accent rounded-lg"
            >
              <p className="text-sm">
                <span className="font-semibold" style={{ color: '#0052CC' }}>Research Mode Active:</span>{' '}
                The AI is analyzing your content and can suggest relevant images, videos, sources, and research materials. Check the assistant panel for suggestions.
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Contextual Tooltip */}
      <ContextualTooltip
        show={showTooltip}
        message="I've noticed you're working on AI in text editors. Would you like me to suggest some relevant images?"
        onAccept={() => {
          setShowTooltip(false);
          onSceneProgress();
        }}
        onDismiss={() => setShowTooltip(false)}
        position={tooltipPos}
        type="suggestion"
      />

      {/* Floating Menu */}
      <FloatingMenu
        show={showFloatingMenu}
        position={floatingMenuPos}
        onAction={handleFloatingAction}
      />
    </div>
  );
}
