export default function WhyWeDoIt() {
  return (
    <div className="pt-[100px] pb-[337px] bg-[#000] overflow-hidden">
      <div className="_container relative">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[70px]">
          <span className="text-white underline">WHAT</span>
          <span className="text-[#929298]">WE DO</span>
        </h2>
        <div className="flex flex-col justify-center items-center gap-1">
          <h3 className="font-medium text-[41px] uppercase text-white">
            WE ARE PASSIONATE ABOUT SOLVING
          </h3>
          <h3 className="font-medium text-[41px] uppercase text-white flex gap-3 items-center mr-[220px]">
            <span className="text-[#929298]">PROBLEMS WITH THE</span>
            <span className="bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] py-1 px-[10px]">
              FREEDOM
            </span>
            <span>TO</span>
          </h3>
          <h3 className="font-medium text-[41px] uppercase text-white ml-[680px]">
            <span className="text-[#929298]">DELIVER HOW WE</span> KNOW BEST
          </h3>
        </div>
        <video
          muted
          loop
          autoPlay
          playsInline
          src="video/video-2.mp4"
          className="absolute -left-[300px] -bottom-[720px]"
        ></video>
      </div>
    </div>
  );
}
