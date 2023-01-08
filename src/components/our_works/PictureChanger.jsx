import { MainImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import { ArrowLeftIcon, CloseIcon } from "../../ui/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { gallery } from "../../lib/dummyData";

const PictureChanger = ({
  isGalleryOpen,
  setIsGalleryOpen,
  data
}) => {
  const swiperRef = useRef();
  
  return (
    <div
      className={`bg-black bg-opacity-50  fixed   inset-0  place-content-center w-full h-full flex items-center justify-center  ${
        isGalleryOpen ? "opacity-100 z-[100]" : "opacity-0 -z-[500]"
      } duration-500`}
    >
      <div className="w-full h-full relative flex items-center justify-center">
        <CloseIcon
          onClick={() => setIsGalleryOpen(false)}
          className="absolute right-16 top-16 cursor-pointer hover:rotate-90 duration-300 "
        />
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-[20%] cursor-pointer flex items-center justify-center hover:bg-[#0000004f] h-full"
        >
          <ArrowLeftIcon className="cursor-pointer " />
        </div>
        <div className=" w-[60%] flex items-center justify-center px-[74px] py-[74px] h-full relative">
          <Swiper
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;

            }}
            
            loop={true}
            className="w-full h-full flex items-center justify-center"
          >
            {data?.map((item) => (
              <SwiperSlide
                key={item.id}
                className="w-full h-full flex items-center justify-center"
              >
                <MainImage
                  src={item.picture}
                  className="object-contain h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="w-[20%] cursor-pointer flex items-center justify-center hover:bg-[#0000004f] h-full"
        >
          <ArrowLeftIcon className="rotate-180 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PictureChanger;
