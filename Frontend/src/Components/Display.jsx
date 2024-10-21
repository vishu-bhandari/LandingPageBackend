import React from 'react';

export default function Display() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-t border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0">
          <div className="">
            {/* Full width black background container */}
            <div className="h-auto lg:pb-48 md:pb-14 pb-6 bg-gradient-to-r from-[#0A192F] to-teal-600">
              <div className="mx-auto max-w-7xl pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Text and Heading Section */}
                  <div className="px-4 sm:px-6 md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <span className="rounded-full uppercase bg-orange-500 px-3 py-1 text-xs sm:text-sm font-semibold leading-5 text-white">
                          Early Access
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                          How to Speak with Confidence and Create
                          <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                            Impact with Words
                          </span>
                          in Any Situation
                        </h1>

                        <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 sm:mt-5">
                          Coach Sushant Singhal <br />
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi eius eos fuga tempore non, id
                          voluptatem vel? Fugiat, molestias nam?
                        </p>
                      </div>

                      <div className="border-t border-gray-700"></div>

                      {/* Review Section */}
                      <div className="flex space-x-4 items-center text-white">
                        <div className="flex items-center space-x-2">
                          <div className="flex -space-x-1">
                            {['29', '90', '75', '5'].map((id) => (
                              <img
                                key={id}
                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                                alt={`Reviewer ${id}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium leading-5">+15</span>
                        </div>

                        <div className="h-4 border-l border-gray-700"></div>

                        {/* Star Rating */}
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-4 w-4 fill-current text-yellow-500" viewBox="0 0 24 24">
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          ))}
                        </div>

                        <div className="h-4 border-l border-gray-700"></div>

                        {/* Product Hunt Link */}
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <button className="w-28 sm:w-36 md:w-48 lg:w-60 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full uppercase bg-orange-500 text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-white">
                            Register Now
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className="flex items-center w-full col-span-6">
                    <div className="px-4 h-64 md:h-80 lg:h-96 w-full max-w-2xl mx-auto">
                      <div className="w-full h-full">
                        <iframe
                          className="w-full h-full rounded-md"
                          frameBorder="0"
                          allowFullScreen
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          src="https://www.youtube.com/embed/nGW9W-rWhjg?si=aV5DaAksz9ov4-7z"
                          title="Coach Sushant Singhal"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}