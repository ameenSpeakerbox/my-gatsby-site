import { GatsbyImage, MainImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { gallery } from "../../lib/dummyData";

const PhotoGrid = ({ setIsGalleryOpen, data, setSwiperPosition }) => {
  return (
    <div className="px-[122px] mt-20 grid xl:grid-cols-4 grid-cols-3 xl:gap-12 gap-4 ">
      {data.map((item) => (
        <div
          onClick={() => {
            setIsGalleryOpen(true);
            setSwiperPosition(data.id);
          }}
          key={item.id}
          className=" rounded-[20px] overflow-hidden cursor-pointer w-full h-full"
        >
          <MainImage
            src={item.picture}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
