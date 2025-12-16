import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      trailId++;
      setTrail(prev => [...prev.slice(-15), { x: e.clientX, y: e.clientY, id: trailId }]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const followCursor = () => {
      setFollowerPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const animationFrame = requestAnimationFrame(function animate() {
      followCursor();
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998] rounded-full bg-primary/30"
          style={{
            left: point.x,
            top: point.y,
            width: `${(index / trail.length) * 8}px`,
            height: `${(index / trail.length) * 8}px`,
            transform: "translate(-50%, -50%)",
            opacity: index / trail.length * 0.5,
            transition: "opacity 0.3s ease",
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full transition-transform duration-100 ${
          isClicking ? "scale-50" : "scale-100"
        }`}
        style={{
          left: position.x,
          top: position.y,
          width: "8px",
          height: "8px",
          backgroundColor: "hsl(var(--primary))",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)",
        }}
      />
      
      {/* Follower ring */}
      <div
        className={`fixed pointer-events-none z-[9998] rounded-full border-2 transition-all duration-300 ${
          isHovering ? "border-accent scale-150 bg-accent/10" : "border-primary/50"
        } ${isClicking ? "scale-75" : ""}`}
        style={{
          left: followerPosition.x,
          top: followerPosition.y,
          width: isHovering ? "60px" : "40px",
          height: isHovering ? "60px" : "40px",
          transform: "translate(-50%, -50%)",
          boxShadow: isHovering 
            ? "0 0 30px hsl(var(--accent) / 0.5)" 
            : "0 0 15px hsl(var(--primary) / 0.3)",
        }}
      />
    </>
  );
};

export default CustomCursor;
