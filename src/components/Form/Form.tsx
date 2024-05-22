import { Button } from "@/components";

export default function Form() {
  return (
    <div className="">
      <div className="_container pt-[150px] pb-[90px] grid grid-cols-[1fr_1fr]">
        <div>
          <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[90px]">
            <span className="text-[#1a1b1d] underline">WHEN</span>
            <span className="text-[#929298]">WE CAN DO IT</span>
          </h2>
          <h2 className="ml-[130px] font-medium text-[55px] leading-[108%] uppercase flex flex-col">
            <span className="text-[#000] ml-[100px]">BOOK A MEETING</span>
            <span className="text-[#929298] flex gap-6">
              WITH
              <video
                muted
                loop
                autoPlay
                playsInline
                src="video/video.mp4"
                className="w-[72px]"
              ></video>
            </span>
            <span className="text-[#000] ml-[174px]">OUR TEAM</span>
          </h2>
        </div>
        <form action="#" className="flex flex-col gap-12 mt-20">
          <input
            type="text"
            placeholder="your name"
            className="h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
          />
          <input
            type="email"
            placeholder="your e-mail"
            className="h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
          />
          <input
            type="text"
            placeholder="subject"
            className="h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
          />
          <input
            type="text"
            placeholder="type your message here"
            className="h-[32px] border-b border-[#000] placeholder:font-medium placeholder:text-[17px] placeholder:leading-[141%] placeholder:text-[#929298]"
          />
          <div className="flex justify-between items-center">
            <p className="font-medium text-[15px] leading-[157%] text-[#929298]">
              By sending this form I confirm that I have read and accept{" "}
              <a href="#" className="underline">
                the Privacy Policy
              </a>
            </p>
            <Button text="SEND" className="w-[185px]" />
          </div>
        </form>
      </div>
    </div>
  );
}
