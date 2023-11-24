import React from "react";

// import { ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
const FooterDesktop = () => {
  return (
    <>
      <footer class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                MENU
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a
                    href="/"
                    className="hover:text-white"
                    class="text-gray-400 hover:text-white"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white"
                    class="text-gray-400 hover:text-white"
                  >
                    A propos
                  </a>
                </li>
                <li>
                  <a
                    href="/training"
                    className="hover:text-white"
                    class="text-gray-400 hover:text-white"
                  >
                    training
                  </a>
                </li>
                <li>
                  <a
                    href="/abonnement"
                    className="hover:text-white"
                    class="text-gray-400 hover:text-white"
                  >
                    Abonnement
                  </a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                TRAINING
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-400 hover:text-white"> free</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Realax</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Sportif</a>
                </li>
                <li>
                  <a class="text-gray-400 hover:text-white">Expert</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/2 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
                ADDRESS
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a href="Adress:" className="text-gray-400 hover:text-white">
                    77100
                    <br />
                    Meaux, France
                    <br />
                    30 Bd du Chevalier Bayard
                  </a>
                </li>
                <li>
                  <a href="Tel" className="text-gray-400 hover:text-white">
                    01 23 45 67 89
                  </a>
                </li>
              </nav>
            </div>
          </div>
          <div class="lg:w-24 md:w-1/2 w-full px-4 items-center">
            {/* <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">
              RESEAUX
            </h2> */}
            <a class="text-gray-400 ">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01">
                  {" "}
                </path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDesktop;
