import React from "react";
import Layout from "../../components/layout/layout";
import { faq } from "../../lib/dummyData";
import "../../style/global.css";

const index = () => {
  return (
    <Layout>
      <div className="w-full pt-[312px] bg-[#1A0143] flex flex-col px-[160px] h-full py-[120px]">
        <h1 className="font-medium text-[65px] leading-none text-[#D5BAFF]">
          A perfect fit for <br />
          <span className="text-white">agencies</span> &{" "}
          <span className="text-white">brands</span>
        </h1>
        <p className="font-semibold text-2xl text-white font-nunito w-[45%] mt-5 mb-16">
          Invite team members and clients to help you make and manage designs at
          no extra cost. Easy integration into slack and microsoft teams.
        </p>
        <div className="grid w-full gap-24">
          {faq.map((item) => (
            <div key={item.id} className="">
              <h2 className="font-bold text-[40px] leading-none text-white mb-[30px] uppercase">
                {item.question}
              </h2>
              <div className="grid gap-12">
                {item.answer.map((ans) => (
                  <span key={ans.id} className="">
                    <h4 className="font-nunito text-[30px] font-bold text-white leading-10 mb-[10px]">
                      {ans.subQuestion}
                    </h4>
                    <p className="text-2xl font-semibold font-nunito text-[rgba(255,255,255,0.7)] w-[60%]">
                      {ans.answer}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default index;
