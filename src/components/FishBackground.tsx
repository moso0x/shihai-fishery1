import React, { useEffect, useRef } from "react";

interface Fish {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  maxSpeed: number;
  maxForce: number;
  bodyOpacity: number;
  finOpacity: number;
  wiggle: number;
  wiggleSpeed: number;
  isTemporary?: boolean;
  spawnTime?: number;
  duration?: number;
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

// Utility: Smoothly interpolate angles across -PI/PI boundary
function lerpAngle(start: number, end: number, amount: number): number {
  let shortest = ((end - start + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (shortest < -Math.PI) shortest += Math.PI * 2;
  return start + shortest * amount;
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

      if (Math.random() < 0.12) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2,
          maxRadius: Math.random() * 20 + 12,
          opacity: 0.25,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isButtonClick =
        target?.closest("button") ||
        target?.closest("a") ||
        target?.getAttribute("role") === "button";

      const clickX = e.clientX;
      const clickY = e.clientY;

      ripples.push({
        x: clickX,
        y: clickY,
        radius: 4,
        maxRadius: 45,
        opacity: 0.5,
      });

      const burstCount = isButtonClick ? 16 : 6;
      for (let i = 0; i < burstCount; i++) {
        bubbles.push({
          x: clickX + (Math.random() - 0.5) * 15,
          y: clickY + (Math.random() - 0.5) * 15,
          radius: Math.random() * 4 + 2,
          vy: -(Math.random() * 2 + 1),
          vx: (Math.random() - 0.5) * 1.5,
          opacity: 0.6,
        });
      }

      if (isButtonClick) {
        const tempFishCount = Math.floor(Math.random() * 2) + 2;
        for (let i = 0; i < tempFishCount; i++) {
          fishes.push({
            id: Math.random(),
            x: clickX + (Math.random() - 0.5) * 30,
            y: clickY + (Math.random() - 0.5) * 30,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 8 + 10,
            angle: Math.random() * Math.PI * 2,
            maxSpeed: Math.random() * 1.2 + 2.8,
            maxForce: 0.08,
            bodyOpacity: 0.25,
            finOpacity: 0.12,
            wiggle: Math.random() * Math.PI,
            wiggleSpeed: 0.25,
            isTemporary: true,
            spawnTime: Date.now(),
            duration: 6000,
            opacity: 0,
          });
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleGlobalClick);

    // Initial Monochromatic Fish Pool
    const fishes: Fish[] = Array.from({ length: 24 }, (_, i) => {
      const initialAngle = Math.random() * Math.PI * 2;
      return {
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(initialAngle) * 2,
        vy: Math.sin(initialAngle) * 2,
        size: Math.random() * 6 + 10,
        angle: initialAngle,
        maxSpeed: Math.random() * 0.8 + 2.2,
        maxForce: 0.05,
        bodyOpacity: Math.random() * 0.15 + 0.12, // Subtle translucent white
        finOpacity: Math.random() * 0.08 + 0.05,
        wiggle: Math.random() * Math.PI * 2,
        wiggleSpeed: 0.15,
        opacity: 1,
      };
    });

    const drawFish = (f: Fish) => {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.angle);
      ctx.globalAlpha = f.opacity;
      
      // Blend seamlessly into whatever content/background sits behind canvas
      ctx.globalCompositeOperation = "overlay";

      const speedRatio = Math.sqrt(f.vx * f.vx + f.vy * f.vy) / f.maxSpeed;
      const tailAngle = Math.sin(f.wiggle) * (0.25 + speedRatio * 0.2);

      const bodyColor = `rgba(255, 255, 255, ${f.bodyOpacity})`;
      const finColor = `rgba(255, 255, 255, ${f.finOpacity})`;

      // Body
      ctx.fillStyle = bodyColor;
      ctx.beginPath();
      ctx.ellipse(0, 0, f.size, f.size / 2.5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Side Fins
      ctx.fillStyle = finColor;
      ctx.beginPath();
      ctx.ellipse(-f.size * 0.1, -f.size * 0.4, f.size * 0.35, f.size * 0.15, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(-f.size * 0.1, f.size * 0.4, f.size * 0.35, f.size * 0.15, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();

      // Jointed Tail
      ctx.save();
      ctx.translate(-f.size + 1, 0);
      ctx.rotate(tailAngle);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-f.size * 0.65, -f.size * 0.4);
      ctx.quadraticCurveTo(-f.size * 0.35, 0, -f.size * 0.65, f.size * 0.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // Minimal Eye Silhouette
      ctx.fillStyle = `rgba(255, 255, 255, ${f.bodyOpacity * 1.5})`;
      ctx.beginPath();
      ctx.arc(f.size * 0.5, -f.size * 0.12, f.size * 0.12, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const now = Date.now();

      // 1. Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 0.6;
        r.opacity -= 0.012;

        if (r.opacity <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Bubbles
      for (let i = bubbles.length - 1; i >= 0; i--) {
        const b = bubbles[i];
        b.y += b.vy;
        b.x += b.vx;
        b.opacity -= 0.009;

        if (b.opacity <= 0 || b.y < -10) {
          bubbles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.15})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.opacity * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.restore();
      }

      // 3. Fish Flocking & Physics Engine
      for (let i = fishes.length - 1; i >= 0; i--) {
        const f = fishes[i];

        if (f.isTemporary && f.spawnTime && f.duration) {
          const elapsed = now - f.spawnTime;
          const fadeTime = 800;

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

        let sepX = 0, sepY = 0, sepCount = 0;
        let aliX = 0, aliY = 0, aliCount = 0;
        let cohX = 0, cohY = 0, cohCount = 0;

        const perceptionRadius = 90;
        const separationRadius = 35;

        for (let j = 0; j < fishes.length; j++) {
          if (i === j) continue;
          const other = fishes[j];

          const dx = other.x - f.x;
          const dy = other.y - f.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < perceptionRadius * perceptionRadius && distSq > 0) {
            const dist = Math.sqrt(distSq);

            if (dist < separationRadius) {
              sepX -= (dx / dist) / dist;
              sepY -= (dy / dist) / dist;
              sepCount++;
            }

            aliX += other.vx;
            aliY += other.vy;
            aliCount++;

            cohX += other.x;
            cohY += other.y;
            cohCount++;
          }
        }

        let ax = 0;
        let ay = 0;

        if (sepCount > 0) {
          ax += sepX * 2.2;
          ay += sepY * 2.2;
        }

        if (aliCount > 0) {
          aliX /= aliCount;
          aliY /= aliCount;
          ax += (aliX - f.vx) * 0.05;
          ay += (aliY - f.vy) * 0.05;
        }

        if (cohCount > 0) {
          cohX = cohX / cohCount - f.x;
          cohY = cohY / cohCount - f.y;
          ax += cohX * 0.005;
          ay += cohY * 0.005;
        }

        if (mouse.active) {
          const dx = mouse.x - f.x;
          const dy = mouse.y - f.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 220 && dist > 10) {
            const targetVx = (dx / dist) * f.maxSpeed;
            const targetVy = (dy / dist) * f.maxSpeed;
            ax += (targetVx - f.vx) * 0.08;
            ay += (targetVy - f.vy) * 0.08;
          }
        }

        const margin = 80;
        if (f.x < margin) ax += 0.08 * (1 - f.x / margin);
        if (f.x > width - margin) ax -= 0.08 * (1 - (width - f.x) / margin);
        if (f.y < margin) ay += 0.08 * (1 - f.y / margin);
        if (f.y > height - margin) ay -= 0.08 * (1 - (height - f.y) / margin);

        const forceMag = Math.sqrt(ax * ax + ay * ay);
        if (forceMag > f.maxForce) {
          ax = (ax / forceMag) * f.maxForce;
          ay = (ay / forceMag) * f.maxForce;
        }

        f.vx += ax;
        f.vy += ay;

        const speed = Math.sqrt(f.vx * f.vx + f.vy * f.vy);
        if (speed > f.maxSpeed) {
          f.vx = (f.vx / speed) * f.maxSpeed;
          f.vy = (f.vy / speed) * f.maxSpeed;
        } else if (speed < f.maxSpeed * 0.3) {
          f.vx = (f.vx / (speed || 1)) * (f.maxSpeed * 0.3);
          f.vy = (f.vy / (speed || 1)) * (f.maxSpeed * 0.3);
        }

        f.x += f.vx;
        f.y += f.vy;

        const targetAngle = Math.atan2(f.vy, f.vx);
        f.angle = lerpAngle(f.angle, targetAngle, 0.12);
        f.wiggle += f.wiggleSpeed * (speed / f.maxSpeed);

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