import { Link } from "gatsby";
import { MainImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { faq_home } from "../../lib/dummyData";
import { TickIn_circleIcon } from "../../ui/Icon";
import QuotationOpener from "../../ui/QuotationOpener";
import faqPic from "../../images/home/homeFaq.png";

const HomeFAQ = () => {
  const [questionToggle, setQuestionToggle] = useState("");

  const handleToggle = (question) => {
    if (questionToggle === question) return setQuestionToggle("");
    else return setQuestionToggle(question);
  };
  return (
    <div className="flex w-full ">
      <div className="bg-[#1A0143] flex flex-col items-start justify-center w-full 2xl:px-32 px-24 place-content-center gap-9 2xl:py-52 py-40">
        <h2 className="font-semibold 2xl:text-6xl lg:text-5xl text-4xl text-[#6E3CBC]">
          Frequently Asked <br />
          <span className="text-[#E0CCFF]">Questions</span>
        </h2>
        <div className="w-full grid lg:gap-10 gap-6 duration-300">
          {faq_home.map((item) => (
            <div
              key={item.id}
              onClick={() => handleToggle(item.question)}
              className="px-10 lg:py-6 py-4 bg-[#1D004E] rounded-[10px] w-full duration-300 ease-in transition-all z-10"
            >
              <span className=" inline-flex justify-between items-center w-full cursor-pointer">
                <h4 className="font-nunito font-semibold 2xl:text-2xl lg:text-xl text-sm text-[#E0CCFF]">
                  {item.question}
                </h4>
                <TickIn_circleIcon
                  className={`${
                    questionToggle === item.question ? "rotate-180" : "rotate-0"
                  }  duration-300 ease-out `}
                />
              </span>
              <p
                className={`${
                  questionToggle === item.question
                    ? "opacity-100 h-20 "
                    : "-translate-y-9 opacity-0 h-0"
                } duration-300 transition-all mt-[10px] lg:text-base text-xs font-nunito text-white cursor-default -z-10 w-[90%]`}
              >
                {item.answer}
              </p>
            </div>
          ))}
        </div>
        <Link
          to=""
          className="font-semibold 2xl:text-[35px] lg:text-[32px] text-base text-[#6E3CBC] underline"
        >
          More from <span className="text-[#E0CCFF] underline">FAQs</span>{" "}
        </Link>
      </div>
      <div className="bg-[#6019CE] flex flex-col items-end  justify-end w-[35%] shrink-0  relative overflow-hidden">
        <img
          src={faqPic}
          alt="homeFaq"
          className="h-max  absolute object-cover top-0  object-left-bottom left-0 2xl:min-w-[1055px] min-w-[900px]"
        />
      </div>
    </div>
  );
};

export default HomeFAQ;
