import React from "react";
import { GrafixyWhiteIcon, Grafixy_questionIcon } from "../../ui/Icon";

const Why_grafixy = () => {
  return (
    <div className="2xl:px-[147px] 2xl:py-[122px] lg:px-[100px] lg:py-[80px] sm:py-[73px] sm:px-11 px-[30px] py-[30px] md:px-[90px] bg-[#6019CE] grid md:grid-cols-3 sm:grid-cols-2 2xl:gap-[86px] lg:gap-16 gap-10 w-full" >
      <span className="flex items-center justify-start 2xl:text-[58px] lg:text-5xl sm:text-3xl text-[53px] font-medium text-white ">
        why&nbsp;
        <Grafixy_questionIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[50px] h-[60]  shrink-0 2xl:-ml-3 lg:-ml-8 sm:-ml-[65px] -ml-1" />
      </span>

      <span className="flex items-start justify-start 2xl:text-[34px] lg:text-3xl sm:text-xl text-2xl leading-[110%] font-bold text-white  sm:-rotate-6 w-full">
        <div className="2xl:mr-2 xl:mr-1 sm:mr-0 mr-[15px]">
          <GrafixyWhiteIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[28px] h-[42px]  shrink-0 " />
        </div>
        <h3>
          MAKE{" "}
          <span className="text-[#FFE600]">
            UNLIMITED <br />
          </span>{" "}
          DESIGN REQUESTS <br />& REVISIONS
        </h3>
      </span>
      <span className="flex items-start justify-start 2xl:text-[34px] lg:text-3xl sm:text-xl text-2xl leading-[110%] font-bold text-white  sm:-rotate-6 w-full">
        <div className="mr-2">
          <GrafixyWhiteIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[28px] h-[42px]  shrink-0  " />
        </div>
        <h3>
          NO STRESS OF <br /> <span className="text-[#FFE600]">HIRING </span>A{" "}
          <br /> DESIGNER
        </h3>
      </span>
      <span className="flex items-start justify-start 2xl:text-[34px] lg:text-3xl sm:text-xl text-2xl leading-[110%] font-bold text-white  sm:-rotate-6 w-full">
        <div className="mr-2">
          <GrafixyWhiteIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[28px] h-[42px]  shrink-0  " />
        </div>
        <h3>
          INCREDIBLY{" "}
          <span className="text-[#FFE600]">
            FAST <br />
          </span>{" "}
          TURNAROUNDS
        </h3>
      </span>
      <span className="flex items-start justify-start 2xl:text-[34px] lg:text-3xl sm:text-xl text-2xl leading-[110%] font-bold text-white  sm:-rotate-6 w-full">
        <div className="mr-2">
          <GrafixyWhiteIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[28px] h-[42px]  shrink-0  " />
        </div>
        <h3>
          <span className="text-[#FFE600]">
            DEDICATED <br />
          </span>{" "}
          PROJECT MANAGER <br /> & TEAM
        </h3>
      </span>
      <span className="flex items-start justify-start 2xl:text-[34px] lg:text-3xl sm:text-xl text-2xl leading-[110%] font-bold text-white  sm:-rotate-6 w-full">
        <div className="mr-2">
          <GrafixyWhiteIcon className="2xl:h-[95px] lg:h-[80px] sm:h-[28px] h-[42px]  shrink-0  " />
        </div>
        <h3>
          NO{" "}
          <span className="text-[#FFE600]">
            {" "}
            CONTRACTS, <br />
          </span>{" "}
          CANCEL ANYTIME.
        </h3>
      </span>
    </div>
  );
};

export default Why_grafixy;
