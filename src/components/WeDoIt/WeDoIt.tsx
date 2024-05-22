import classNames from "classnames";
import Image from "next/image";

export default function WeDoIt() {
  const list = [
    {
      img: "img-1.png",
      title: "itraq",
      text: "Integrating key features across industries to bring ideas to life",
    },
    {
      img: "img-2.png",
      title: "scatter",
      text: "Architecting resilient frameworks for efficient, scalable digital systems",
    },
    {
      img: "img-3.png",
      title: "Western university",
      text: "Integrating key features across industries to",
    },
  ];

  return (
    <div className="bg-[#f6f6f6] py-[100px]">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[90px]">
          <span className="text-[#1a1b1d] underline">How</span>
          <span className="text-[#929298]">WE DO IT</span>
        </h2>
        <div className="flex flex-col">
          {list.map((item, index) => (
            <div
              key={index}
              className={classNames(
                "grid gap-[33px] grid-cols-[288px_335px]",
                index % 2 === 0 && "self-end",
                index === 2 && "mr-[335px]"
              )}
            >
              <Image src={`/img/${item.img}`} width={288} height={148} alt="" />
              <div className="-translate-y-[1px]">
                <h3 className="font-medium text-[55px] leading-[90%] uppercase text-[#000] mb-[22px]">
                  {item.title}
                </h3>
                <p className="font-medium text-[20px] leading-[120%] uppercase text-[#000]">
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
