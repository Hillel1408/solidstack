"use client";

import { useRef } from "react";
import { Observer } from "@/components";
import Image from "next/image";

export default function WhatWeDo() {
  const list = [
    {
      icon: "icon-1.svg",
      title: "SYSTEMS DESIGN",
      text: "Architecting resilient frameworks for efficient, scalable digital systems",
      width: 60,
      height: 60,
    },
    {
      icon: "icon-2.svg",
      title: "PRODUCT DEVELOPMENT",
      text: "Integrating key features across industries to bring ideas to life",
      width: 51.52,
      height: 60,
    },
    {
      icon: "icon-3.svg",
      title: "AUTOMATION",
      text: "Streamlining manual processes for improved operational efficiency",
      width: 67.8,
      height: 60,
    },
  ];

  return (
    <div className="py-[152px] lg:py-[100px] md:py-[50px]">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[100px] lg:text-[41px] md:text-[27px] md:mb-[37px] sm:mb-[27px]">
          <span className="text-[#1a1b1d] underline">WHAT</span>
          <span className="text-[#929298]">WE DO</span>
        </h2>
        <div className="grid gap-[66px] grid-cols-[1fr_1fr_1fr] lg:gap-[60px] md:grid-cols-[1fr_1fr] sm:grid-cols-[1fr]">
          {list.map((item, index) => (
            <Observer key={index}>
              <div className="grid gap-5 grid-cols-[1fr_215px] lg:grid-cols-[1fr] sm:grid-cols-[140px_1fr] sm:gap-2 sm:items-start">
                <div className="bg-[linear-gradient(356deg,#ffa8a3_0%,#ff291c_73%,#ff291c_100%)] py-[17px] px-5 lg:max-w-[193px] sm:min-h-[134px] sm:p-2">
                  <Image
                    src={`/img/${item.icon}`}
                    width={item.width}
                    height={item.height}
                    alt=""
                    className="scale-[70%]"
                  />
                </div>
                <div className="flex flex-col gap-4 sm:gap-2">
                  <span className="font-medium text-[24px] leading-[183%] uppercase text-[#000] lg:text-[20px] md:text-[18px] sm:leading-[170%]">
                    {item.title}
                  </span>
                  <p className="font-medium text-[15px] leading-[160%] text-[#929298]">
                    {item.text}
                  </p>
                </div>
              </div>
            </Observer>
          ))}
        </div>
      </div>
    </div>
  );
}
