import { useState } from 'react';
import { Plus, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlockHandleProps {
  onClick: (e: React.MouseEvent) => void;
  onDragStart?: (e: React.DragEvent) => void;
}

export function BlockHandle({ onClick, onDragStart }: BlockHandleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="absolute left-0 top-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      style={{ 
        transform: 'translateX(-100%)',
        paddingRight: '4px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        className="h-6 w-6 flex items-center justify-center rounded hover:bg-muted transition-colors"
        style={{ 
          color: isHovered ? 'var(--primary)' : 'var(--muted-foreground)'
        }}
        aria-label="Add block"
      >
        <Plus className="h-4 w-4" />
      </button>
      <div 
        draggable={true}
        onDragStart={onDragStart}
        className="h-6 w-4 flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ color: 'var(--muted-foreground)' }}
      >
        <GripVertical className="h-4 w-4" />
      </div>
    </div>
  );
}
