import React from "react";

export default function Logo() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto  md:rounded-xl ">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 ">
          <div class="w-full inline-flex flex-nowrap">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
              <li>
                <img src="./facebook.svg" alt="Facebook" />
              </li>
              <li>
                <img src="./disney.svg" alt="Disney" />
              </li>
              <li>
                <img src="./airbnb.svg" alt="Airbnb" />
              </li>
              <li>
                <img src="./apple.svg" alt="Apple" />
              </li>
              <li>
                <img src="./spark.svg" alt="Spark" />
              </li>
              <li>
                <img src="./samsung.svg" alt="Samsung" />
              </li>
              <li>
                <img src="./quora.svg" alt="Quora" />
              </li>
              <li>
                <img src="./sass.svg" alt="Sass" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
