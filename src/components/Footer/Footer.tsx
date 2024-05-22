import { Logo } from "@/components";

export default function Footer() {
  return (
    <div className="bg-[#0e0e0e] pt-[28px] pb-[32px]">
      <div className="_container flex items-start justify-between">
        <Logo className="text-white" />
        <div className="flex flex-col gap-[14px] items-end">
          <a
            href="#"
            className="font-medium text-[14px] leading-[171%] text-white"
          >
            Privacy Policy
          </a>
          <span className="font-medium text-[12px] leading-[200%] tracking-[-0.01em] text-[#929298]">
            © Solidstack 2024
          </span>
        </div>
      </div>
    </div>
  );
}
