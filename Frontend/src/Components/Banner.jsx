import React from "react";

export default function Banner() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-gray-100 rounded-xl ">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 ">
          <div className="relative overflow-hidden border-b w-full dark:border-gray-700 dark:bg-gray-900">
            <div className="px-6 py-8 sm:px-6 sm:py-20">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-semibold tracking-tight text-center text-black sm:text-4xl dark:text-white">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
                <p className="max-w-xl mx-auto mt-3 text-gray-700 sm:mt-6 text-md sm:text-lg sm:leading-snug dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam et, commodi odio ratione possimus natus temporibus hic
                  
                </p>
                <div className="flex items-center justify-center mt-6 sm:mt-10 gap-x-6">
                  <a
                    className="flex flex-row items-center justify-center min-w-[130px] rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-teal-500 text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] hover:text-gray-200 dark:bg-white dark:text-black dark:hover:text-gray-700 px-8"
                    href=""
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2  top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#54D6BB"></stop>
                  <stop offset="1" stopColor="#54D6BB"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
