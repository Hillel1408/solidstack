export default function Team() {
  return (
    <div className="py-[150px]">
      <div className="_container">
        <h2 className="flex gap-[22px] uppercase font-medium text-[45px] leading-[98%] mb-[26px]">
          <span className="text-[#1a1b1d] underline">WHO</span>
          <span className="text-[#929298]">WE DO IT FOR</span>
        </h2>
        <div className="flex justify-between">
          <div className="mt-[62px]">
            <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000]">
              EVERYONE HERE GETS IT
            </span>
            <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298]">
              ADAM <span className="text-[#000]">VALENTI</span>
            </h3>
            <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white ml-auto">
              COO @ SOLIDSTACK
            </div>
          </div>
          <div>
            <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000]">
              WE MOST DEFINITLY GET IT
            </span>
            <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298]">
              KYLE <span className="text-[#000]">ROACH</span>
            </h3>
            <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white">
              CEO @ SOLIDSTACK
            </div>
          </div>
          <div className="mt-[34px] text-right">
            <span className="font-medium text-[20px] leading-[195%] uppercase text-[#000]">
              LETS NOT DOWNPLAY HOW MUCH WE GET IT
            </span>
            <h3 className="font-medium text-[55px] leading-[128%] uppercase text-[#929298]">
              SEMYON <span className="text-[#000]">KHLAVICH</span>
            </h3>
            <div className="font-medium text-[15px] leading-[157%] uppercase bg-[linear-gradient(90deg,#ff2a1d_0%,#ff9e99_100%)] w-max text-white ml-auto">
              CTO @ SOLIDSTACK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
