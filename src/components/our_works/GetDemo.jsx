import { MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button } from "../../ui/Button";
import image_of_demo from "../../images/our_works/getADemo.png";


const GetDemo = () => {
  return (
    <div className=" flex w-full my-20 h-auto px-24">
      <div className="w-full py-[70px] px-[122px]  bg-gradient-to-l from-[#6019CE] to-[#41118C] rounded-[50px] relative">
        <h1 className="font-medium text-6xl text-white ">
          <span className="opacity-[.65] text-[#E0CCFF]"> Ready to try</span>{" "}
          Grafixy?
        </h1>
        <p className="font-nunito font-semibold  text-2xl text-[#E0CCFF] max-w-[50%] mt-[30px]">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly. Grafixy makes it incredibly.
        </p>
        <div className="flex gap-[26px] mt-[30px]">
          <Button
            className="text-white px-[11px] py-[32px] bg-[#6019CE] rounded-[33px] drop-shadow-lg h-[67px] flex items-center justify-center w-[180px] font-bold text-lg "
            name="GET A DEMO"
          />
          <Button  className="text-white px-[11px] py-[32px] bg-[#19013F] rounded-[33px] drop-shadow-lg h-[67px] flex items-center justify-center w-[180px]"
            name="GET A DEMO" />
        </div>
          <MainImage src={image_of_demo} className="absolute bottom-0 right-16" />
          
      </div>
    </div>
  );
};

export default GetDemo;
