import React from "react";

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-t border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center lg:px-0">
          <section className="bg-white bg-gradient-to-r from-[#0A192F] via-[#0A192F] to-teal-800">
            <div className="flex justify-center min-h-screen">
              <div
                className="hidden bg-cover lg:block lg:w-2/5"
                style={{
                  backgroundImage:
                    "url('https://coachsushantsinghal.com/static/media/Banner-2.4d3e1b9bffbee1122024.jpeg')",
                }}
              ></div>

              <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                  <h2 className="mt-4 text-xl font-medium text-gray-100 dark:text-gray-400">
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
                      Coached Educators, Marketing Profesionals, HR
                      Professionals, Author's, Consultants, Budding Trainers,
                      students of top H Schools, etc.
                    </li>
                    <li>
                      Delivered at Ramjas College (DU), Jesus & Marry College
                      (DU) , National Association for the Blind, Toastmasters
                      International , etc.
                    </li>
                    <li>
                    Founder of Confident Orators (Public Speaking Mastery Course) & Empower You (1:1 Coaching Program)

                    </li>
                  </ul>

                  <h2 className="mt-6 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Education
                  </h2>
                  <ul className="mt-4 space-y-2 text-gray-300 dark:text-gray-400 list-disc list-inside">
                    <li>
                    MBA in HR.

                    </li>
                    <li>
                    Internationally Certified NLP Practitioner by American Board of Neuro Linguistic Programming.

                    </li>
                  </ul>

                  <h2 className="mt-6 text-xl font-medium text-gray-100 dark:text-gray-300">
                    Achievements
                  </h2>
                  <ul className="mt-4 space-y-2 text-gray-300 dark:text-gray-400 list-disc list-inside">
                    <li>
                    Awarded as Competent Communicator & Competent Leader by Toastmasters International.

                    </li>
                    <li>
                    Winner of Division Level  International Speech Contest, 2022 by Toastmasters International.
                    </li>
                    <li>Top Public Speaking & Top Presentation Skills Voice badge by LinkedIn.</li>
                    <li>
                    Top Performer at EduRead Public Speaking Training Programme.
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
