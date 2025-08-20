import { useCallback, useEffect, useRef } from "react";

export function use3d({ count = 1, angle = 45 }: { count?: number; angle?: number }) {
  const itemsRef = useRef<(HTMLElement | null)[]>(Array.from({ length: Math.max(count, 1) }, () => null));

  const rotateElement = useCallback((event: MouseEvent, element: HTMLElement) => {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    // find the middle of the element
    const rect = element.getBoundingClientRect();
    const middleX = rect.left + rect.width / 2;
    const middleY = rect.top + rect.height / 2;

    const offsetX = ((x - middleX) / middleX) * angle;
    const offsetY = ((y - middleY) / middleY) * angle;

    // set rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", -1 * offsetY + "deg");
  }, []);

  useEffect(() => {
    const items = itemsRef.current;

    function handleMouseMove(event: MouseEvent) {
      for (const item of items) {
        if (item) rotateElement(event, item);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [rotateElement]);

  return {
    itemsRef: (index: number) => {
      return (ref: HTMLElement | null) => {
        itemsRef.current[index] = ref;
        ref?.classList.add("rotate-3d");
      };
    },
    itemRef: (ref: HTMLElement | null) => {
      itemsRef.current[0] = ref;
      ref?.classList.add("rotate-3d");
    },
  };
}
