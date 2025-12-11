import { Node, mergeAttributes } from "@tiptap/core";
import {
  ReactNodeViewRenderer,
  NodeViewWrapper,
} from "@tiptap/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

// Custom TipTap extension for images with captions
export const ImageWithCaption = Node.create({
  name: "imageWithCaption",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      caption: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'figure[data-type="image-with-caption"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "figure",
      { "data-type": "image-with-caption" },
      ["img", mergeAttributes(HTMLAttributes)],
      ["figcaption", {}, HTMLAttributes.caption || ""],
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(ImageWithCaptionComponent);
  },
});

function ImageWithCaptionComponent(props: any) {
  const { node, updateAttributes, deleteNode } = props;
  const [caption, setCaption] = useState(
    node.attrs.caption || "",
  );

  const handleCaptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newCaption = e.target.value;
    setCaption(newCaption);
    updateAttributes({ caption: newCaption });
  };

  return (
    <NodeViewWrapper className="image-with-caption-wrapper">
      <figure
        className="my-6"
        style={{
          margin: "0.5rem 0",
        }}
      >
        <div className="rounded-lg overflow-hidden">
          <ImageWithFallback
            src={node.attrs.src}
            alt={node.attrs.alt || ""}
            className="w-full h-auto object-cover"
            style={{
              borderRadius: "var(--radius)",
            }}
          />
        </div>
        <input
          type="text"
          value={caption}
          onChange={handleCaptionChange}
          className="mt-2 outline-none w-full bg-transparent border-none"
          dir="ltr"
          placeholder="Add image caption..."
          style={{
            fontFamily: "Figtree, sans-serif",
            fontSize: "var(--text-label)",
            fontWeight: "var(--font-weight-regular)",
            lineHeight: "1.0",
            color: "var(--muted-foreground)",
            textAlign: "center",
            padding: 0,
          }}
        />
      </figure>
    </NodeViewWrapper>
  );
}