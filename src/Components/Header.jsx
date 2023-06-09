import React from "react";
import { RiTelegramLine, RiTwitterLine } from "react-icons/ri";
import Etherscan from "../assets/etherscan-logo-circle 1.svg";
import dextool from "../assets/dextool.svg";

const Header = () => {
  return (
    <header className="py-3 w-full mx-auto rounded-b-2xl bg-primary text-white absolute top-0">
      <div className="container flex-col md:flex-row gap-y-3 flex items-center justify-between">
        <a href="" className="font-Asiana capitalize text-3xl tracking-wide">
          sushi official
        </a>
        <div className="flex items-center gap-3">
          <a href="https://t.me/sushi_ERC20" className="text-4xl">
            <RiTelegramLine />
          </a>
          <a href="https://twitter.com/sushi_ERC20" target="_blank" className="text-4xl">
            <RiTwitterLine />
          </a>
          <a href="" className="text-4xl">
            <img src={Etherscan} alt="" className="w-[2rem]" />
          </a>
          <a href="" className="text-4xl">
            <img src={dextool} alt="" className="w-[2rem]" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
