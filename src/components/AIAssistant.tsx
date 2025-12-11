import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { AIMessage } from './AIMessage';
import { TypingIndicator } from './TypingIndicator';
import { ScrollArea } from './ui/scroll-area';
import { ResearchPanel } from './ResearchPanel';

interface Message {
  id: string;
  type: 'ai' | 'user';
  message: string;
  actions?: Array<{ label: string; onClick: () => void }>;
}

interface AIAssistantProps {
  scene: number;
  onSceneAction: (action: string) => void;
}

export function AIAssistant({ scene, onSceneAction }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shownScenesRef = useRef<Set<number>>(new Set([0]));

  useEffect(() => {
    // Initialize with welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          type: 'ai',
          message: "Hi! I'm your AI writing assistant. I can help you with:\n\n• Generating content ideas\n• Finding images and media\n• Checking grammar and style\n• Fact-checking information\n• SEO optimization\n\nWhat would you like to work on?",
        }
      ]);
    }
  }, []);

  useEffect(() => {
    // Skip if scene 0 or if we've already shown this scene
    if (scene === 0 || shownScenesRef.current.has(scene)) return;
    
    // Mark this scene as shown
    shownScenesRef.current.add(scene);
    
    // Scene-specific AI messages
    if (scene === 1) {
      addAIMessage(
        "I noticed you're starting a new paragraph. Would you like me to suggest some relevant images for this section?",
        [
          { label: 'Show images', onClick: () => onSceneAction('showImages') },
          { label: 'Not now', onClick: () => {} }
        ]
      );
    } else if (scene === 2) {
      addAIMessage(
        "I've done a quick grammar review of your text. I found 3 suggestions that could improve clarity. Would you like to review them?",
        [
          { label: 'Open corrections', onClick: () => onSceneAction('showGrammar') },
          { label: 'Skip', onClick: () => {} }
        ]
      );
    } else if (scene === 3) {
      addAIMessage(
        "I found 2 related articles that might be useful:\n\n• \"AI in Content Creation\" - TechCrunch\n• \"The Future of Writing Tools\" - Medium\n\nWould you like me to add these as sources?",
        [
          { label: 'Add sources', onClick: () => onSceneAction('addSources') },
          { label: 'Maybe later', onClick: () => {} }
        ]
      );
    } else if (scene === 4) {
      addAIMessage(
        "Your article is looking great! Ready to publish? I can generate:\n\n• SEO title and description\n• Meta tags\n• Social media snippets\n• Category suggestions",
        [
          { label: 'Generate metadata', onClick: () => onSceneAction('generateMeta') },
          { label: 'Not yet', onClick: () => {} }
        ]
      );
    }
  }, [scene, onSceneAction]);

  const addAIMessage = (message: string, actions?: Array<{ label: string; onClick: () => void }>) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          type: 'ai',
          message,
          actions
        }
      ]);
    }, 1000);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      message: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "I can help with that! Let me analyze your content and provide some suggestions.",
        "Great question! Based on your article, I recommend focusing on clarity and engagement.",
        "I've processed your request. Here are some tailored suggestions for your content.",
      ];
      
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          message: responses[Math.floor(Math.random() * responses.length)]
        }
      ]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-muted/30 overflow-hidden">
      {/* Header */}
      <div className="border-b border-border p-4 bg-background shrink-0">
        <div className="flex items-center gap-2">
          <div 
            className="h-8 w-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#0052CC' }}
          >
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Ring Chat</h3>
            <p className="text-xs text-muted-foreground">Always here to help</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {/* Research Panel - Shows in scene 3 */}
          <ResearchPanel show={scene === 3} />
          
          <AnimatePresence mode="popLayout">
            {messages.map((msg, idx) => (
              <AIMessage
                key={msg.id}
                type={msg.type}
                message={msg.message}
                actions={msg.actions}
                delay={idx * 0.1}
              />
            ))}
          </AnimatePresence>
          {isTyping && <TypingIndicator />}
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border p-4 bg-background shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-3 py-2 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-sm"
          />
          <Button
            onClick={handleSend}
            size="icon"
            style={{ backgroundColor: '#0052CC' }}
            className="text-white hover:opacity-90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          💡 Try: "Suggest media" or "Fact-check this paragraph"
        </p>
      </div>
    </div>
  );
}
