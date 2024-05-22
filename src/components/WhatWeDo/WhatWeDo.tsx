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
    <div className="py-[152px]">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[100px]">
          <span className="text-[#1a1b1d] underline">WHAT</span>
          <span className="text-[#929298]">WE DO</span>
        </h2>
        <div className="grid gap-[66px] grid-cols-[1fr_1fr_1fr]">
          {list.map((item, index) => (
            <div key={index} className="grid gap-5 grid-cols-[1fr_215px]">
              <div className="bg-[linear-gradient(356deg,#ffa8a3_0%,#ff291c_73%,#ff291c_100%)] py-[17px] px-5">
                <Image
                  src={`/img/${item.icon}`}
                  width={item.width}
                  height={item.height}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-medium text-[24px] leading-[183%] uppercase text-[#000]">
                  {item.title}
                </span>
                <p className="font-medium text-[15px] leading-[160%] text-[#929298]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
