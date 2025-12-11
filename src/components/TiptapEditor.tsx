import { useEffect, useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { motion } from "motion/react";
import { useDrop } from 'react-dnd';
import { ContextualTooltip } from "./ContextualTooltip";
import { FloatingMenu } from "./FloatingMenu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BlockMenu } from "./BlockMenu";
import { Plus, GripVertical } from "lucide-react";
import { ImageWithCaption } from "./ImageWithCaption";
import { EmptyDocumentActions } from "./EmptyDocumentActions";
import { HelpMeWriteDialog } from "./HelpMeWriteDialog";
import { GenerateDocumentDialog } from "./GenerateDocumentDialog";

interface TiptapEditorProps {
  scene: number;
  selectedImage?: string;
  onSceneProgress: () => void;
  onEditorReady?: (editor: any) => void;
  onRequestImage?: () => void;
  sidebarOpen?: boolean;
  imageGalleryOpen?: boolean;
}

const initialContent = `<p>Artificial intelligence is revolutionizing how we create content. From automated suggestions to real-time fact-checking, AI-powered editors are becoming indispensable tools for writers, journalists, and content creators worldwide.</p>

<p>Modern text editors now feature intelligent assistants that understand context, anticipate needs, and provide proactive support. These tools don't replace human creativity—they amplify it, handling repetitive tasks while writers focus on crafting compelling narratives.</p>

<h2>The New Writing Experience</h2>

<p>Unlike traditional word processors, next-generation editors operate as collaborative partners. They suggest improvements, find relevant sources, and even help with research—all while maintaining the writer's unique voice and style.</p>

<p>This shift represents more than technological advancement. It's a fundamental reimagining of the creative process, where human insight and machine intelligence work in harmony to produce better content, faster.</p>

<h2>Key Capabilities</h2>

<ul>
  <li>Real-time grammar and style suggestions</li>
  <li>Contextual media recommendations</li>
  <li>Automated fact-checking and source validation</li>
  <li>SEO optimization and metadata generation</li>
  <li>Tone and readability analysis</li>
</ul>

<p>As these tools evolve, they're becoming more intuitive, understanding not just what we write, but why we write it. The result is a writing experience that feels less like using software and more like collaborating with an insightful colleague.</p>`;

export function TiptapEditor({
  scene,
  selectedImage,
  onSceneProgress,
  onEditorReady,
  onRequestImage,
  sidebarOpen = true,
  imageGalleryOpen = false,
}: TiptapEditorProps) {
  const [title, setTitle] = useState(
    "The Future of Content Creation: How AI Transforms Writing",
  );
  const [heroImageCaption, setHeroImageCaption] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({
    top: 0,
    left: 0,
  });
  const [showFloatingMenu, setShowFloatingMenu] =
    useState(false);
  const [floatingMenuPos, setFloatingMenuPos] = useState({
    top: 0,
    left: 0,
  });
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [blockMenuPos, setBlockMenuPos] = useState({
    top: 0,
    left: 0,
  });
  const [currentBlockPos, setCurrentBlockPos] = useState<
    number | null
  >(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [showHelpDialog, setShowHelpDialog] = useState(false);
  const [showGenerateDialog, setShowGenerateDialog] = useState(false);
  const [titleInputValue, setTitleInputValue] = useState("");
  const editorRef = useRef<HTMLDivElement>(null);
  const tiptapContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const emptyTitleRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Placeholder.configure({
        placeholder: "Start writing your story...",
      }),
      ImageWithCaption,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      // Check if document is empty
      const text = editor.getText().trim();
      setIsEmpty(text.length === 0 && !selectedImage);
      
      // Notify parent when editor content changes
      if (onEditorReady) {
        onEditorReady(editor);
      }
    },
  });

  // Pass editor instance to parent
  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  // Apply scene-specific styling
  useEffect(() => {
    if (!editor) return;

    const editorElement = editor.view.dom;

    // Remove previous scene classes
    editorElement.querySelectorAll("p, ul").forEach((el) => {
      el.classList.remove("research-highlight");
    });

    if (scene === 3) {
      // Add research mode highlights
      const paragraphs = editorElement.querySelectorAll("p");
      const lists = editorElement.querySelectorAll("ul");

      if (paragraphs.length > 3) {
        paragraphs[3].classList.add("research-highlight");
      }

      lists.forEach((list) => {
        list.classList.add("research-highlight");
      });
    }
  }, [scene, editor]);

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 10) {
      const range = selection.getRangeAt(0);

      // Find the parent paragraph element containing the selection
      let parentElement = range.commonAncestorContainer;
      if (parentElement.nodeType === Node.TEXT_NODE) {
        parentElement = parentElement.parentElement;
      }

      // Find the closest block-level element (p, h2, h3, li, etc.)
      const blockElement = (
        parentElement as HTMLElement
      )?.closest("p, h2, h3, li, blockquote");

      if (blockElement && editorRef.current) {
        const blockRect = blockElement.getBoundingClientRect();
        const editorRect =
          editorRef.current.getBoundingClientRect();

        setFloatingMenuPos({
          top:
            blockRect.bottom -
            editorRect.top +
            editorRef.current.scrollTop +
            10, // Position below paragraph with 10px gap
          left: blockRect.left - editorRect.left,
        });
        setShowFloatingMenu(true);
      }
    } else {
      setShowFloatingMenu(false);
    }
  };

  const handleFloatingAction = (action: string) => {
    setShowFloatingMenu(false);

    if (action === "expand" && editor) {
      const { from, to } = editor.state.selection;
      const selectedText = editor.state.doc.textBetween(
        from,
        to,
      );
      editor
        .chain()
        .focus()
        .insertContentAt(
          { from, to },
          `${selectedText} [AI expanded version would go here]`,
        )
        .run();
    } else if (action === "shorten" && editor) {
      const { from, to } = editor.state.selection;
      editor
        .chain()
        .focus()
        .insertContentAt({ from, to }, "[AI shortened version]")
        .run();
    } else if (action === "tone" && editor) {
      // Just show visual feedback
      console.log("Change tone requested");
    } else if (action === "check") {
      // Show fact-check tooltip
      setTimeout(() => {
        setShowTooltip(true);
        setTooltipPos({ top: 350, left: 100 });
      }, 300);
    }
  };

  const handleParagraphClick = (e: React.MouseEvent) => {
    if (scene === 0) {
      const target = e.target as HTMLElement;
      if (target.tagName === "P") {
        const rect = target.getBoundingClientRect();

        if (editorRef.current) {
          const editorRect =
            editorRef.current.getBoundingClientRect();
          setTooltipPos({
            top: rect.top - editorRect.top + rect.height,
            left: rect.left - editorRect.left,
          });
          setShowTooltip(true);
        }
      }
    }
  };

  const handleBlockMenuOpen = (
    e: React.MouseEvent,
    element: HTMLElement,
  ) => {
    e.stopPropagation();
    const rect = element.getBoundingClientRect();

    if (editorRef.current) {
      const editorRect =
        editorRef.current.getBoundingClientRect();
      setBlockMenuPos({
        top:
          rect.top -
          editorRect.top +
          editorRef.current.scrollTop,
        left: 50,
      });
      setShowBlockMenu(true);

      // Store position for insertion
      const pos = editor?.view.posAtDOM(element, 0);
      setCurrentBlockPos(pos || 0);
    }
  };

  const handleBlockSelect = (blockType: string) => {
    if (!editor || currentBlockPos === null) return;

    // Position cursor at the end of current block
    editor
      .chain()
      .focus()
      .setTextSelection(currentBlockPos)
      .run();

    // Insert new block based on type
    switch (blockType) {
      case "paragraph":
        editor.chain().focus().insertContent("<p></p>").run();
        break;
      case "heading1":
        editor.chain().focus().insertContent("<h1></h1>").run();
        break;
      case "heading2":
        editor.chain().focus().insertContent("<h2></h2>").run();
        break;
      case "heading3":
        editor.chain().focus().insertContent("<h3></h3>").run();
        break;
      case "bulletList":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "orderedList":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "blockquote":
        editor.chain().focus().toggleBlockquote().run();
        break;
      case "image":
        // Insert image with caption using custom node
        const imageUrl = window.prompt("Enter image URL:");
        if (imageUrl) {
          editor
            .chain()
            .focus()
            .insertContent({
              type: "imageWithCaption",
              attrs: {
                src: imageUrl,
                alt: "",
                caption: "",
              },
            })
            .run();
        }
        break;
      case "table":
        // Table functionality requires additional setup
        // For now, insert a simple HTML table
        editor
          .chain()
          .focus()
          .insertContent(
            `
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cell 1</td>
                <td>Cell 2</td>
                <td>Cell 3</td>
              </tr>
              <tr>
                <td>Cell 4</td>
                <td>Cell 5</td>
                <td>Cell 6</td>
              </tr>
            </tbody>
          </table>
        `,
          )
          .run();
        break;
      case "link":
        const url = window.prompt("Enter URL:");
        const text = window.prompt("Enter link text:");
        if (url && text) {
          editor
            .chain()
            .focus()
            .insertContent(
              `<p><a href="${url}" target="_blank" rel="noopener noreferrer">${text}</a></p>`,
            )
            .run();
        }
        break;
    }
  };

  const handleEmptyAction = (action: 'generate' | 'help' | 'templates' | 'image') => {
    switch (action) {
      case 'generate':
        // Show generate document dialog
        setShowGenerateDialog(true);
        break;
      case 'help':
        // Show help me write dialog
        setShowHelpDialog(true);
        break;
      case 'templates':
        // Could show a template picker
        setIsEmpty(false);
        console.log('Templates clicked');
        break;
      case 'image':
        // Open image gallery - isEmpty will be set to false when image is selected
        onRequestImage?.();
        break;
    }
  };

  const handleHelpMeWriteCreate = (prompt: string) => {
    // Create document based on the prompt
    setIsEmpty(false);
    setTitle(prompt);
    editor?.commands.setContent('<p></p>');
    editor?.commands.focus();
  };

  const handleGenerateDocument = (prompt: string) => {
    // Generate a full document based on the prompt
    setIsEmpty(false);
    setTitle("The Future of Content Creation: How AI Transforms Writing");
    editor?.commands.setContent(initialContent);
  };

  // Update isEmpty when selectedImage changes
  useEffect(() => {
    if (selectedImage) {
      setIsEmpty(false);
    }
  }, [selectedImage]);

  // Add block handles with drag & drop
  const [hoveredBlock, setHoveredBlock] =
    useState<HTMLElement | null>(null);
  const draggedBlockRef = useRef<HTMLElement | null>(null);
  const draggedPosRef = useRef<{
    from: number;
    to: number;
  } | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef<boolean>(false);

  useEffect(() => {
    if (!editor || !editorRef.current) return;

    const editorElement =
      editorRef.current.querySelector(".ProseMirror");
    if (!editorElement) return;

    const handleMouseOver = (e: MouseEvent) => {
      // Clear any pending hide timeout
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }

      const target = e.target as HTMLElement;
      const block = target.closest(
        'p, h1, h2, h3, ul, ol, blockquote, table, figure[data-type="image-with-caption"]',
      ) as HTMLElement;
      // Don't show handles for h1 (title is separate now)
      if (
        block &&
        block.parentElement === editorElement &&
        block.tagName !== "H1"
      ) {
        setHoveredBlock(block);
      }
    };

    const handleMouseOut = () => {
      // Don't hide if dragging
      if (isDraggingRef.current) return;

      // Delay hiding to allow mouse to move to buttons
      hideTimeoutRef.current = setTimeout(() => {
        setHoveredBlock(null);
      }, 200);
    };

    // Drag & drop handlers
    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const targetBlock = target.closest(
        'p, h1, h2, h3, ul, ol, blockquote, table, figure[data-type="image-with-caption"]',
      ) as HTMLElement;

      // Remove previous highlights
      editorElement
        .querySelectorAll("[data-drag-target]")
        .forEach((el) => {
          (el as HTMLElement).style.borderTop = "";
          el.removeAttribute("data-drag-target");
        });

      if (
        targetBlock &&
        draggedBlockRef.current &&
        targetBlock !== draggedBlockRef.current
      ) {
        targetBlock.style.borderTop =
          "2px solid var(--primary)";
        targetBlock.setAttribute("data-drag-target", "true");
      }
    };

    const handleDrop = (e: DragEvent) => {
      console.log("🟢 Drop triggered!", e.target);
      e.preventDefault();

      // Clean up highlights
      editorElement
        .querySelectorAll("[data-drag-target]")
        .forEach((el) => {
          (el as HTMLElement).style.borderTop = "";
          el.removeAttribute("data-drag-target");
        });

      if (!draggedBlockRef.current || !draggedPosRef.current) {
        console.log("❌ No dragged block or position");
        if (draggedBlockRef.current) {
          draggedBlockRef.current.style.opacity = "1";
          draggedBlockRef.current = null;
          draggedPosRef.current = null;
        }
        return;
      }

      try {
        // Use mouse position to find the target block
        const pos = editor.view.posAtCoords({
          left: e.clientX,
          top: e.clientY,
        });

        if (!pos) {
          console.log("❌ Could not find position at cursor");
          throw new Error("Could not find position");
        }

        console.log("📍 Drop position from coords:", pos.pos);

        // Find the block node at this position
        const $pos = editor.state.doc.resolve(pos.pos);

        // Find the depth of the block-level node (usually depth 1 for top-level blocks)
        let depth = $pos.depth;
        while (depth > 0 && $pos.node(depth).isInline) {
          depth--;
        }

        // Make sure we're at least at depth 1 (children of doc)
        if (depth === 0) depth = 1;

        const targetFrom = depth > 0 ? $pos.before(depth) : 0;

        console.log(
          "📍 Target block position:",
          targetFrom,
          "at depth:",
          depth,
        );

        // Get the dragged node positions from ref (stored during dragStart)
        const { from: dragFrom, to: dragTo } =
          draggedPosRef.current;

        console.log("🔵 Drag range:", { dragFrom, dragTo });

        // Don't do anything if trying to drop on itself or too close
        if (Math.abs(dragFrom - targetFrom) < 3) {
          console.log(
            "⚠️ Dropping too close to origin, ignoring",
          );
          if (draggedBlockRef.current) {
            draggedBlockRef.current.style.opacity = "1";
          }
          draggedBlockRef.current = null;
          draggedPosRef.current = null;
          return;
        }

        // Extract the node being dragged using nodeAt
        const draggedNode = editor.state.doc.nodeAt(dragFrom);

        if (!draggedNode) {
          console.error(
            "Could not find dragged node at position",
            dragFrom,
          );
          if (draggedBlockRef.current) {
            draggedBlockRef.current.style.opacity = "1";
          }
          draggedBlockRef.current = null;
          draggedPosRef.current = null;
          return;
        }

        // Debug logging
        console.log("Drag & Drop:", {
          dragFrom,
          dragTo,
          targetFrom,
          direction: dragFrom < targetFrom ? "DOWN" : "UP",
          nodeName: draggedNode.type.name,
          nodeSize: draggedNode.nodeSize,
        });

        // Use TipTap's command API for more reliable node manipulation
        if (dragFrom < targetFrom) {
          // Moving DOWN
          const nodeSize = dragTo - dragFrom;
          // Calculate where to insert after deletion
          const insertPos = targetFrom - nodeSize;

          // Use TipTap commands
          editor
            .chain()
            .focus()
            .deleteRange({ from: dragFrom, to: dragTo })
            .insertContentAt(insertPos, draggedNode.toJSON())
            .run();
        } else {
          // Moving UP
          editor
            .chain()
            .focus()
            .insertContentAt(targetFrom, draggedNode.toJSON())
            .deleteRange({
              from: dragFrom + draggedNode.nodeSize,
              to: dragTo + draggedNode.nodeSize,
            })
            .run();
        }

        // Clean up
        if (draggedBlockRef.current) {
          draggedBlockRef.current.style.opacity = "1";
        }
        draggedBlockRef.current = null;
        draggedPosRef.current = null;
      } catch (error) {
        console.error("Error during drag and drop:", error);
        if (draggedBlockRef.current) {
          draggedBlockRef.current.style.opacity = "1";
          draggedBlockRef.current = null;
          draggedPosRef.current = null;
        }
      }
    };

    const handleDragEnd = () => {
      // Clean up
      isDraggingRef.current = false;
      editorElement
        .querySelectorAll("[data-drag-target]")
        .forEach((el) => {
          (el as HTMLElement).style.borderTop = "";
          el.removeAttribute("data-drag-target");
        });
      if (draggedBlockRef.current) {
        draggedBlockRef.current.style.opacity = "1";
        draggedBlockRef.current = null;
      }
      draggedPosRef.current = null;
      // Hide handles after drag ends
      setHoveredBlock(null);
    };

    editorElement.addEventListener(
      "mouseover",
      handleMouseOver,
    );
    editorElement.addEventListener("mouseout", handleMouseOut);
    editorElement.addEventListener("dragover", handleDragOver);
    editorElement.addEventListener("drop", handleDrop);
    editorElement.addEventListener("dragend", handleDragEnd);

    return () => {
      editorElement.removeEventListener(
        "mouseover",
        handleMouseOver,
      );
      editorElement.removeEventListener(
        "mouseout",
        handleMouseOut,
      );
      editorElement.removeEventListener(
        "dragover",
        handleDragOver,
      );
      editorElement.removeEventListener("drop", handleDrop);
      editorElement.removeEventListener(
        "dragend",
        handleDragEnd,
      );
    };
  }, [editor]);

  const handleDragStart = (block: HTMLElement) => {
    console.log("🔵 DragStart triggered!", block);

    if (!editor) {
      console.log("❌ No editor");
      return;
    }

    isDraggingRef.current = true;
    draggedBlockRef.current = block;
    block.style.opacity = "0.4";

    // Store the ProseMirror position range for this block
    try {
      const pos = editor.view.posAtDOM(block, 0);
      console.log("📍 Position at DOM:", pos);

      if (pos >= 0 && pos < editor.state.doc.content.size) {
        const $pos = editor.state.doc.resolve(pos);

        // Find the depth of the block-level node
        let depth = $pos.depth;
        while (depth > 0 && $pos.node(depth).isInline) {
          depth--;
        }

        // Make sure we're at least at depth 1
        if (depth === 0) depth = 1;

        const from = depth > 0 ? $pos.before(depth) : 0;
        const to = depth > 0 ? $pos.after(depth) : $pos.pos;

        draggedPosRef.current = { from, to };
        console.log("✅ Stored positions:", {
          from,
          to,
          depth,
        });
      } else {
        draggedPosRef.current = null;
        console.log("❌ Invalid position");
      }
    } catch (error) {
      console.error("Error storing drag position:", error);
      draggedPosRef.current = null;
    }
  };

  const renderBlockHandles = () => {
    if (!hoveredBlock || !tiptapContainerRef.current)
      return null;

    // Don't show handles for h1 (title is separate now)
    if (hoveredBlock.tagName === "H1") return null;

    const blockRect = hoveredBlock.getBoundingClientRect();
    const containerRect =
      tiptapContainerRef.current.getBoundingClientRect();

    // Calculate position relative to .tiptap-editor container
    const top = blockRect.top - containerRect.top;
    const left = blockRect.left - containerRect.left - 60;

    return (
      <div
        onMouseEnter={() => {
          // Keep buttons visible when hovering over them
          if (hideTimeoutRef.current) {
            clearTimeout(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
          }
        }}
        onMouseLeave={() => {
          // Don't hide if dragging
          if (isDraggingRef.current) return;

          // Hide buttons when leaving them
          setHoveredBlock(null);
        }}
        style={{
          position: "absolute",
          left: `${left}px`,
          top: `${top}px`,
          display: "flex",
          gap: "4px",
          zIndex: 10,
          pointerEvents: "auto",
        }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            // Menu is position:fixed, so we use viewport coordinates
            // Align menu left edge with paragraph text left edge
            setBlockMenuPos({
              top: blockRect.top, // Align with block/icon top in viewport
              left: blockRect.left, // Align with start of paragraph text
            });

            setShowBlockMenu(true);
            const pos = editor?.view.posAtDOM(hoveredBlock, 0);
            setCurrentBlockPos(pos || 0);
          }}
          className="hover:bg-muted rounded p-1 transition-colors"
          style={{
            color: "var(--muted-foreground)",
            backgroundColor: "var(--background)",
          }}
        >
          <Plus className="h-4 w-4" />
        </button>
        <div
          draggable={true}
          onDragStart={() => handleDragStart(hoveredBlock)}
          className="hover:bg-muted rounded p-1 transition-colors cursor-grab active:cursor-grabbing"
          style={{
            color: "var(--muted-foreground)",
            backgroundColor: "var(--background)",
          }}
        >
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    );
  };

  // Drop zone for images
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'IMAGE',
    drop: (item: { imageUrl: string }, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset && editor && editorRef.current) {
        // Get the editor view
        const view = editor.view;
        const editorElement = view.dom;
        
        // Get the bounding rect of the editor
        const editorRect = editorElement.getBoundingClientRect();
        
        // Calculate position relative to editor
        const relativeX = clientOffset.x - editorRect.left;
        const relativeY = clientOffset.y - editorRect.top;
        
        // Find position in document at these coordinates
        const pos = view.posAtCoords({ left: clientOffset.x, top: clientOffset.y });
        
        if (pos) {
          // Insert image with caption at the position where it was dropped
          editor.chain()
            .focus()
            .insertContentAt(pos.pos, {
              type: 'imageWithCaption',
              attrs: {
                src: item.imageUrl,
                caption: '',
              },
            })
            .run();
        } else {
          // Fallback: insert at the end if we can't determine position
          editor.chain().focus().insertContentAt(editor.state.doc.content.size, {
            type: 'imageWithCaption',
            attrs: {
              src: item.imageUrl,
              caption: '',
            },
          }).run();
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Combine refs
  const setRefs = (el: HTMLDivElement | null) => {
    editorRef.current = el;
    drop(el);
  };

  return (
    <div
      ref={setRefs}
      className="flex-1 overflow-y-auto px-16 relative"
      onMouseUp={handleTextSelect}
      onClick={handleParagraphClick}
      style={{
        backgroundColor: isOver && canDrop ? 'rgba(0, 82, 204, 0.05)' : undefined,
        outline: isOver && canDrop ? '2px dashed #0052CC' : undefined,
        outlineOffset: isOver && canDrop ? '-8px' : undefined,
        paddingTop: '3rem',
        paddingBottom: imageGalleryOpen ? '240px' : '3rem',
        transition: 'padding-bottom 0.3s ease-in-out',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Empty Document Actions */}
        {isEmpty && !selectedImage && (
          <div className="mb-8">
            {/* Title Input Field */}
            <input
              ref={emptyTitleRef as any}
              type="text"
              value={titleInputValue}
              onChange={(e) => {
                setTitleInputValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const text = e.currentTarget.value || "";
                  if (text.length > 0) {
                    setTitle(text);
                    setIsEmpty(false);
                    editor?.commands.setContent("<p></p>");
                    setTimeout(() => {
                      editor?.commands.focus("start");
                    }, 0);
                  }
                }
              }}
              autoFocus
              className="mb-6 outline-none w-full bg-transparent border-none placeholder:text-muted-foreground placeholder:opacity-50"
              style={{
                fontFamily: "Figtree, sans-serif",
                fontSize: "var(--text-h1)",
                fontWeight: "var(--font-weight-regular)",
                lineHeight: "1.5",
                color: "var(--foreground)",
                textAlign: "left",
                direction: "ltr",
                padding: 0,
              }}
              placeholder="Article title"
            />
            {/* Show action buttons only when title is empty */}
            {titleInputValue.length === 0 && (
              <EmptyDocumentActions onAction={handleEmptyAction} />
            )}
          </div>
        )}

        {/* Generate Document Dialog - positioned within document area, below title and buttons */}
        <GenerateDocumentDialog
          show={showGenerateDialog}
          onClose={() => setShowGenerateDialog(false)}
          onGenerate={handleGenerateDocument}
          sidebarOpen={sidebarOpen}
        />

        {/* Article Title (H1) - separate from editor, no drag & drop */}
        {!isEmpty && (
          <input
            ref={titleRef as any}
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                // Focus the editor on Enter
                editor?.commands.focus("start");
              }
            }}
            className="mb-8 outline-none w-full bg-transparent border-none placeholder:text-muted-foreground placeholder:opacity-50"
            style={{
              fontFamily: "Figtree, sans-serif",
              fontSize: "var(--text-h1)",
              fontWeight: "var(--font-weight-regular)",
              lineHeight: "1.5",
              color: "var(--foreground)",
              textAlign: "left",
              direction: "ltr",
              padding: 0,
            }}
            placeholder="Article title"
          />
        )}

        {/* Hero Image or Placeholder */}
        {!isEmpty && (
          <>
            {selectedImage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8"
              >
                <div className="rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={selectedImage}
                    alt="Article hero"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <input
                  type="text"
                  value={heroImageCaption}
                  onChange={(e) => setHeroImageCaption(e.target.value)}
                  className="mt-2 outline-none w-full bg-transparent border-none"
                  dir="ltr"
                  placeholder="Add image caption..."
                  style={{
                    fontFamily: "Figtree, sans-serif",
                    fontSize: "var(--text-label)",
                    fontWeight: "var(--font-weight-regular)",
                    lineHeight: "1.5",
                    color: "var(--muted-foreground)",
                    textAlign: "center",
                    padding: 0,
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 rounded-lg overflow-hidden border-2 border-dashed border-border bg-muted/30"
                style={{
                  height: "384px", // h-96 equivalent
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="flex flex-col items-center gap-4">
                  <p
                    className="text-muted-foreground normal-case"
                    style={{
                      fontSize: "var(--text-base)",
                      lineHeight: "24px",
                      letterSpacing: "0.17px",
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    Main image
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={onRequestImage}
                      className="px-4 py-2 bg-card border border-border rounded hover:bg-muted transition-colors normal-case"
                      style={{
                        fontSize: "var(--text-button)",
                        lineHeight: "22px",
                        letterSpacing: "0.46px",
                        fontWeight: "var(--font-weight-bold)",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      Add
                    </button>
                    <button
                      onClick={onRequestImage}
                      className="px-4 py-2 rounded transition-colors normal-case text-white"
                      style={{
                        backgroundColor: "#0052CC",
                        fontSize: "var(--text-button)",
                        lineHeight: "22px",
                        letterSpacing: "0.46px",
                        fontWeight: "var(--font-weight-bold)",
                        borderRadius: "var(--radius)",
                      }}
                    >
                      AI Generate
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* TipTap Editor */}
        <div
          ref={tiptapContainerRef}
          className="tiptap-editor"
          style={{ 
            position: "relative",
            display: isEmpty ? "none" : "block",
            fontSize: "16px"
          }}
        >
          <EditorContent editor={editor} />

          {/* Block Handles - rendered on hover */}
          {renderBlockHandles()}
        </div>

        {/* Research Mode Overlay Hint */}
        {scene === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-6 p-4 bg-accent/10 border-2 border-accent rounded-lg"
          >
            <p className="text-sm">
              <span
                className="font-semibold"
                style={{ color: "#0052CC" }}
              >
                Research Mode Active:
              </span>{" "}
              The AI is analyzing your content and can suggest
              relevant images, videos, sources, and research
              materials. Check the assistant panel for
              suggestions.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Contextual Tooltip */}
      <ContextualTooltip
        show={showTooltip}
        message="I've noticed you're working on AI in text editors. Would you like me to suggest some relevant images?"
        onAccept={() => {
          setShowTooltip(false);
          onSceneProgress();
        }}
        onDismiss={() => setShowTooltip(false)}
        position={tooltipPos}
        type="suggestion"
      />

      {/* Floating Menu */}
      <FloatingMenu
        show={showFloatingMenu}
        position={floatingMenuPos}
        onAction={handleFloatingAction}
      />

      {/* Block Menu */}
      <BlockMenu
        show={showBlockMenu}
        position={blockMenuPos}
        onSelect={handleBlockSelect}
        onClose={() => setShowBlockMenu(false)}
      />

      {/* Help Me Write Dialog */}
      <HelpMeWriteDialog
        show={showHelpDialog}
        onClose={() => setShowHelpDialog(false)}
        onCreate={handleHelpMeWriteCreate}
        sidebarOpen={sidebarOpen}
      />

      <style>{`
        .tiptap-editor .ProseMirror {
          min-height: 400px;
          position: relative;
        }

        .tiptap-editor .ProseMirror > * + * {
          margin-top: 1.5rem;
        }

        /* Empty document cursor */
        [contenteditable][data-placeholder]:empty:before {
          content: attr(data-placeholder);
          color: transparent;
          pointer-events: none;
        }

        [contenteditable]:empty {
          cursor: text;
        }

        /* Force LTR for title fields */
        .title-ltr-forced {
          direction: ltr !important;
          text-align: left !important;
          unicode-bidi: embed !important;
        }

        .title-ltr-forced * {
          direction: ltr !important;
          unicode-bidi: embed !important;
        }

        .tiptap-editor .ProseMirror > p,
        .tiptap-editor .ProseMirror > h1,
        .tiptap-editor .ProseMirror > h2,
        .tiptap-editor .ProseMirror > h3,
        .tiptap-editor .ProseMirror > ul,
        .tiptap-editor .ProseMirror > ol,
        .tiptap-editor .ProseMirror > blockquote,
        .tiptap-editor .ProseMirror > table,
        .tiptap-editor .ProseMirror > figure {
          position: relative;
          transition: border-top 0.15s ease;
        }

        .tiptap-editor h1 {
          font-family: Figtree, sans-serif;
          font-size: var(--text-h1);
          font-weight: var(--font-weight-regular);
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .tiptap-editor h2 {
          font-family: Figtree, sans-serif;
          font-size: var(--text-h2);
          font-weight: var(--font-weight-bold);
          line-height: 1.5;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .tiptap-editor p {
          font-family: Figtree, sans-serif;
          font-size: var(--text-base);
          font-weight: var(--font-weight-regular);
          line-height: 1.7;
        }

        .tiptap-editor ul {
          font-family: Figtree, sans-serif;
          font-size: var(--text-base);
          font-weight: var(--font-weight-regular);
          line-height: 1.5;
          list-style: disc;
          padding-left: 1.5rem;
        }

        .tiptap-editor li {
          margin-top: 0.5rem;
        }

        .tiptap-editor .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: var(--muted-foreground);
          pointer-events: none;
          height: 0;
        }

        .tiptap-editor .research-highlight {
          border-left: 4px solid var(--accent);
          padding-left: 1rem;
          background-color: rgba(0, 167, 238, 0.05);
          transition: all 0.3s ease;
          border-radius: 0 4px 4px 0;
        }

        .tiptap-editor img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1.5rem 0;
        }

        /* Blockquote styling */
        .tiptap-editor blockquote {
          border-left: 4px solid var(--primary);
          padding-left: 1rem;
          font-style: italic;
          color: var(--muted-foreground);
          margin: 1.5rem 0;
        }

        /* Table styling */
        .tiptap-editor table {
          border-collapse: collapse;
          width: 100%;
          margin: 1.5rem 0;
        }

        .tiptap-editor table td,
        .tiptap-editor table th {
          border: 1px solid var(--border);
          padding: 0.5rem 0.75rem;
          text-align: left;
          font-family: Figtree, sans-serif;
          font-size: var(--text-base);
        }

        .tiptap-editor table th {
          background: var(--muted);
          font-weight: var(--font-weight-bold);
        }

        /* Link styling */
        .tiptap-editor a {
          color: var(--primary);
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.15s ease;
        }

        .tiptap-editor a:hover {
          color: var(--accent);
        }
      `}</style>
    </div>
  );
}