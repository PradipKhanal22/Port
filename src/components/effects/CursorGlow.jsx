import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cursorGlowRef.current) return;

      const { clientX, clientY } = e;
      cursorGlowRef.current.style.left = `${clientX}px`;
      cursorGlowRef.current.style.top = `${clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorGlowRef}
      className="pointer-events-none fixed w-80 h-80 rounded-full bg-gradient-to-r from-accent-orange/20 to-accent-pink/20 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-screen"
      style={{
        transition: 'none',
        opacity: 0.6,
      }}
    />
  );
};

export default CursorGlow;
