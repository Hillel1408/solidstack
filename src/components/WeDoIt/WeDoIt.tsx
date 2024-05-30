import classNames from "classnames";
import { Observer } from "@/components";

export default function WeDoIt() {
  const list = [
    {
      img: "img-1.png",
      title: "itraq",
      text: "Integrating key features across industries to bring ideas to life",
    },
    {
      img: "img-3.png",
      title: "Western university",
      text: "Integrating key features across industries to",
    },
    {
      img: "img-2.png",
      title: "scatter",
      text: "Architecting resilient frameworks for efficient, scalable digital systems",
    },
  ];

  return (
    <div className="bg-[#f6f6f6] py-[100px] md:py-10">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[90px] lg:text-[41px] md:text-[27px] md:mb-[37px] sm:mb-[27px]">
          <span className="text-[#1a1b1d] underline">How</span>
          <span className="text-[#929298]">WE DO IT</span>
        </h2>
        <div className="flex flex-col gap-10 overflow-hidden lg:gap-[54px]">
          {list.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "sm:w-full",
                index % 2 === 0 && "self-end md:self-start",
                index === 2 && "mr-[335px] lg:mr-0"
              )}
            >
              <div
                className={classNames(
                  "grid gap-[33px] grid-cols-[288px_335px] md:grid-cols-[220px_1fr] sm:grid-cols-[1fr]"
                )}
              >
                <img
                  src={`/img/${item.img}`}
                  className="w-[288px] h-[148px] md:w-[220px] md:h-[113px] sm:w-full sm:h-auto"
                  alt=""
                />
                <div className="-translate-y-[1px]">
                  <h3 className="font-medium text-[55px] leading-[90%] uppercase text-[#000] mb-[22px] md:text-[30px]">
                    {item.title}
                  </h3>
                  <p className="font-medium text-[20px] leading-[120%] uppercase text-[#000] md:text-[12px]">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
