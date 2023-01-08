import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../../ui/Button";
import { Link } from "gatsby";
import { navLink } from "../../lib/dummyData";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <nav className="relative h-[.1px] flex items-center  w-full">
      <div className="2xl:px-[147px] px-[100px]  flex absolute z-50 h-[67px] items-center justify-between w-full left-0 top-0 2xl:mt-[90px] mt-16 overflow-hidden">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            layout="fullWidth"
            objectFit="contain"
            className="2xl:w-[205px] w-[170px]"
          />
        </Link>
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center 2xl:gap-[50px] justify-end mr-[35px] gap-10 w-full">
            {navLink.map((nav) => (
              <Link
                key={nav.id}
                to={`/${nav.slug}`}
                className="text-white font-bold text-lg"
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <Button
            className="h-[67px] bg-[#19013F] mr-[10px] drop-shadow-lg text-white px-[31px] py-[10px] rounded-full shrink-0"
            name="CLIENT LOGIN"
          />
          <Button
            className="h-[67px] bg-white text-[#19013F] drop-shadow-lg px-[31px] py-[10px] rounded-full shrink-0"
            name="SCHEDULE A DEMO"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
