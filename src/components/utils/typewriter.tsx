import { useEffect, useRef } from "react";

type TypewriterProps = {
  texts: string[];
  delay?: number; // ms between each char
  pauseBetween?: number; // pause between texts
  loop?: boolean;
  cursor?: boolean;
  cursorBlinkSpeed?: number;
};

export function Typewriter({ texts, delay = 20, pauseBetween = 1500, loop = true, cursor = true, cursorBlinkSpeed = 500 }: TypewriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const state = useRef({
    textIndex: 0,
    charIndex: 0,
    lastTime: 0,
    isWaiting: false,
  });

  const raf = useRef<number | null>(null);

  useEffect(() => {
    const step = (time: number) => {
      const s = state.current;

      if (!textRef.current) return;

      if (!s.lastTime) s.lastTime = time;
      const delta = time - s.lastTime;

      if (!s.isWaiting && delta >= delay) {
        const currentText = texts[s.textIndex];

        if (s.charIndex < currentText.length) {
          textRef.current.textContent += currentText[s.charIndex];
          s.charIndex++;
          s.lastTime = time;
        } else {
          // pause before next text
          s.isWaiting = true;
          s.lastTime = time;
        }
      }

      // handle pause
      if (s.isWaiting && delta >= pauseBetween) {
        s.textIndex++;

        if (s.textIndex >= texts.length) {
          if (!loop) return;
          s.textIndex = 0;
        }

        s.charIndex = 0;
        s.isWaiting = false;
        textRef.current.textContent = "";
        s.lastTime = time;
      }

      raf.current = requestAnimationFrame(step);
    };

    raf.current = requestAnimationFrame(step);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [texts, delay, pauseBetween, loop]);

  // Cursor blink
  useEffect(() => {
    if (!cursor || !cursorRef.current) return;

    let visible = true;

    const interval = setInterval(() => {
      if (!cursorRef.current) return;
      visible = !visible;
      cursorRef.current.style.opacity = visible ? "1" : "0";
    }, cursorBlinkSpeed);

    return () => clearInterval(interval);
  }, [cursor, cursorBlinkSpeed]);

  return (
    <span>
      <span ref={textRef} />
      {cursor && <span ref={cursorRef}>_</span>}
    </span>
  );
}
