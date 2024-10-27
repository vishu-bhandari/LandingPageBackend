import React from "react";

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-t border-gray-100 md:rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1  items-center lg:px-0">
          <section className="bg-white bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
            <div className="flex flex-col lg:flex-row justify-center min-h-screen">
              <div
                className="bg-cover bg-no-repeat  w-full lg:w-2/5 h-96    lg:h-auto"
                style={{
                  backgroundImage:
                    "url('https://i.postimg.cc/TYkVTyLg/Untitled-1.png')",
                }}
              ></div>

              <div className="flex items-center w-full max-w-3xl md:p-8 p-4 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                  <h2 className="mt-4 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Introduction
                  </h2>
                  <p className="mt-2 text-gray-300 dark:text-gray-400">
                    Public Speaking & Communication Coach - Sushant Singhal.
                  </p>
                  <p className="mt-2 text-gray-300 dark:text-gray-400">
                    Helping Aspiring Speakers, Students & Professionals Achieve
                    Unstoppable Confidence.
                  </p>

                  <h2 className="mt-6 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Experience
                  </h2>
                  <ul className="mt-4 space-y-2 text-gray-300 dark:text-gray-400 list-disc list-inside">
                    <li>
                      7+ years of experience as a Public Speaker, Coach &
                      Entrepreneur.
                    </li>
                    <li>
                      500+ Lives Transformed through 250+ Educational Sessions.
                    </li>
                    <li>
                    Trained 500+ Students, Educators & Working Professionals 

                    </li>
                    <li>
                    Delivered at Platforms like Josh Talks 

                    </li>
                   
                  </ul>

                  <h2 className="mt-6 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Education
                  </h2>
                  <ul className="mt-4 space-y-2 text-gray-300 dark:text-gray-400 list-disc list-inside">
                    <li>MBA in HR.</li>
                    <li>
                    American Board Certified Neuro Linguistic Programming ( NLP)  Practitioner
                    </li>
                  </ul>

                  <h2 className="mt-6 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Achievements
                  </h2>
                  <ul className="mt-4 space-y-2 text-gray-300 dark:text-gray-400 list-disc list-inside">
                    <li>
                      Awarded as Competent Communicator & Competent Leader by
                      Toastmasters International.
                    </li>
                    <li>
                      Winner of Division Level International Speech Contest,
                      2022 by Toastmasters International.
                    </li>
                    <li>
                      Top Public Speaking & Top Presentation Skills Voice badge
                      by LinkedIn.
                    </li>
                    <li>
                      Top Performer at EduRead Public Speaking Training
                      Programme.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
