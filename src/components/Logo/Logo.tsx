import classNames from "classnames";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image src="img/logo.svg" width={65} height={58} alt="" />
      <span
        className={classNames(
          "font-medium text-[18px] leading-[89%] tracking-[-0.01em]",
          className
        )}
      >
        Solidstack
      </span>
    </div>
  );
}
