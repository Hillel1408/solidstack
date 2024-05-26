export default function Intro() {
  return (
    <div className="bg pt-[471px] pb-[443px] lg:pt-[325px] lg:pb-[331px] md:py-[200px] sm:py-[170px]">
      <div className="_container flex justify-center flex-col gap-[20px] items-center ld:gap-[18px] md:gap-[16px] sm:gap-[10px] sm:items-start">
        <div className="overflow-hidden pb-[10px]">
          <h2 className="animation-1 font-medium text-[55px] leading-[80%] uppercase text-[#929298] lg:text-[41px] md:text-[35px] sm:text-[31px]">
            engineered{" "}
            <span
              className="animation-2 text-[#000] relative before:content-[''] before:block before:h-[3px] before:w-full before:bg-[#1a1b1d] before:absolute
              before:bottom-0 before:left-0"
            >
              to fit
            </span>
          </h2>
        </div>
        <div className="overflow-hidden">
          <h2 className="animation-1 font-medium text-[55px] leading-[110%] uppercase text-[#929298] lg:text-[41px] md:text-[35px] sm:text-[31px]">
            <span className="bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] py-1 px-[10px] text-white inline-block">
              custom
            </span>{" "}
            software solutions
          </h2>
        </div>
        <div className="overflow-hidden">
          <p className="animation-1 mt-[34px] max-w-[906px] font-medium text-[16px] leading-[194%] text-[#1a1b1d] text-center lg:text-[15px] md:text-[12px] sm:mt-5 sm:text-left">
            WE ARE INTERESTED IN SOLVING YOUR PROBLEMS. WE DESIGN, DEVELOP AND
            DEPLOY ELEGANT SOLUTIONS TO MEET THE EXACT NEEDS OF YOUR BUSINESS
          </p>
        </div>
      </div>
    </div>
  );
}
