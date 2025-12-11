import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';

interface SceneControllerProps {
  currentScene: number;
  totalScenes: number;
  onPrevious: () => void;
  onNext: () => void;
  onReset: () => void;
}

export function SceneController({ 
  currentScene, 
  totalScenes, 
  onPrevious, 
  onNext,
  onReset 
}: SceneControllerProps) {
  const scenes = [
    'Initial State',
    'Image Suggestion',
    'Grammar Check',
    'Research Mode',
    'Publishing'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-card border border-border rounded-full shadow-2xl px-6 py-3 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentScene === 0}
          className="h-8 w-8 rounded-full"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {Array.from({ length: totalScenes }).map((_, idx) => (
              <div
                key={idx}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: idx === currentScene ? '24px' : '8px',
                  backgroundColor: idx === currentScene ? '#0052CC' : '#E9E9E9'
                }}
              />
            ))}
          </div>
          
          <div className="text-sm font-medium min-w-[120px] text-center">
            {scenes[currentScene]}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentScene === totalScenes - 1}
          className="h-8 w-8 rounded-full"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <div className="w-px h-6 bg-border ml-2" />

        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="h-8 w-8 rounded-full"
          title="Reset demo"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
