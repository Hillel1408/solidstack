"use client";

import { useEffect, useRef } from "react";

export default function Observer({ children }: { children: JSX.Element }) {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && myRef.current) {
          myRef.current.classList.add("!translate-y-[0]");
          return;
        }
      });
    });
    myRef.current && observer.observe(myRef.current);
  }, []);

  return (
    <div ref={myRef} className="duration-1000 translate-y-[100%]">
      {children}
    </div>
  );
}
