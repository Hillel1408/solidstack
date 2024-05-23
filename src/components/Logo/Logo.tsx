import classNames from "classnames";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-[65px] h-[58px] relative lg:w-[55px] lg:h-[49px]">
        <Image src="/img/logo.svg" fill alt="" />
      </div>
      <span
        className={classNames(
          "font-medium text-[18px] leading-[89%] tracking-[-0.01em] lg:text-[15px]",
          className
        )}
      >
        Solidstack
      </span>
    </div>
  );
}
