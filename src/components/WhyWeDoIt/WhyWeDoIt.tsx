"use client";

import { useRef, useEffect, useState } from "react";
import { CoordinatesButton, Button } from "@/components/";
import { useWindowSize } from "@/hooks/windowSize";

export default function WhyWeDoIt() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [translateValue, setTranslateValue] = useState(-23.07);

  const size = useWindowSize();

  const myRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let index = 115;
    let del = 30;

    if (size.width && size.width < 1440) {
      index = 105;
    }

    setTranslateValue(-(scrollPosition / del) + index);
  }, [scrollPosition]);

  return (
    <div ref={myRef} className="bg-[#000] overflow-hidden relative">
      <div className="_container relative pt-[100px] pb-[337px] lg:pb-[220px] md:pt-[60px] md:pb-[362px] sm:pt-[41px] sm:pb-[335px]">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[70px] lg:text-[41px] md:text-[27px]">
          <span className="text-white underline">WHAT</span>
          <span className="text-[#929298]">WE DO</span>
        </h2>
        <div className="flex flex-col justify-center items-center gap-1 relative z-10 text-center">
          <h3 className="font-medium text-[41px] uppercase text-white md:text-[35px] sm:text-[31px]">
            WE ARE PASSIONATE ABOUT SOLVING
          </h3>
          <h3 className="font-medium text-[41px] uppercase text-white flex gap-3 flex-wrap justify-center items-center mr-[220px] lg:mr-0 md:text-[35px] sm:text-[31px]">
            <span className="text-[#929298]">PROBLEMS WITH THE</span>
            <span className="bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] py-1 px-[10px]">
              FREEDOM
            </span>
            <span>TO</span>
          </h3>
          <h3 className="font-medium text-[41px] uppercase text-white ml-[680px] lg:ml-0 md:text-[35px]">
            <span className="text-[#929298]">DELIVER HOW WE</span> KNOW BEST
          </h3>
          {size.width && size.width <= 768 && (
            <Button
              text="READY TO MAKE SOMETHING GREAT?"
              className="mt-[50px] sm:mt-[38px]"
            />
          )}
        </div>
        {/* style={{ transform: `translate(0%, ${translateValue}%)` }} */}
        <div
          style={{ transform: `translate(0%, ${translateValue}%)` }}
          className="absolute -left-[300px] top-[340px] lg:top-[330px] md:left-0 md:right-0 md:top-[490px] sm:top-[590px]"
        >
          <video
            muted
            loop
            autoPlay
            playsInline
            src="video/video-2.mp4"
            className="md:scale-[170%] sm:scale-[260%]"
          ></video>
        </div>
      </div>

      {size.width && size.width > 768 && (
        <CoordinatesButton myRef={myRef} href="#" />
      )}
    </div>
  );
}
