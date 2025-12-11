import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { DraggableImage } from './DraggableImage';
import { useRef } from 'react';

interface ImageGalleryProps {
  show: boolean;
  onClose: () => void;
  onSelect: (imageUrl: string) => void;
  sidebarOpen?: boolean;
}

export function ImageGallery({ show, onClose, onSelect, sidebarOpen = true }: ImageGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const images = [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    'https://images.unsplash.com/photo-1531746790731-6c087fecd65a',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    'https://images.unsplash.com/photo-1518770660439-4636190af475',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'left' ? -scrollAmount : scrollAmount);
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 z-50 bg-background border-t border-border shadow-2xl"
          style={{
            right: sidebarOpen ? '24rem' : '0',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-border">
            <div>
              <h3 className="font-semibold">AI-Suggested Images</h3>
              <p className="text-sm text-muted-foreground">
                These images match your content about AI in text editors
              </p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Scrollable Gallery */}
          <div className="relative">
            {/* Left Scroll Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Image Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto px-16 py-6"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {images.map((img, idx) => (
                <DraggableImage
                  key={idx}
                  src={img}
                  index={idx}
                  onClick={() => {
                    onSelect(img);
                    onClose();
                  }}
                />
              ))}
            </div>

            {/* Right Scroll Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full shadow-lg bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
