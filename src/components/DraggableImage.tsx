import { useDrag } from 'react-dnd';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

interface DraggableImageProps {
  src: string;
  index: number;
  onClick: () => void;
}

export function DraggableImage({ src, index, onClick }: DraggableImageProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMAGE',
    item: { imageUrl: src },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <motion.div
      ref={drag}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="relative group cursor-grab rounded-lg overflow-hidden border border-border hover:border-primary transition-colors shrink-0"
      onClick={onClick}
      style={{
        width: '200px',
        height: '150px',
        opacity: isDragging ? 0.5 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <ImageWithFallback
        src={src}
        alt={`AI suggestion ${index + 1}`}
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
        <Button
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ backgroundColor: '#0052CC' }}
        >
          <Check className="h-4 w-4 mr-2" />
          Select
        </Button>
      </div>
      {isDragging && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 border-2 border-dashed border-primary">
          <p className="text-sm text-primary">Dragging...</p>
        </div>
      )}
    </motion.div>
  );
}
