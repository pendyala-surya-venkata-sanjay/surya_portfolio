"use client";

import { useEffect, useRef } from "react";

const DOT_COUNT = 82;
const LINK_DISTANCE = 150;
const POINTER_DISTANCE = 220;
const DOT_RADIUS = 1.6;
const SPEED = 0.3;

const PALETTE = [
  { r: 56, g: 189, b: 248 }, // cyan
  { r: 168, g: 85, b: 247 }, // purple
  { r: 52, g: 211, b: 153 }, // emerald
  { r: 244, g: 114, b: 182 }, // pink
  { r: 251, g: 191, b: 36 } // amber
];

export function InteractiveNetworkBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;

    const pointer = { x: -9999, y: -9999, active: false, strength: 0 };
    const dots = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createDots = () => {
      dots.length = 0;
      for (let i = 0; i < DOT_COUNT; i += 1) {
        const colorIndex = Math.floor(Math.random() * PALETTE.length);
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          colorIndex
        });
      }
    };

    const drawLink = (x1, y1, x2, y2, alpha, c1, c2) => {
      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      grad.addColorStop(0, `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${alpha})`);
      grad.addColorStop(1, `rgba(${c2.r}, ${c2.g}, ${c2.b}, ${alpha})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.45;
      ctx.lineCap = "round";
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer strength (nice ramp in/out).
      pointer.strength += ((pointer.active ? 1 : 0) - pointer.strength) * 0.08;

      for (let i = 0; i < dots.length; i += 1) {
        const d = dots[i];
        d.x += d.vx;
        d.y += d.vy;

        if (d.x <= 0 || d.x >= width) d.vx *= -1;
        if (d.y <= 0 || d.y >= height) d.vy *= -1;

        const c = PALETTE[d.colorIndex];
        const glow = 0.36 + Math.sin((d.x + d.y) * 0.01) * 0.08;
        ctx.fillStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${glow})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();

      }

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist < LINK_DISTANCE) {
            const t = 1 - dist / LINK_DISTANCE;
            const c1 = PALETTE[a.colorIndex];
            const c2 = PALETTE[b.colorIndex];
            drawLink(a.x, a.y, b.x, b.y, t * 0.14, c1, c2);
          }
        }

        if (pointer.strength > 0.01) {
          const dx = dots[i].x - pointer.x;
          const dy = dots[i].y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < POINTER_DISTANCE) {
            const t = (1 - dist / POINTER_DISTANCE) * pointer.strength;
            const c1 = PALETTE[dots[i].colorIndex];
            const c2 = { r: 168, g: 85, b: 247 }; // pointer accent
            drawLink(
              dots[i].x,
              dots[i].y,
              pointer.x,
              pointer.y,
              t * 0.16,
              c1,
              c2
            );
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const onTouchMove = (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      pointer.x = touch.clientX;
      pointer.y = touch.clientY;
      pointer.active = true;
    };

    const deactivatePointer = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    resize();
    createDots();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", deactivatePointer, {
      passive: true
    });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", deactivatePointer, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", deactivatePointer);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", deactivatePointer);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}

