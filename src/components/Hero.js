import React from "react";
import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <div className="grid items-center justify-center max-h-screen px-10 py-12 mx-auto sm:py-24 md:py-48 lg:px-0 lg:grid-cols-2 gap-36 lg:max-w-6xl">
      <div className="flex flex-col space-y-7">
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Design Your Comfort Zone
        </h1>
        <p className="text-sm text-gray-500 md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          praesentium asperiores suscipit vel eos neque quo delectus
          exercitationem ipsam accusamus sint voluptates. Nam, quos accusamus?
        </p>
        <a href="/" className=" w-fit">
          <h1 className="px-4 py-2 text-xl text-white bg-yellow-600 rounded hover:bg-yellow-500 w-fit">
            Shop Now
          </h1>
        </a>
      </div>
      <div className="hidden w-3/4 lg:flex h-128">
        <img
          className="object-cover rounded"
          src={HeroImage}
          alt="Cover_Image"
        />
      </div>
    </div>
  );
}

export default Hero;
