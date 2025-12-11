import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, User } from 'lucide-react';
import { Button } from './ui/button';

interface AIMessageProps {
  type: 'ai' | 'user';
  message: string;
  actions?: Array<{ label: string; onClick: () => void }>;
  delay?: number;
}

export const AIMessage = forwardRef<HTMLDivElement, AIMessageProps>(
  ({ type, message, actions, delay = 0 }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        className={`flex gap-3 ${type === 'user' ? 'flex-row-reverse' : ''}`}
      >
      <div 
        className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: type === 'ai' ? '#0052CC' : '#E9E9E9'
        }}
      >
        {type === 'ai' ? (
          <Sparkles className="h-4 w-4 text-white" />
        ) : (
          <User className="h-4 w-4 text-foreground" />
        )}
      </div>
      
      <div className={`flex-1 ${type === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
        <div 
          className={`rounded-lg px-4 py-2.5 max-w-[85%] ${
            type === 'ai' 
              ? 'bg-muted' 
              : 'bg-primary text-primary-foreground'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        </div>
        
        {actions && actions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {actions.map((action, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={action.onClick}
                className="h-7 text-xs"
                style={{
                  borderColor: '#0052CC',
                  color: '#0052CC'
                }}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
});

AIMessage.displayName = 'AIMessage';
