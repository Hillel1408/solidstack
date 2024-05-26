import { Observer } from "@/components";

export default function Team() {
  return (
    <div className="bg py-[150px] lg:pt-[93px] lg:pb-[120px] md:py-[60px]">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[26px] lg:text-[41px] lg:mb-20 md:text-[27px] md:mb-[38px]">
          <span className="text-[#1a1b1d] underline">WHO</span>
          <span className="text-[#929298]">WE DO IT FOR</span>
        </h2>
        <div className="flex justify-between overflow-hidden lg:flex-col lg:gap-[50px]">
          <Observer>
            <div className="mt-[62px] lg:w-max lg:mt-0">
              <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000] sm:text-[15px]">
                EVERYONE HERE GETS IT
              </span>
              <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298] md:text-[45px] sm:text-[31px]">
                ADAM <span className="text-[#000]">VALENTI</span>
              </h3>
              <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white ml-auto">
                COO @ SOLIDSTACK
              </div>
            </div>
          </Observer>
          <Observer>
            <div className="lg:self-end lg:text-right">
              <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000] sm:text-[15px]">
                WE MOST DEFINITLY GET IT
              </span>
              <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298] md:text-[45px] sm:text-[31px]">
                KYLE <span className="text-[#000]">ROACH</span>
              </h3>
              <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white lg:ml-auto">
                CEO @ SOLIDSTACK
              </div>
            </div>
          </Observer>
          <Observer>
            <div className="mt-[34px] text-right lg:mt-0 lg:self-start lg:text-left">
              <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000] sm:text-[15px]">
                LETS NOT DOWNPLAY HOW MUCH WE GET IT
              </span>
              <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298] md:text-[45px] sm:text-[31px]">
                SEMYON <span className="text-[#000]">KHLAVICH</span>
              </h3>
              <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white ml-auto lg:ml-0">
                CTO @ SOLIDSTACK
              </div>
            </div>
          </Observer>
        </div>
      </div>
    </div>
  );
}
