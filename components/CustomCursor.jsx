"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    // Check if we are on client and screen is large enough
    if (typeof window === "undefined") return;

    const cursor = document.getElementById("custom-cursor");
    const dot = document.getElementById("custom-cursor-dot");
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot instantly
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    // Smooth ease animation loop for the outer cursor circle
    const animate = () => {
      const ease = 0.15;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;
      
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    const addHoverClass = () => cursor.classList.add("hover");
    const removeHoverClass = () => cursor.classList.remove("hover");

    window.addEventListener("mousemove", onMouseMove);
    const animFrame = requestAnimationFrame(animate);

    // Dynamic selectors to apply the interactive hover zoom
    const attachHoverHandlers = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, select, textarea, [role='button'], .group, iframe, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet"
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", addHoverClass);
        el.addEventListener("mouseleave", removeHoverClass);
      });
    };

    attachHoverHandlers();

    // Re-attach handlers if DOM changes (e.g. Swiper loads slides)
    const observer = new MutationObserver(attachHoverHandlers);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div id="custom-cursor" className="cursor hidden md:block" />
      <div id="custom-cursor-dot" className="cursor-dot hidden md:block" />
    </>
  );
}
