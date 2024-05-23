import classNames from "classnames";

export default function Button({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={classNames(
        "py-[10px] whitespace-nowrap px-[20px] font-medium text-[19px] leading-[95%] tracking-[-0.01em] lowercase text-white bg-[linear-gradient(356deg,#ffa8a3_0%,#ff291c_73%,#ff291c_100%)] lg:text-[16px]",
        className
      )}
    >
      {text}
    </button>
  );
}
