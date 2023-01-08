import {  MainImage } from "gatsby-plugin-image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonial } from "../../lib/dummyData";
import { ApostropheIcon } from "../../ui/Icon";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper";

const Testimonial = () => {
  return (
    <div className="grid grid-cols-2 w-full ">
      <div className="w-full bg-white pl-24 py-44 pr-20">
        <h1 className="text-[#1D0149] font-medium text-[65px] leading-none">
          Trusted by the worlds <br /><span className="text-[#6019CE]">largest </span>
          & <span className="text-[#6019CE]">fastest growing <br /></span> companies
        </h1>
        <p className="text-2xl font-semibold font-nunito leading-[130%] text-[#1E014C] mt-6 w-3/4">
          Grafixy makes it incredibly easy Grafixy makes it incredibly easy
          Grafixy makes it incredibly.
        </p>
      </div>
      <div className="bg-[#1A0143] grid items-center justify-center overflow-hidden">
        <Swiper modules={[Autoplay, Pagination]} spaceBetween={0} slidesPerView={1} autoplay={true} className='w-full' pagination>
          {testimonial.map((item) => (
            <SwiperSlide virtualIndex={item.id} key={item.id}>
              <div className="flex flex-col py-16 px-24">
                <ApostropheIcon />
                <p className="text-[#946DD1] text-[40px] leading-[123%] mt-[18px] ">{item.text}</p>
                <span className="flex mt-10 gap-[27px]">
                  <div>
                    <MainImage alt={item.userName} src={item.image} className='object-contain w-full h-full'/>
                  </div>
                  <div >
                    <h4 className="text-3xl text-white leading-[110%] font-nunito font-semibold ">{item.userName}</h4>
                    <i className="text-[#884CE6] text-base font-nunito mt-[1px] font-light">{item.position}</i>
                    <p className="text-2xl font-semibold font-nunito text-[#E0CCFF]">{item.company}</p>
                  </div>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
