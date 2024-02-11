import React, { useState, ReactNode, useEffect } from "react";

interface PredefinedPopoverProps {
  trigger: ReactNode;
  content: ReactNode;
}

const PredefinedPopover: React.FC<PredefinedPopoverProps> = ({
  trigger,
  content,
}) => {
  const [showPopover, setShowPopover] = useState(false);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    const closePopover = (e: MouseEvent) => {
      if (
        showPopover &&
        e.target instanceof Node &&
        !isDescendantOfPopover(e.target)
      ) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", closePopover);

    return () => {
      document.removeEventListener("mousedown", closePopover);
    };
  }, [showPopover]);

  const isDescendantOfPopover = (target: Node): boolean => {
    let node: Node | null = target;
    while (node !== null) {
      if (node instanceof Element && node.classList.contains("predefined-popover")) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  };

  return (
    <div className="relative">
      <div className="inline-block">
        <div className="popover-trigger" onClick={handlePopoverToggle}>
          {trigger}
        </div>
        {showPopover && (
          <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg predefined-popover transition-opacity duration-300 ease-in-out">
            <div className="py-1">{content}</div>
            <button
              onClick={handlePopoverToggle}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PredefinedPopover;
