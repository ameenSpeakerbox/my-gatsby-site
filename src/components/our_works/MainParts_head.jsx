import React from "react";

const MainParts_head = ({ category, isCategory, setIsCategory }) => {
  const id = "Featured";
  return (
    <div className="w-fill flex bg-white items-center justify-center py-[42px] gap-[100px]">
      {category.map((item) => (
        <p
          onClick={() => setIsCategory(item.title)}
          key={item.id}
          className={`font-medium text-4xl 
        text-[#6E3CBC] cursor-pointer hover:text-[#210153]  px-[15px] py-[10px] rounded-[10px] duration-300 ${isCategory === item.title && "bg-[#874ce618]"
            }`}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
};

export default MainParts_head;
