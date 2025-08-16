import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PageLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [isFinished, setIsFinished] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".loader-block", {
        y: "-100%", // move upward out of screen
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.1, // delay between each block,
        onComplete: () => {
          setIsFinished(true);
        },
      });
      gsap.to(logoRef.current, {
        y: -1000,
        duration: 2,
        ease: "power4.inOut",
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className={`fixed inset-0 z-[999] ${isFinished && "hidden"}`}>
      <div
        ref={containerRef}
        className={`*:bg-dark absolute inset-0 grid grid-cols-10 ${isFinished && "hidden"}`}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="loader-block"></div>
        ))}
      </div>
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center`}
      >
        <div ref={logoRef}>
          <img
            src={"/movie.svg"}
            alt={"logo"}
            className={"h-[70px] w-[70px] animate-spin"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
