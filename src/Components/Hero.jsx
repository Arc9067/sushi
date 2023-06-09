import React from "react";
import Logo from "../assets/logo2.png";

const Hero = () => {
  return (
    <section className=" w-full pt-[150px] text-white">
      <div className="container flex-col gap-6 font-Asiana flex justify-center items-center">
        <h1 className="text-5xl text-center  md:text-6xl font-Asiana capitalize font-bold">
          sushi coin
        </h1>
        <p className="text-center max-w-[600px] mx-auto text-2xl">
          Slice through the crypto market with SushiCoin, the tastiest and
          funniest crypto project around! Join our community of sushi-loving
          traders, ride the wave of innovation, and let's roll into the future
          of finance, one hilarious bite at a time!
        </p>

        <p className=" max-w-[600px] mx-auto text-2xl md:flex flex-wrap items-center justify-center">
          Contract:{" "}
          <span className="text-xl block">
            000000000000000000000000000000000000
          </span>
        </p>

        <p className=" max-w-[600px] mx-auto text-2xl md:flex flex-wrap items-center justify-center">
          yugifouga@gmail.com
        </p>

        <a
          href=""
          className="bg-black capitalize text-2xl rounded-md px-6 py-3"
        >
          buy sushi
        </a>
        <img src={Logo} alt="logo" className="md:w-[15rem] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
