import React from "react";

const Header = () => {
  return (
    <div className="p-8">
      <header className="w-full px-5 py-5 flex justify-between items-center">
        <img
          src="https://pngimg.com/d/nike_PNG6.png"
          alt=""
          className="w-[100px]"
        />

<div className='hidden lg:flex gap-5 font-bold text-xl md:flex'>
  <a href="#"  className="hover:underline decoration-red-600 underline-offset-2 hover:scale-95">Menu</a>
  <a href="#" className="hover:underline decoration-red-600 underline-offset-2 hover:scale-95">Location</a>
  <a href="#" className="hover:underline decoration-red-600 underline-offset-2 hover:scale-95">About</a>
  <a href="#" className="hover:underline decoration-red-600 underline-offset-2 hover:scale-95">Contact</a>
</div>


        {/* Mobile Menu Icon for small screens */}
        <i className="ri-menu-line text-3xl font-extrabold lg:hidden"></i>

       <button className="hidden sm:block bg-red-500 px-6 py-1 rounded-sm text-white font-bold hover:bg-red-700 active:scale-90">
  Login
</button>
      </header>

    </div>
  );
};

export default Header;