import { LocationIcon, MailIcon } from "../../ui/Icon";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { footerLinks } from "../../lib/dummyData";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="grid w-full overflow-hidden">
      <div className="bg-[#E0CCFF] pt-[73px] pb-[50px] flex items-center justify-between">
        <div className=" grid place-content-center place-items-center flex-1">
          <StaticImage
            src="../../images/logo-dark.png"
            layout="fixed"
            height={75}
            alt="logo"
          />
        </div>
        <div className="flex  gap-[98px] flex-1">
          {footerLinks.map((link) => (
            <ul key={link.id} className="flex flex-col gap-5">
              <h3 className="text-[#6E3CBC] font-extrabold text-xl font-nunito">
                {link.title}
              </h3>
              <li className="grid gap-[10px]">
                {link.subtitle.map((text) => (
                  <Link 
                  to={`/${text.slug}`}
                    key={text.id}
                    className="font-semibold text-xl text-[#6E3CBC] cursor-pointer font-nunito"
                  >
                    {text.title}
                  </Link>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="bg-[#41118C] flex items-center justify-center gap-[100px] h-[80px]">
        <a
          href=""
          className="inline-flex items-center gap-3 text-white font-nunito font-semibold text-xl"
        >
          <MailIcon />
          hello@grafixy.io
        </a>
        <p className="inline-flex items-center font-nunito font-semibold text-xl text-white gap-3">
          <LocationIcon /> 43/359 H, 2nd Floor, Sabu Plaza, Calicut Road,
          Thurakkal, Manjeri
        </p>
      </div>

      <div className="bg-[#27065A] flex items-center justify-center text-white font-nunito text-xl h-[80px]">
        <p>© By Speakerbox Media LLP. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
