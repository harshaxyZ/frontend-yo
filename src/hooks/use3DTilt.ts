import { useState, CSSProperties, MouseEvent } from 'react';

export const use3DTilt = (maxRotate = 8) => {
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    // Disable tilt on small touchscreen devices to save battery & layout glitches
    if (window.innerWidth < 1024) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -maxRotate;
    const rotateY = ((x - centerX) / centerX) * maxRotate;
    
    setCoords({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCoords({ rotateX: 0, rotateY: 0 });
  };

  const style: CSSProperties = {
    transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg)`,
    transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  return {
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};

export default use3DTilt;
