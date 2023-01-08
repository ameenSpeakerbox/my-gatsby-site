import { MainImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout/layout";
import GetDemo from "../../components/our_works/GetDemo";
import MainParts from "../../components/our_works/MainParts";
import headerImg from "../../images/our_works/ourWorks_heder.png";

const index = () => {
  return (
    <div className="bg-[#1A0143] max-w-[2560px] mx-auto grid w-full ">
      <Layout>
        <div className="h-[632px] flex w-full relative items-center justify-center flex-col text-center z-10">
          <MainImage
            src={headerImg}
            alt="header"
            className="w-full h-full object-cover absolute -z-10"
          />
          <h1 className="font-medium text-[65px] text-[#D5BAFF] leading-none ">
            A perfect fit for <br /> <span>agencies</span> &{" "}
            <span className="text-white">brands</span>
          </h1>
          <p className="text-white text-2xl leading-[125%] w-[50%] mt-5 ">
            Invite team members and clients to help you make and manage designs
            at no extra cost. Easy integration into slack and microsoft teams.
          </p>
        </div>
        <MainParts />
        <GetDemo />
      </Layout>
    </div>
  );
};

export default index;
