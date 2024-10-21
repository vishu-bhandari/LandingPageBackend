import React from "react";

export default function Footer() {
  return (
    <>
      <section className="relative isolate overflow-x-hidden lg:overflow-visible lg:px-0 max-w-8xl m-auto border-gray-100 rounded-xl">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 ">
          <footer className="flex flex-col space-y-10 justify-center m-10">
            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
              <a className="hover:text-gray-900" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-gray-900" href="#">
                Refund
              </a>
              <a className="hover:text-gray-900" href="#">
                Terms Of Use
              </a>
            </nav>

            <div className="flex justify-center space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://messenger.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
                  alt="Messenger"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluent/30/000000/twitter.png"
                  alt="Twitter"
                />
              </a>
            </div>
            <p className="text-center text-gray-500 font-medium hover:text-gray-900">
              &copy; 2024 Company Ltd. All rights reserved. <br />

              <a href="">Email: sushant.publicspeaker@gmail.com</a>
             
            </p>
          </footer>
        </div>
      </section>
    </>
  );
}
