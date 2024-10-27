import React from "react";

export default function Card() {
  return (
    <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto   rounded-xl">
      {/* Section Heading */}
      <div className="text-center mt-8 md:mt-12 lg:mt-24 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">What You'll Learn</h2>
      </div>

      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0 px-4">
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 mt-6 lg:mt-12">
          {/* First Card */}
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 lg:pt-[10rem] pt-[5rem] w-full lg:w-1/3 transition duration-300 hover:scale-105 hover:brightness-90">
            <img
              src="https://media.istockphoto.com/id/1280554857/photo/sweating-nervous-speaker-is-afraid-of-public-speech-microphone-in-front.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZLwNdC_SDAfG6TE6EHD_8A8_bfZL5TKrKijLksvRGys="
              alt="Fear of Being Judged"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70"></div>
            <span className="z-10 mt-3 text-3xl md:text-4xl font-bold text-orange-400">
              #1
            </span>
            <h3 className="z-10 mt-3 text-3xl md:text-4xl font-bold text-white">
              Strategies to <span className="text-orange-400">Overcome</span> Fear of Being Judged
            </h3>
          </div>

          {/* Second Card */}
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 lg:pt-[10rem] pt-[5rem] w-full lg:w-1/3 transition duration-300 hover:scale-105 hover:brightness-90">
            <img
              src="https://plus.unsplash.com/premium_photo-1706005684579-d3e90a51d839?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHB1YmxpYyUyMHNwZWFraW5nfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Proven Frameworks"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70"></div>
            <span className="z-10 mt-3 text-3xl md:text-4xl font-bold text-orange-400">
              #2
            </span>
            <h3 className="z-10 mt-3 text-3xl md:text-4xl font-bold text-white">
              Proven <span className="text-orange-400">Frameworks</span> to Stop Sounding Boring
            </h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-20 mt-6 lg:mt-12">
          {/* Third Card */}
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 lg:pt-[10rem] pt-[5rem] w-full lg:w-1/3 transition duration-300 hover:scale-105 hover:brightness-90">
            <img
              src="https://cdn.pixabay.com/photo/2018/10/23/10/09/video-recording-3767454_1280.jpg"
              alt="Sound Confident"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70"></div>
            <span className="z-10 mt-3 text-3xl md:text-4xl font-bold text-orange-400">
              #3
            </span>
            <h3 className="z-10 mt-3 text-3xl md:text-4xl font-bold text-white">
              How to Sound <span className="text-orange-400">Confident</span> Without Saying a Word
            </h3>
          </div>

          {/* Fourth Card */}
          <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 lg:pt-[10rem] pt-[5rem] w-full lg:w-1/3 transition duration-300 hover:scale-105 hover:brightness-90">
            <img
              src="https://media.istockphoto.com/id/1783744325/photo/black-businessman-talking-to-large-group-of-entrepreneurs-during-an-education-event-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=QfGCudm6hUySX-2XtOb8nL1XmN3oPYJFm636zQnHCgA="
              alt="Evoke Emotions"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/70"></div>
            <span className="z-10 mt-3 text-3xl md:text-4xl font-bold text-orange-400">
              #4
            </span>
            <h3 className="z-10 mt-3 text-3xl md:text-4xl font-bold text-white">
              How to <span className="text-orange-400">Evoke</span> Emotions with Your Words and Inspire Action
            </h3>
          </div>
        </div>

        {/* Register Button */}
        <div className="flex items-center justify-center lg:m-10 m-5">
          <a href="https://coachsushantsinghal.com/PaymentPage" target="_blank" rel="noopener noreferrer">
            <button className=" animate-linkglow h-12 md:h-14 lg:h-16 px-6 py-2 md:px-8 lg:px-10 rounded-full uppercase bg-orange-500 text-white text-sm md:text-lg lg:text-xl font-semibold leading-5 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300 ease-in-out">
              Register Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
