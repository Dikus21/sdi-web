"use client";
import { useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface OrbitItem {
  id: string | number;
  image: string;
  alt: string;
  size?: number; // Logo size in pixels, default 40
}

interface OrbitRing {
  radius: number; // Radius of the orbit in pixels
  items: OrbitItem[];
  duration?: number; // Animation duration in seconds (lower = faster), default 20
  direction?: "clockwise" | "counterclockwise"; // Rotation direction, default clockwise
  initialRotation?: number; // Starting rotation in degrees, default 0
}

interface OrbitSystemProps {
  rings: OrbitRing[];
  centerContent?: React.ReactNode; // Optional content for the center
  centerSize?: number; // Center circle size in pixels, default 100
  className?: string; // Additional classes for the container
  maxWidth?: number; // Maximum width constraint (optional, for responsive scaling)
}

// Individual orbit ring component with proper logo orientation
const OrbitRingComponent = ({
  ring,
  ringIndex,
  scale,
}: {
  ring: OrbitRing;
  ringIndex: number;
  scale: number;
}) => {
  const {
    radius,
    items,
    duration = 20,
    direction = "clockwise",
    initialRotation = 0,
  } = ring;

  const [rotation, setRotation] = useState(initialRotation);
  const lastTimeRef = useRef(0);

  // Apply scale to radius
  const scaledRadius = radius * scale;
  const orbitSize = scaledRadius * 2;
  const degreesPerSecond = (direction === "clockwise" ? 360 : -360) / duration;

  // Use animation frame for smooth rotation tracking
  useAnimationFrame((time) => {
    if (lastTimeRef.current === 0) {
      lastTimeRef.current = time;
      return;
    }

    const delta = (time - lastTimeRef.current) / 1000; // Convert to seconds
    lastTimeRef.current = time;

    setRotation((prev) => (prev + degreesPerSecond * delta) % 360);
  });

  return (
    <div
      key={ringIndex}
      className="absolute rounded-full border border-white/10"
      style={{
        width: orbitSize,
        height: orbitSize,
      }}
    >
      {/* Rotating container */}
      <div
        className="relative w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {items.map((item, itemIndex) => {
          const baseAngle = (360 / items.length) * itemIndex;
          // Apply scale to item size
          const itemSize = (item.size || 40) * scale;

          // Calculate the total rotation of this item
          const totalItemRotation = rotation + baseAngle;

          return (
            <div
              key={item.id}
              className="absolute"
              style={{
                width: itemSize,
                height: itemSize,
                left: "50%",
                top: "50%",
                marginLeft: -itemSize / 2,
                marginTop: -itemSize / 2,
                transform: `rotate(${baseAngle}deg) translateY(-${scaledRadius}px)`,
              }}
            >
              {/* Counter-rotate to keep logo upright */}
              <div
                className="w-full h-full"
                style={{
                  transform: `rotate(${-totalItemRotation}deg)`,
                }}
              >
                <Image
                  fill
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-contain drop-shadow-lg"
                  draggable={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OrbitSystem = ({
  rings,
  centerContent,
  centerSize = 100,
  className = "",
  maxWidth,
}: OrbitSystemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Calculate the base size needed for the container
  const maxRadius = Math.max(...rings.map((ring) => ring.radius));
  const baseContainerSize = maxRadius * 2 + 100; // Extra padding for logos

  // Handle responsive scaling
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parent = containerRef.current.parentElement;
        if (parent) {
          const availableWidth = maxWidth
            ? Math.min(parent.clientWidth, maxWidth)
            : parent.clientWidth;

          // Calculate scale based on available width
          const newScale = Math.min(1, availableWidth / baseContainerSize);
          setScale(newScale);
        }
      }
    };

    // Initial calculation
    updateScale();

    // Listen to window resize
    window.addEventListener("resize", updateScale);

    // Use ResizeObserver for parent container changes
    const resizeObserver = new ResizeObserver(updateScale);
    if (containerRef.current?.parentElement) {
      resizeObserver.observe(containerRef.current.parentElement);
    }

    return () => {
      window.removeEventListener("resize", updateScale);
      resizeObserver.disconnect();
    };
  }, [baseContainerSize, maxWidth]);

  const scaledContainerSize = baseContainerSize * scale;
  const scaledCenterSize = centerSize * scale;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: scaledContainerSize,
        height: scaledContainerSize,
      }}
    >
      {/* Center Content */}
      {centerContent && (
        <div
          className="absolute z-10 flex items-center justify-center rounded-full bg-background"
          style={{
            width: scaledCenterSize,
            height: scaledCenterSize,
          }}
        >
          {centerContent}
        </div>
      )}

      {/* Orbit Rings */}
      {rings.map((ring, ringIndex) => (
        <OrbitRingComponent
          key={ringIndex}
          ring={ring}
          ringIndex={ringIndex}
          scale={scale}
        />
      ))}
    </div>
  );
};

export default OrbitSystem;
