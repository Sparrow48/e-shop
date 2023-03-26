import React from "react";

const Footer = () => {

  return (
    <div className="h-20 bg-slate-100">
      <div className="max-w-2xl  mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between pt-7">
          <p>e-Shop</p>
          <p>&copy;{new Date().getFullYear()} <a href="https://nasib.vercel.app/" target="_blank" className=" text-blue-700">Nasib</a> all rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
