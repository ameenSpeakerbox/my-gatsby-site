import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import hero_textImage from "../../images/home/hero-section_text.png";
import { heroSection_features } from "../../lib/dummyData";
import { MessageIcon } from "../../ui/Icon";
import heroPic from "../../images/home/hero-section.webp";

const HeroSection = () => {
  return (
    <div className="hight900:h-[1117px]  hightUt900:h-screen overflow-hidden bg-gradient-to-r from-[#100028] to-[#220058] flex flex-col items-center justify-center w-full relative">
      {/* main section */}
      <div className="grid grid-cols-2 h-full w-full ">
        <div className="2xl:text-[65px] text-5xl leading-[110%] font-medium text-white flex flex-col items-start justify-center w-full 2xl:px-[147px] px-[100px] 2xl:pt-60 pt-40">
          Your Design <br />
          <span className="inline-flex items-center">
            Team{" "}
            <img
              alt="textImage"
              src={hero_textImage}
              className="object-contain ml-2 -mb-4 2xl:h-[42px] h-[36px]"
            />
          </span>
          <span className="text-[#E0CCFF]">
            Unlimited <br /> Designs! <br />{" "}
          </span>
          Monthly <br /> Flat Fee
          <span className="bg-white px-[36px] py-[15px] mt-5 rounded-[12px] flex drop-shadow-xl ">
            <p className="text-[22px] font-extrabold text-[#1D014A] leading-[110%] text-center">
              BLACK FRIDAY SALE{" "}
              <p className="text-[#FD0503]">
                30% OFF{" "}
                <span className="font-semibold text-[#1D014A]">
                  ON ALL PLANS!
                </span>
              </p>
            </p>
          </span>
        </div>

        <div className="h-full relative grid w-full">
          <MainImage
            alt="hero-pic"
            src={heroPic}
            className="w-full hight900:h-[1117px]   hightUt900:h-screen absolute right-0 object-cover"
          />
        </div>
      </div>

      {/* heroSection feature */}

      <div className="flex  w-full  items-end justify-center z-10">
        <div className="grid grid-flow-col w-full">
          {heroSection_features.map((item) => (
            <div
              style={{ backgroundColor: item.bgColor }}
              key={item.id}
              className="flex flex-col  gap-[2px] 2xl:py-[51px]  2xl:px-[76px] py-[30px] px-[45px]  border-l border-black  border-t h-full"
            >
              <h2
                className={`font-bold 2xl:text-2xl lg:text-xl text-sm leading-[110%] ${
                  item.id === 3
                    ? "text-white"
                    : "text-[#160137] 2xl:w-[80%] w-[90%] h-full"
                }  `}
              >
                {item.title}
              </h2>
              <p
                className={`font-nunito font-light lg:text-lg text-[10px] leading-[110%] ${
                  item.id === 3
                    ? "text-white"
                    : "text-[#160137] 2xl:w-[80%] w-[90%]"
                }`}
              >
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#1D014A] 2xl:py-[51px]  2xl:px-[76px] py-[30px] px-[45px] border-t border-l border-black 2xl:pb-[35px] pb-[20px] relative h-[110%]">
          <h2 className="text-white 2xl:text-2xl lg:text-xl text-sm font-bold flex shrink-0 w-max">
            <MessageIcon className="absolute 2xl:left-[24px] left-[14px] 2xl:top-[51px] top-[30px] 2xl:w-[48px] 2xl:h-[48px] w-[28px] h-[28px]" />
            NEED TO KNOW MORE? <br />
            LET’S HAVE A CHAT
          </h2>
          <div className="flex justify-end">
            <StaticImage
              src="../../images/home/AJID.png"
              layout="fullWidth"
              width={135}
              height={135}
              objectFit="cover"
              alt="ajid"
              className="lg:w-[135px] lg:h-[135px] w-[80px] h-[80px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
