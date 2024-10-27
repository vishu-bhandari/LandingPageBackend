import React from "react";

export default function SmallBanner() {
  return (
    <div className="z-50 fixed bottom-0 left-0 right-0 h-[70px] bg-white flex items-center justify-between px-4 shadow-2xl">
      {/* Left Side: Pricing */}
      <div className="flex flex-col">
        <p className="text-xl font-semibold text-primary">Price: ₹99</p>
        <p className="text-sm line-through text-gray-500">Original Price: ₹1000</p>
      </div>

      {/* Right Side: Button */}
      <a
        href="https://coachsushantsinghal.com/PaymentPage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="w-28 sm:w-36 md:w-48 lg:w-60 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full uppercase bg-orange-500 text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-white">
          Register Now
        </button>
      </a>
    </div>
  );
}
