import { Link } from "gatsby";
import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { trialPlan } from "../../lib/dummyData";
import { Button } from "../../ui/Button";
import { TickIcon } from "../../ui/Icon";

const Collaboration = () => {
  return (
    <div className="flex  w-full tab:flex-row flex-col">
      <div className="bg-[#210153] xl:pl-[100px] lg:pl-[70px] md:pl-[50px] pl-14 flex flex-col items-start justify-center tab:w-[35%] pr-16 shrink-0 tab:py-0 py-11  pb-0 ">
        <h2 className="font-medium  leading-[110%] 2xl:text-6xl sm:text-5xl text-4xl text-white ">
          Easy collab
          <br className="lg:hidden sm:block hidden" />
          oration <br />
          <span className="text-[#D4BFF4]">with your team.</span>{" "}
        </h2>
        <p className="2xl:text-[22px] text-[17px] 2xl:leading-[35px] leading-6 text-white tracking-[1px] mt-[15px] w-3/4">
          For Individuals, Small Businesses & Freelancers For Individuals, Small
          Businesses & Freelancers
        </p>
      </div>
      <div className="tab:py-16 tab:pb-11 pb-11  flex flex-col items-center justify-center flex-1 2xl:px-32 lg:px-20 px-14 tab:bg-white bg-[#210153]">
        <div className="flex justify-between w-full tab:mt-0 mt-3">
          <h2 className="font-semibold 2xl:text-4xl text-3xl lg:leading-[42px] leading-7 tab:text-[#210153] text-[#9C66F0] uppercase">
            Start Your <br />
            <span className="sm:text-[#9C66F0] text-white">
              7 Day Free Trial
            </span>
          </h2>
          <p className="font-semibold text-[#6E3CBC] 2xl:text-2xl text-xl leading-7 text-right uppercase tab:block hidden">
            Do you need a custom plan? <br />
            <span className="underline text-[#210153] font-medium">
              Talk to sales
            </span>
          </p>
        </div>

        <div
          className="flex items-center sm:flex-row flex-col justify-center 2xl:gap-11 xl:gap-8 gap-7 h-full w-full lg:mt-[63px] sm:mt-[40px] mt-[25px] 
        "
        >
          {trialPlan.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#E0CCFF] rounded-[15px] 2xl:px-[62px] 2xl:py-12 xl:px-[50px]  xl:py-11 px-[36px] py-[30px] items-center justify-center max-w-[458px] h-full"
            >
              <div className="flex items-center justify-center">
                <MainImage
                  alt="toy_car"
                  src={item.picture}
                  loading="lazy"
                  className="object-cover 2xl:w-[195px] lg:w-[150px] sm:w-[110px] w-[136px]"
                />
              </div>
              <h2 className="w-full  flex items-center justify-between 2xl:text-5xl lg:text-4xl sm:text-3xl text-4xl font-bold text-[#210153] lg:flex-nowrap flex-wrap">
                <span>{item.title}</span>
                <span className="flex items-center gap-1 font-semibold">
                  <small className="sm:text-2xl text-xl font-extrabold">
                    $
                  </small>
                  {item.price}
                </span>
              </h2>
              <h5 className="mt-4 text-[rgba(32,1,83,0.50)] font-semibold 2xl:text-[22px] lg:text-[20px] text-sm lg:leading-[24px] leading-[14px]">
                {item.subtitle}
              </h5>
              <ul className="grid gap-1 2xl:mt-7 lg:mt-5 mt-3">
                {item.point.map((point) => (
                  <li
                    key={point.id}
                    className="inline-flex items-center gap-[10px] text-[#210153]lg:text-base  text-xs "
                  >
                    <TickIcon className="lg:h-[9px] sm:h-[5px] lg:w-[9px] sm:w-[5px] h-[7px] w-[7px]" />{" "}
                    {point.title}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center flex-col">
                <Button
                  name="Start your free trial!"
                  className="bg-[#210153] rounded-full 2xl:h-16 lg:h-12 h-9 text-white font-bold 2xl:text-lg lg:text-sm sm:text-[10px] text-sm lg:mt-8 mt-7 drop-shadow-2xl shrink-0 flex items-center justify-center lg:px-[30px] px-5 leading-3"
                />
                <Link className="mt-[10px] font-nunito font-bold lg:text-base text-[10px] text-[#210153]">
                  More details
                </Link>
              </div>
            </div>
          ))}
        </div>
          <p className="font-semibold text-[#E0CCFF] text-2xl leading-7 uppercase block tab:hidden text-left w-full mt-8">
            Do you need a custom plan? <br />
            <span className="underline text-white font-medium mt-[10px] leading-10">
              Talk to sales
            </span>
          </p>
      </div>
    </div>
  );
};

export default Collaboration;
