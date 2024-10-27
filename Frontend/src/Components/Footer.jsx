import React from "react";

export default function Footer() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6">
          <footer className="flex flex-col space-y-10 justify-center p-6 lg:p-10  md:mb-10 mb-14">
            <nav className="flex justify-center flex-wrap gap-4 lg:gap-6 text-gray-500 font-medium">
              <a
                className="hover:text-gray-900"
                href="https://coachsushantsinghal.com/LegalTerms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a
                className="hover:text-gray-900"
                href="https://coachsushantsinghal.com/LegalTerms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Refund
              </a>
              <a
                className="hover:text-gray-900"
                href="https://coachsushantsinghal.com/LegalTerms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms Of Use
              </a>
            </nav>

            <div className="flex justify-center space-x-3 lg:space-x-5">
              <a
                href="https://www.youtube.com/@sushanttalks1049"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/youtube.png"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://www.facebook.com/p/Sushant-Talks-100064134663217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/sushant-singhal-3355a1134/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.instagram.com/coach_sushantsinghal/?igsh=cjc2b2poOXVycHl4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/twitter.png"
                  alt="Twitter"
                />
              </a> */}
            </div>

            <p className="text-center text-gray-500 font-medium hover:text-gray-900 ">
              &copy; 2024 Company Ltd. All rights reserved. <br />
              <a href="mailto:sushant.publicspeaker@gmail.com">
                Email: sushant.publicspeaker@gmail.com
              </a>
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
