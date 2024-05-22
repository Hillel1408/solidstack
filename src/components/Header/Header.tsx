import Image from "next/image";
import { Button } from "@/components";

export default function Header() {
  const list = [
    { title: "Services", href: "" },
    { title: "Projects", href: "" },
    { title: "Clients", href: "" },
    { title: "About", href: "" },
    { title: "Contact", href: "" },
  ];

  return (
    <div className="absolute left-0 right-0 py-5">
      <div className="_container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="img/logo.svg" width={65} height={58} alt="" />
          <span className="font-medium text-[18px] leading-[89%] tracking-[-0.01em] text-[#1a1b1d]">
            Solidstack
          </span>
        </div>
        <ul className="flex items-center font-medium text-[17px] leading-[94%] tracking-[-0.01em] text-[#1a1b1d]">
          {list.map((item, index) => (
            <li key={index}>
              <a href="#" className="px-6 py-3">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="tel:+16475818664"
            className="font-medium text-[16px] tracking-[-0.01em] text-[#1a1b1d]"
          >
            +1 647 581 86 64
          </a>
          <Button text="Let's talk" />
        </div>
      </div>
    </div>
  );
}