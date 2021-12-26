import React from "react";
import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <div className="grid items-center justify-center max-h-screen grid-cols-2 py-48 mx-auto gap-36 lg:max-w-6xl">
      <div className="flex flex-col space-y-7">
        <h1 className="text-5xl font-bold">Design Your Comfort Zone</h1>
        <p className="text-xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          praesentium asperiores suscipit vel eos neque quo delectus
          exercitationem ipsam accusamus sint voluptates. Nam, quos accusamus?
        </p>
        <a href="/">
          <h1 className="px-4 py-2 text-xl text-white bg-yellow-600 rounded hover:bg-yellow-500 w-fit">
            Shop Now
          </h1>
        </a>
      </div>
      <div className="hidden object-cover w-3/4 lg:flex h-128">
        <img src={HeroImage} alt="Cover_Image" />
      </div>
    </div>
  );
}

export default Hero;
