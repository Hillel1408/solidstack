import Image from "next/image";

export default function Partners() {
  const list = ["based in toronto", "operate worldwide", "solve anything"];
  const logo = [
    { icon: "icon-4.svg", width: 84, height: 20 },
    { icon: "icon-5.svg", width: 45, height: 20 },
    { icon: "icon-6.svg", width: 105.16, height: 17.2 },
    { icon: "icon-7.svg", width: 100, height: 19 },
  ];

  return (
    <div className="bg-[#0E0E0E] py-10 lg:py-[26px] md:pb-[22px] relative">
      <div className="_container flex justify-between items-center">
        <ul
          className="flex gap-[75px] text-[15px] leading-[96%] uppercase text-white lg:text-[11px] lg:gap-[40px] lg:absolute lg:left-0 lg:right-0
          lg:top-0 lg:justify-center lg:-translate-y-[36px] lg:text-[#929298] md:gap-[22px] sm:text-[10px]"
        >
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex gap-[75px] items-center lg:gap-[63px] lg:mx-auto md:overflow-auto md:pb-1 md:gap-[43px] sm:gap-[10px]">
          <span className="text-[15px] leading-[96%] uppercase text-white lg:text-[11px] md:hidden">
            our clients:
          </span>
          {logo.map((item, index) => (
            <Image
              key={index}
              src={`/img/${item.icon}`}
              width={item.width}
              height={item.height}
              alt=""
              className="lg:scale-[80%]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
