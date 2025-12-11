import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, HelpCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { EditorToolbar } from './components/EditorToolbar';
import { TiptapEditor } from './components/TiptapEditor';
import { AIAssistant } from './components/AIAssistant';
import { ImageGallery } from './components/ImageGallery';
import { SceneController } from './components/SceneController';
import { PublicationPanel } from './components/PublicationPanel';
import { Button } from './components/ui/button';

export default function App() {
  const [scene, setScene] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [editor, setEditor] = useState<any>(null);
  const [view, setView] = useState<'editor' | 'publication'>('editor');

  const totalScenes = 5;

  const handleSceneAction = (action: string) => {
    if (action === 'showImages') {
      setShowImageGallery(true);
    } else if (action === 'showGrammar') {
      // Could open a grammar panel
      console.log('Opening grammar panel...');
    } else if (action === 'addSources') {
      // Could add source links
      console.log('Adding sources...');
    } else if (action === 'generateMeta') {
      // Could show metadata generation
      console.log('Generating metadata...');
    }
  };

  const handleNextScene = () => {
    if (scene < totalScenes - 1) {
      setScene(scene + 1);
    }
  };

  const handlePrevScene = () => {
    if (scene > 0) {
      setScene(scene - 1);
    }
  };

  const handleReset = () => {
    setScene(0);
    setSelectedImage(undefined);
    setResetKey(prev => prev + 1);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="size-full flex flex-col bg-background overflow-hidden">
        {/* Top Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-b border-border bg-background px-6 py-3 flex items-center justify-between shrink-0"
        >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div 
              className="h-8 w-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: '#0052CC' }}
            >
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h1 className="font-semibold">New Story Editor</h1>
          </div>
          <div className="h-6 w-px bg-border" />
          <p className="text-sm text-muted-foreground">
            Next-generation content editor with AI collaboration
          </p>
        </div>

        <div className="flex items-center gap-2">
          {view === 'publication' && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setView('editor')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Editor
            </Button>
          )}
          <Button variant="ghost" size="sm">
            Save Draft
          </Button>
          <Button
            size="sm"
            style={{ backgroundColor: '#0052CC' }}
            className="text-white hover:opacity-90"
            onClick={() => setView('publication')}
          >
            Publish
          </Button>
          <div className="w-px h-6 bg-border mx-2" />
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {view === 'editor' ? (
          <>
            {/* AI Assistant Column */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{
                x: sidebarOpen ? 0 : -400,
                opacity: sidebarOpen ? 1 : 0
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-96 border-r border-border bg-background shrink-0 overflow-hidden"
            >
              <AIAssistant
                key={resetKey}
                scene={scene}
                onSceneAction={handleSceneAction}
              />
            </motion.div>

            {/* Editor Column */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 flex flex-col bg-background overflow-hidden"
            >
              <EditorToolbar editor={editor} />
              <TiptapEditor
                scene={scene}
                selectedImage={selectedImage}
                onSceneProgress={handleNextScene}
                onEditorReady={setEditor}
                onRequestImage={() => setShowImageGallery(true)}
                sidebarOpen={sidebarOpen}
                imageGalleryOpen={showImageGallery}
              />
            </motion.div>

            {/* Sidebar Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="absolute top-20 z-40 rounded-full shadow-lg transition-all duration-300"
              style={{
                left: sidebarOpen ? '360px' : '16px',
                backgroundColor: sidebarOpen ? 'var(--background)' : '#0052CC',
                color: sidebarOpen ? 'var(--foreground)' : 'white'
              }}
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </>
        ) : (
          <PublicationPanel />
        )}
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        show={showImageGallery}
        onClose={() => setShowImageGallery(false)}
        onSelect={(img) => setSelectedImage(img)}
        sidebarOpen={sidebarOpen}
      />

      {/* Scene Controller */}
      <SceneController
        currentScene={scene}
        totalScenes={totalScenes}
        onPrevious={handlePrevScene}
        onNext={handleNextScene}
        onReset={handleReset}
      />


      </div>
    </DndProvider>
  );
}
