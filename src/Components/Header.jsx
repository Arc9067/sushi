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
          <a href="https://t.me/Sushi_Erc" className="text-4xl">
            <RiTelegramLine />
          </a>
          <a href="https://mobile.twitter.com/Sushi_erc" className="text-4xl">
            <RiTwitterLine />
          </a>
          <a
            href="https://etherscan.io/token/0x4ea8eb8025b350aa6cd27134857668f0f2c166a6"
            className="text-4xl"
          >
            <img src={Etherscan} alt="" className="w-[2rem]" />
          </a>
          <a
            href="https://www.dextools.io/app/ether/pair-explorer/0xA6c12fC9FA0aBa593FaF30413b2c4445c858F3e6"
            className="text-4xl"
          >
            <img src={dextool} alt="" className="w-[2rem]" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
