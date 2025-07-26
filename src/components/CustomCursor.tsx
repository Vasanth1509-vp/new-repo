import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('card') ||
        target.closest('.card') !== null
      );
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', updateHoverState);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <div
      className={`cursor ${isHovering ? 'hover' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default CustomCursor; 