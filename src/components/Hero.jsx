import React from "react";

const Hero = () => {
  return (
    <div className="mt-8 lg:flex lg:flex-row justify-center items-center px-[3vw]  md:flex-col-reverse md:gap-10 md:justify-center md:items-center md:-text-center">
      <div className="first-part px-10 md: flex flex-col md:justify-center md:w-full">
        <h1 className="text-7xl font-extrabold uppercase ">
          Your Feet <br /> Deserve <br /> the Best
        </h1>

        <p className="text-lg lg:w-[60%] mt-5 l leading-7 uppercase md:w-[100%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          perspiciatis inventore dolor praesentium. Qui eaque facilis nesciunt
          quod velit libero, minus natus, quibusdam excepturi i.
        </p>

        <div className="mt-5 flex gap-5 ">
          <button className="px-7 py-1 rounded-sm outline-none font-bold bg-red-600 text-white text-lg hover:bg-red-700 active:scale-90">
            Shop Now
          </button>
          <button className="px-7 py-1 rounded-sm  outline outline-1 font-extrabold text-lg active:scale-90 ">
            Category
          </button>
        </div>

        <h2 className="mt-3 ">Also Available On:</h2>

        <div className="space-x-5 mt-3">
          <i className="ri-amazon-fill text-3xl font-extrabold"></i>
          <i className="ri-tiktok-fill text-3xl font-extrabold"></i>
        </div>
      </div>
      <div className="second-part">
      <img
  src="https://png.pngtree.com/png-vector/20240621/ourmid/pngtree-photo-red-sports-shoes-png-image_12814754.png"
  className="w-[50rem]"
  alt="Red sports shoes"
/>
      </div>
    </div>
  );
};

export default Hero;
