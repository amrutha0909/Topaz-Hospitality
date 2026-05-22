"use client";
import { useEffect, useRef, useState } from "react";

const pieces = [
  { className: "topaz-intro-piece-tl", position: "0% 0%", x: "-42vw", y: "-34vh", rotate: "-10deg" },
  { className: "topaz-intro-piece-tr", position: "100% 0%", x: "42vw", y: "-34vh", rotate: "10deg" },
  { className: "topaz-intro-piece-bl", position: "0% 100%", x: "-42vw", y: "34vh", rotate: "8deg" },
  { className: "topaz-intro-piece-br", position: "100% 100%", x: "42vw", y: "34vh", rotate: "-8deg" },
];

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);
  const originalStylesRef = useRef(null);
  const releasedRef = useRef(false);

  const restorePageStyles = () => {
    const originalStyles = originalStylesRef.current;

    document.body.style.overflow = originalStyles?.bodyOverflow ?? "";
    document.documentElement.style.overflow = originalStyles?.htmlOverflow ?? "";
    document.body.style.touchAction = originalStyles?.touchAction ?? "";
  };

  const releaseIntro = () => {
    if (releasedRef.current) return;

    releasedRef.current = true;
    restorePageStyles();
    setVisible(false);
  };

  useEffect(() => {
    originalStylesRef.current = {
      bodyOverflow: document.body.style.overflow,
      htmlOverflow: document.documentElement.style.overflow,
      touchAction: document.body.style.touchAction,
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const timeout = window.setTimeout(releaseIntro, 3900);

    return () => {
      window.clearTimeout(timeout);
      if (!releasedRef.current) {
        restorePageStyles();
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="topaz-intro"
      aria-hidden="true"
      onAnimationEnd={(event) => {
        if (event.animationName === "topaz-intro-release") {
          releaseIntro();
        }
      }}
    >
      <div className="topaz-intro-line" />
      <div className="topaz-intro-logo">
        {pieces.map((piece) => (
          <div
            key={piece.className}
            className={`topaz-intro-piece ${piece.className}`}
            style={{
              "--intro-x": piece.x,
              "--intro-y": piece.y,
              "--intro-rotate": piece.rotate,
              backgroundPosition: piece.position,
            }}
          />
        ))}
      </div>
    </div>
  );
}
