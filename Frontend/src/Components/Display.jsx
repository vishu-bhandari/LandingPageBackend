import React from "react";

export default function Display() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-t border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0">
          <div className="">
            {/* Full width black background container */}
            <div className="h-auto md:pb-14 pb-6 bg-gradient-to-r from-[#0A192F] to-teal-600">
              <div className="mx-auto max-w-7xl pt-12 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Text and Heading Section */}
                  <div className="px-4 sm:px-6 md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <a
                          href="https://coachsushantsinghal.com/PaymentPage"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="animate-linkglow rounded-full uppercase bg-orange-500 px-3 py-1 text-xs sm:text-sm font-semibold leading-5 text-white">
                            Enroll Now
                          </span>
                        </a>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white">
                          How to Speak with Confidence and Create
                          <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
                            Impact with Words
                          </span>
                          in Any Situation
                        </h1>
                        <div>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white underline sm:mt-5 font-semibold">
                            Coach Sushant Singhal
                          </p>
                          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300">
                            A seasoned public speaking mentor helping people
                            unlock their communication potential
                          </p>
                        </div>

                        <div class=" mt-5 grid grid-cols-2 sm:grid-cols-2 gap-4 justify-center ">
                          {[
                            { label: "When", value: "Sunday, 10th November" },
                            { label: "Where", value: "Zoom" },
                            { label: "Timings", value: "10 - 12:00 PM" },
                            { label: "Language", value: "English" },
                          ].map((detail, index) => (
                            <div
                              key={index}
                              class="  shadow-orange-400 shadow-md max-w-xs mx-auto w-full rounded-lg bg-white md:p-4 p-2 text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                            >
                              <div class="my-1">
                                <h2 class="md:text-2xl text-lg font-semibold text-orange-600">
                                  {detail.label}
                                </h2>
                              </div>
                              <div>
                                <p class="mt-1 font-sans text-base font-medium text-primary">
                                  {detail.value}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Section */}
                  <div className=" items-center w-full lg:col-span-6">
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
                    {/* Event Details Section */}
                    {/* <div className="  mt-8 lg:col-span-12 grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
                      {[
                        { label: "When", value: "Sunday, 10th November" },
                        { label: "Where", value: "Zoom" },
                        { label: "Timings", value: "10 - 12:00 PM" },
                        { label: "Language", value: "English" },
                      ].map((detail, index) => (
                        <div
                          key={index}
                          className=" shadow-md border border-gray-100 md:p-4 p-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                        >
                          <p className="text-white font-normal underline">
                            {detail.label}
                          </p>
                          <p className="text-gray-200 font-bold">
                            {detail.value}
                          </p>
                        </div>
                      ))}
                    </div> */}

                    <div className=" ">
                      <div className="w-1/5  m-auto border-t mt-5 mb-5 border-2 border-gray-200"></div>

                      {/* Review Section */}
                      <div className="flex  justify-center flex-col md:flex-row md:space-y-0 md:space-x-4 space-x-0 space-y-0 items-center md:items-center text-white">
                        {/* <div className="items-center space-x-2 md:flex hidden">
                          <div className="flex -space-x-1">
                            {["29", "90", "75", "5"].map((id) => (
                              <img
                                key={id}
                                className="h-6 w-6 max-w-none rounded-full ring-2 ring-white"
                                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                                alt={`Reviewer ${id}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-medium leading-5">
                            +15
                          </span>
                        </div> */}

                        {/* <div className="h-4 border-l border-gray-700 hidden md:block md:w-4"></div> */}

                       
                        {/* <div className="items-center md:flex hidden">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 fill-current text-yellow-500"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          ))}
                        </div> */}

                        {/* <div className="h-4 border-l border-gray-700 hidden md:block md:w-4"></div> */}

                        
                        <a
                          href="https://coachsushantsinghal.com/PaymentPage"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="  animate-linkglow w-28 sm:w-36 md:w-48 lg:w-60 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full uppercase bg-orange-500 text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-white">
                            Register Now
                          </button>
                        </a>
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
