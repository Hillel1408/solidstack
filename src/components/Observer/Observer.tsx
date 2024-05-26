"use client";

import classNames from "classnames";
import { useEffect, useRef } from "react";

export default function Observer({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) {
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
    <div
      ref={myRef}
      className={classNames("duration-1000 translate-y-[100%]", className)}
    >
      {children}
    </div>
  );
}
