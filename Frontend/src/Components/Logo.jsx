import React from "react";

export default function Logo() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto rounded-xl ">
        {/* Section Heading */}
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0">
        <div className="text-center mt-8 md:mt-12 lg:mt-24 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Trusted By</h2>
      </div>
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] mt-4 md:mt-8 lg:mt-12">
            <div className="flex overflow-hidden space-x-16 group">
              <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                {/* Logo Images */}
                <img
                  loading="lazy"
                  src="https://tse1.mm.bing.net/th?id=OIP.BNrlfslw6KXfoHaiEYNzIQAAAA&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 1"
                />
                <img
                  loading="lazy"
                  src="https://tse1.mm.bing.net/th?id=OIP.u5ByHjRw3ii3U67tL6KodAHaBt&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 2"
                />
                <img
                  loading="lazy"
                  src="https://www.nabdelhi.in/static/media/nabdelhi-logo.add6d3f951156f1c696b.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="NAB Delhi"
                />
                <img
                  loading="lazy"
                  src="https://tse3.mm.bing.net/th?id=OIP.t9erZF1Ua1nn6HnG5gyjWAHaE6&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 3"
                />
                <img
                  loading="lazy"
                  src="https://ngofeed.com/wp-content/uploads/2022/10/CEHRO-NGO-Success-Story-about-how-they-start-one-step-toward-making-a-better-world--768x448.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="CEHRO NGO"
                />
                <img
                  loading="lazy"
                  src="https://www.pikpng.com/pngl/b/585-5852469_josh-talks-logo-png-clipart.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Josh Talks"
                />
              </div>
              <div
                className="flex space-x-16 animate-loop-scroll group-hover:paused"
                aria-hidden="true"
              >
                {/* Duplicate Logo Images for Looping Effect */}
                <img
                  loading="lazy"
                  src="https://tse1.mm.bing.net/th?id=OIP.BNrlfslw6KXfoHaiEYNzIQAAAA&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 1"
                />
                <img
                  loading="lazy"
                  src="https://tse1.mm.bing.net/th?id=OIP.u5ByHjRw3ii3U67tL6KodAHaBt&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 2"
                />
                <img
                  loading="lazy"
                  src="https://www.nabdelhi.in/static/media/nabdelhi-logo.add6d3f951156f1c696b.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="NAB Delhi"
                />
                <img
                  loading="lazy"
                  src="https://tse3.mm.bing.net/th?id=OIP.t9erZF1Ua1nn6HnG5gyjWAHaE6&pid=Api&P=0&h=180"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Logo 3"
                />
                <img
                  loading="lazy"
                  src="https://ngofeed.com/wp-content/uploads/2022/10/CEHRO-NGO-Success-Story-about-how-they-start-one-step-toward-making-a-better-world--768x448.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="CEHRO NGO"
                />
                <img
                  loading="lazy"
                  src="https://www.pikpng.com/pngl/b/585-5852469_josh-talks-logo-png-clipart.png"
                  className="max-w-none h-24 w-auto object-contain sm:h-28 md:h-32 lg:h-36"
                  alt="Josh Talks"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
