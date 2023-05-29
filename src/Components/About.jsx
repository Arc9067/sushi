import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-primary text-white">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-14">
        <div className="order-2 md:order-1">
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-4xl break-all text-white  capitalize bg-primary w-max">
            about sushi coin
          </h1>
          <p>
            Experience the ultimate fusion of blockchain and sushi with
            SushiCoin! Our hilarious features, like the blockchain-based sushi
            chef assistant "Choppy," will guide you through the crypto world
            with a digital knife and make trading a piece of (sushi) cake. And
            when you need a breather, dive into our virtual sushi-making game,
            "Rolling in Dough," for some guilt-free fun.
          </p>
          <p
            className="
          "
          >
            But that's not all! Our vibrant community of crypto nerds and sushi
            enthusiasts will keep you entertained with sushi-themed memes,
            side-splitting jokes, and a never-ending sushi emoji party on our
            lively Telegram group. Join us and say goodbye to boring finance!
          </p>
          <p className="">
            Ready for a taste of the extraordinary? Strap on your sushi belt and
            let's ride the crypto wave together. Just remember to keep your
            crypto wallet as full as a sushi platter because this adventure will
            be as delicious as it gets!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
