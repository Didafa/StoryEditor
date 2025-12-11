import { motion } from 'motion/react';

export function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div 
        className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
        style={{ backgroundColor: '#0052CC' }}
      >
        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
        </svg>
      </div>
      
      <div className="bg-muted rounded-lg px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-muted-foreground"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
