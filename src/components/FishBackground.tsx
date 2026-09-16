import React, { useEffect, useRef } from "react";

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  speed: number;
  color: string;
  finColor: string;
  wiggle: number;
  wiggleSpeed: number;
  isTemporary?: boolean;
  spawnTime?: number;
  duration?: number; // In milliseconds
  opacity: number;
}

interface Bubble {
  x: number;
  y: number;
  radius: number;
  vy: number;
  vx: number;
  opacity: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export function FishBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const ripples: Ripple[] = [];
    const bubbles: Bubble[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Spawn subtle water ripple on mouse move
      if (Math.random() < 0.15) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2,
          maxRadius: Math.random() * 25 + 15,
          opacity: 0.4,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Global Click Handler: Trigger Bubble Burst & Temporary Fish on Buttons
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isButtonClick =
        target?.closest("button") ||
        target?.closest("a") ||
        target?.getAttribute("role") === "button";

      const clickX = e.clientX;
      const clickY = e.clientY;

      // 1. Always create a water ripple on click
      ripples.push({
        x: clickX,
        y: clickY,
        radius: 5,
        maxRadius: 50,
        opacity: 0.8,
      });

      // 2. Trigger Bubble Burst
      const burstCount = isButtonClick ? 18 : 8;
      for (let i = 0; i < burstCount; i++) {
        bubbles.push({
          x: clickX + (Math.random() - 0.5) * 20,
          y: clickY + (Math.random() - 0.5) * 20,
          radius: Math.random() * 5 + 2,
          vy: -(Math.random() * 2.5 + 1),
          vx: (Math.random() - 0.5) * 2,
          opacity: 0.9,
        });
      }

      // 3. Spawn Temporary Fish if a button/link is clicked
      if (isButtonClick) {
        const tempFishCount = Math.floor(Math.random() * 2) + 1; // 1 to 2 extra fish
        for (let i = 0; i < tempFishCount; i++) {
          fishes.push({
            id: Math.random(),
            x: clickX + (Math.random() - 0.5) * 40,
            y: clickY + (Math.random() - 0.5) * 40,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            size: Math.random() * 10 + 12,
            angle: Math.random() * Math.PI * 2,
            speed: Math.random() * 2 + 1.8,
            color: "rgba(212, 170, 30, 0.85)",
            finColor: "rgba(235, 190, 50, 0.6)",
            wiggle: Math.random() * Math.PI,
            wiggleSpeed: 0.25,
            isTemporary: true,
            spawnTime: Date.now(),
            duration: 6000, // 6 seconds lifetime
            opacity: 0,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleGlobalClick);

    // Initial Permanent Fish Pool
    const colors = [
      { body: "rgba(212, 170, 30, 0.75)", fin: "rgba(240, 190, 40, 0.5)" },
      { body: "rgba(56, 189, 248, 0.65)", fin: "rgba(125, 211, 252, 0.45)" },
      { body: "rgba(255, 255, 255, 0.55)", fin: "rgba(255, 255, 255, 0.35)" },
    ];

    const fishes: Fish[] = Array.from({ length: 10 }, (_, i) => {
      const palette = colors[i % colors.length];
      return {
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 10 + 12,
        angle: 0,
        speed: Math.random() * 1.5 + 1.2,
        color: palette.body,
        finColor: palette.fin,
        wiggle: Math.random() * Math.PI * 2,
        wiggleSpeed: 0.15 + Math.random() * 0.1,
        opacity: 1,
      };
    });

    // Draw Detailed Fish with Dynamic Wiggling Fins
    const drawFish = (f: Fish) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.angle);
      ctx.globalAlpha = f.opacity;

      const tailAngle = Math.sin(f.wiggle) * 0.35;

      // Main Body
      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, f.size, f.size / 2.4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Side Fins
      ctx.fillStyle = f.finColor;
      ctx.beginPath();
      ctx.ellipse(
        -f.size * 0.1,
        -f.size * 0.4,
        f.size * 0.4,
        f.size * 0.18,
        -Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(
        -f.size * 0.1,
        f.size * 0.4,
        f.size * 0.4,
        f.size * 0.18,
        Math.PI / 4,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Jointed Wiggling Tail
      ctx.save();
      ctx.translate(-f.size + 2, 0);
      ctx.rotate(tailAngle);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-f.size * 0.7, -f.size * 0.45);
      ctx.quadraticCurveTo(
        -f.size * 0.4,
        0,
        -f.size * 0.7,
        f.size * 0.45
      );
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Eye
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.arc(f.size * 0.55, -f.size * 0.12, f.size * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      ctx.beginPath();
      ctx.arc(f.size * 0.6, -f.size * 0.12, f.size * 0.07, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Main Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // 1. Render Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 0.8;
        r.opacity -= 0.015;

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(180, 220, 255, ${r.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Render Bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y += b.vy;
        b.x += b.vx;
        b.opacity -= 0.008;

        if (b.opacity <= 0 || b.y < -10) {
          bubbles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.4})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity * 0.8})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Render & Update Fish
      for (let i = fishes.length - 1; i >= 0; i--) {
        const f = fishes[i];

        // Handle temporary fish life cycle (Fade in -> Swim -> Fade out -> Remove)
        if (f.isTemporary && f.spawnTime && f.duration) {
          const elapsed = now - f.spawnTime;
          const fadeTime = 800; // 800ms fade in/out

          if (elapsed < fadeTime) {
            f.opacity = elapsed / fadeTime;
          } else if (elapsed > f.duration - fadeTime) {
            f.opacity = Math.max(0, (f.duration - elapsed) / fadeTime);
          } else {
            f.opacity = 1;
          }

          if (elapsed >= f.duration) {
            fishes.splice(i, 1);
            continue;
          }
        }

        // Swimming Motion & Steering
        if (mouse.active) {
          const dx = mouse.x - f.x;
          const dy = mouse.y - f.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 60) {
            f.vx += (dx / dist) * 0.06;
            f.vy += (dy / dist) * 0.06;
          }
        } else {
          f.vx += (Math.random() - 0.5) * 0.08;
          f.vy += (Math.random() - 0.5) * 0.08;
        }

        // Limit speed
        const currSpeed = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
        if (currSpeed > f.speed) {
          f.vx = (f.vx / currSpeed) * f.speed;
          f.vy = (f.vy / currSpeed) * f.speed;
        }

        f.x += f.vx;
        f.y += f.vy;
        f.angle = Math.atan2(f.vy, f.vx);
        f.wiggle += f.wiggleSpeed;

        // Screen wrap
        if (f.x < -30) f.x = width + 30;
        if (f.x > width + 30) f.x = -30;
        if (f.y < -30) f.y = height + 30;
        if (f.y > height + 30) f.y = -30;

        drawFish(f);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleGlobalClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
    />
  );
}