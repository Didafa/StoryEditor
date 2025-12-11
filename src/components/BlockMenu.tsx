import { motion, AnimatePresence } from "motion/react";
import svgPaths from "../imports/svg-23ycbo5dsu";

interface BlockMenuItem {
  id: string;
  label: string;
  svgPath?: keyof typeof svgPaths;
  customIcon?: () => JSX.Element;
}

interface BlockMenuSection {
  title: string;
  items: BlockMenuItem[];
  divider?: boolean;
}

interface BlockMenuProps {
  show: boolean;
  position: { top: number; left: number };
  onSelect: (type: string) => void;
  onClose: () => void;
}

const menuSections: BlockMenuSection[] = [
  {
    title: "Basic",
    items: [
      { id: "image", label: "Image", svgPath: "pb851170" },
      {
        id: "video",
        label: "Video",
        customIcon: () => (
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                d={svgPaths.p2f44b500}
                fill="currentColor"
                fillOpacity="0.54"
              />
              <path
                d={svgPaths.p2d9421f0}
                fill="currentColor"
                fillOpacity="0.54"
              />
            </g>
          </svg>
        ),
      },
      { id: "gallery", label: "Gallery", svgPath: "pa60780" },
      {
        id: "embed",
        label: "Embed",
        customIcon: () => (
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                d={svgPaths.p1da62a00}
                fill="currentColor"
                fillOpacity="0.54"
              />
              <path
                d={svgPaths.p89a3480}
                fill="currentColor"
                fillOpacity="0.54"
              />
              <path
                d={svgPaths.p3a801780}
                fill="currentColor"
                fillOpacity="0.54"
              />
            </g>
          </svg>
        ),
      },
    ],
    divider: true,
  },
  {
    title: "Add-ons",
    items: [
      { id: "table", label: "Table", svgPath: "p2cffb5c0" },
      { id: "chart", label: "Chart", svgPath: "p6cfb00" },
    ],
  },
];

export function BlockMenu({
  show,
  position,
  onSelect,
  onClose,
}: BlockMenuProps) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 bg-card border border-border overflow-hidden"
            style={{
              top: position.top,
              left: position.left,
              marginLeft: "0px",
              width: "220px",
              maxHeight: "400px",
              borderRadius: "var(--radius)",
              boxShadow:
                "0px 3px 14px 2px rgba(0,0,0,0.12), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 5px 5px -3px rgba(0,0,0,0.2)",
            }}
          >
            <div className="py-2">
              {menuSections.map((section, sectionIdx) => (
                <div key={section.title}>
                  {/* Section Header */}
                  <div className="h-8 px-4 flex items-end">
                    <p
                     className="text-muted-foreground normal-case"
                      style={{
                        fontSize: "var(--text-base)",
                        lineHeight: "24px",
                        letterSpacing: "0.1px",
                      }}
                    >
                      {section.title}
                    </p>
                  </div>

                  {/* Section Items */}
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSelect(item.id);
                        onClose();
                      }}
                      className="w-full flex items-center px-4 py-1 hover:bg-muted transition-colors"
                    >
                      {/* Icon */}
                      <div className="min-w-[36px] flex items-center">
                        <div className="size-6 text-muted-foreground">
                          {item.customIcon ? (
                            item.customIcon()
                          ) : item.svgPath ? (
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                            >
                              <path
                                d={svgPaths[item.svgPath]}
                                fill="currentColor"
                                fillOpacity="0.54"
                              />
                            </svg>
                          ) : null}
                        </div>
                      </div>

                      {/* Label */}
                      <p
                        className="text-foreground normal-case"
                        style={{
                          fontSize: "var(--text-base)",
                          lineHeight: "24px",
                          letterSpacing: "0.17px",
                          fontWeight:
                            "var(--font-weight-regular)",
                        }}
                      >
                        {item.label}
                      </p>
                    </button>
                  ))}

                  {/* Divider */}
                  {section.divider &&
                    sectionIdx < menuSections.length - 1 && (
                      <div className="pb-2 relative">
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-12" />
                      </div>
                    )}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}