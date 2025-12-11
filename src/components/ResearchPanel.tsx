import { motion } from 'motion/react';
import { Image, Film, Share2, FileText, Link2, Search } from 'lucide-react';

interface ResearchPanelProps {
  show: boolean;
}

export function ResearchPanel({ show }: ResearchPanelProps) {
  if (!show) return null;

  const suggestions = [
    { icon: Image, label: 'Add best fitted photos', color: '#0052CC' },
    { icon: Film, label: 'Add fitted videos', color: '#0052CC' },
    { icon: Share2, label: 'Find social media posts', color: '#0052CC' },
    { icon: FileText, label: 'Research similar articles', color: '#0052CC' },
    { icon: Link2, label: 'Find authoritative sources', color: '#0052CC' },
    { icon: Search, label: 'Get fact-checking data', color: '#0052CC' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-card border border-border rounded-lg p-4 mb-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <Search className="h-5 w-5" style={{ color: '#0052CC' }} />
        <h3 className="font-semibold">Research Mode</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        I can help you enrich your content with media and sources
      </p>
      
      <div className="grid grid-cols-1 gap-2">
        {suggestions.map((suggestion, idx) => {
          const Icon = suggestion.icon;
          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 p-3 bg-muted/50 hover:bg-muted rounded-md transition-colors text-left max-h-12"
            >
              <Icon className="h-4 w-4 shrink-0" style={{ color: suggestion.color }} />
              <span className="text-xs normal-case">{suggestion.label}</span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
