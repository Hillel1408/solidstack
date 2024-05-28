import { Button, Logo } from "@/components";

export default function Header() {
  const list = [
    { title: "Services", href: "" },
    { title: "Projects", href: "" },
    { title: "Clients", href: "" },
    { title: "About", href: "" },
    { title: "Contact", href: "" },
  ];

  return (
    <div className="absolute left-0 right-0 py-5 min-w-[375px] z-10">
      <div className="_container flex items-center justify-between gap-4">
        <Logo className="text-[#1a1b1d]" />
        <ul className="flex flex-wrap gap-y-2 items-center font-medium text-[17px] leading-[94%] tracking-[-0.01em] text-[#1a1b1d] lg:text-[15px] md:hidden">
          {list.map((item, index) => (
            <li key={index}>
              <a href="#" className="px-6 py-3 lg:px-3 lg:py-2">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="tel:+16475818664"
            className="font-medium text-[16px] tracking-[-0.01em] text-[#1a1b1d] whitespace-nowrap lg:text-[14px] sm:hidden"
          >
            +1 647 581 86 64
          </a>
          <Button text="Let's talk" />
        </div>
      </div>
    </div>
  );
}
