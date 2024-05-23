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
    <div className="bg-[#0E0E0E] py-10">
      <div className="_container flex justify-between">
        <ul className="flex gap-[75px] text-[15px] leading-[96%] uppercase text-white">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex gap-[75px]">
          <span className="text-[15px] leading-[96%] uppercase text-white">
            our clients:
          </span>
          {logo.map((item, index) => (
            <Image
              key={index}
              src={`/img/${item.icon}`}
              width={item.width}
              height={item.height}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
