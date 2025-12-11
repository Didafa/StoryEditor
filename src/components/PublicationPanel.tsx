import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckSquare,
  FileText,
  Calendar,
  User,
  Image as ImageIcon,
  AlignLeft,
  Tag,
  Type,
  Link,
  Flag,
  Video,
  Package,
  MessageSquare,
  Info,
  Settings,
  X,
  Lock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  description: string;
  source: string;
}

interface PublicationPanelProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function PublicationPanel({ collapsed = false, onToggle }: PublicationPanelProps) {
  const [license, setLicense] = useState('Company Licence');
  const [source, setSource] = useState('Reuters');
  const [authors, setAuthors] = useState('John Doe');

  const videoItems: MediaItem[] = [
    {
      id: '1',
      type: 'video',
      url: 'https://images.pexels.com/photos/18933495/pexels-photo-18933495.jpeg',
      description: 'One of the greatest benefits of a soccer event is its ability to dramatically bring...',
      source: 'AKPA/Getty',
    },
  ];

  const imageItems: MediaItem[] = [
    {
      id: '2',
      type: 'image',
      url: 'https://images.pexels.com/photos/18933495/pexels-photo-18933495.jpeg',
      description: 'Players celebrating a winning goal under bright stadium lights, with cheering fans..',
      source: 'AKPA/Getty',
    },
    {
      id: '3',
      type: 'image',
      url: 'https://images.pexels.com/photos/3991976/pexels-photo-3991976.jpeg',
      description: 'One of the greatest benefits of AI in text editors is its ability to dramatically... AKPA/Getty',
      source: 'AKPA/Getty',
    },
  ];

  const sidebarIcons = [
    { icon: CheckSquare, label: 'Tasks', badge: true, badgeColor: '#FFB800' },
    { icon: FileText, label: 'Document' },
    { icon: Calendar, label: 'Calendar' },
    { icon: User, label: 'Author' },
    { icon: ImageIcon, label: 'Images' },
    { icon: AlignLeft, label: 'Content' },
    { icon: Tag, label: 'Tags' },
    { icon: Type, label: 'Typography' },
    { icon: Link, label: 'Links' },
    { icon: Flag, label: 'Flags' },
    { icon: Video, label: 'Video' },
    { icon: Package, label: 'Package' },
    { icon: MessageSquare, label: 'Comments', badge: true, badgeColor: '#0052CC' },
  ];

  return (
    <div className="flex h-full bg-background relative">
      {/* Left Sidebar with Icons */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-20 border-r border-border bg-background flex flex-col items-center py-4 gap-2 shrink-0"
      >
        {/* Toggle Button at Top */}
        <button
          onClick={onToggle}
          className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors mb-2"
          title={collapsed ? "Expand panel" : "Collapse panel"}
        >
          {collapsed ? (
            <ChevronLeft className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5 text-foreground" strokeWidth={1.5} />
          )}
        </button>

        <div className="w-10 h-px bg-border mb-2" />

        {sidebarIcons.map((item, idx) => (
          <div key={idx} className="relative group">
            <button
              className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors relative"
              title={item.label}
            >
              <item.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              {item.badge && (
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.badgeColor }}
                />
              )}
            </button>
          </div>
        ))}

        <div className="flex-1" />

        {/* Bottom Icons */}
        <button
          className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          title="Info"
        >
          <Info className="h-5 w-5 text-foreground" strokeWidth={1.5} />
        </button>
        <button
          className="w-12 h-12 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          title="Settings"
        >
          <Settings className="h-5 w-5 text-foreground" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* Main Content Area */}
      <AnimatePresence>
        {!collapsed && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 360, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="overflow-y-auto"
          >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="py-12 px-6"
        >
          {/* Header */}
          <h1
            className="mb-12"
            style={{
              fontFamily: 'Figtree, sans-serif',
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '1.2',
            }}
          >
            Prepare for publication
          </h1>

          {/* Fill Required Fields Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#00C853' }}
              />
              <h2
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Fill required fields
              </h2>
            </div>

            <div className="space-y-4">
              {/* License Field */}
              <div>
                <label
                  className="block mb-2 text-muted-foreground"
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  License *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '16px',
                    }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Source Field */}
              <div>
                <label
                  className="block mb-2 text-muted-foreground"
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Source *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '16px',
                    }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Authors Field */}
              <div>
                <label
                  className="block mb-2 text-muted-foreground"
                  style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  Authors *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontSize: '16px',
                    }}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-muted-foreground hover:text-foreground">
                      <X className="h-4 w-4" />
                    </button>
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Video Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#FFB800' }}
              />
              <h2
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Add 1 video
              </h2>
            </div>

            <div className="space-y-4">
              {videoItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <img
                    src={item.url}
                    alt={item.description}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                      }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontSize: '12px',
                      }}
                    >
                      {item.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Images Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: '#FFB800' }}
              />
              <h2
                style={{
                  fontFamily: 'Figtree, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                }}
              >
                Add 2 images
              </h2>
            </div>

            <div className="space-y-4">
              {imageItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <img
                    src={item.url}
                    alt={item.description}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                      }}
                    >
                      {item.description}
                    </p>
                    <p
                      className="text-muted-foreground"
                      style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontSize: '12px',
                      }}
                    >
                      {item.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
