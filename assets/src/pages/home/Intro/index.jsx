import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-parallax";

const Intro = () => {
  return (
    <>
      <ParallaxProvider>
        {/* a propos */}
        <section class="text-gray-400 bg-zinc-900 pb-2">
          <div
            className=""
            style={{
              backgroundImage: `url("https://static.wixstatic.com/media/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg/v1/fill/w_1903,h_953,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6197f6bd0a9c41788f15876c8dc8e73b~mv2.jpg")`,
              width: "1903",
              height: "auto",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex flex-col items-center p-32">
              <div className=" text-white text-8xl flex flex-col justify-center">
                <h1 className=" w-1/2 flex flex-row justify-center p-20">
                  Le fitness devient ton quotidien
                </h1>
              </div>
              <div className="w-1/5">
                <button class="text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 focus:outline-none hover:bg-teal-600 rounded">
                  C'est Partie
                </button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 -mx-2 m-20">
              <Parallax
                className=" rounded sm:py-24 py-16 sm:px-10 px-6 relative bg-cover "
                bgImage="https://static.wixstatic.com/media/ad420a_d0ac34921aea4f98843f1b6798e5f50f~mv2_d_2339_1993_s_2.jpg/v1/fill/w_930,h_598,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ad420a_d0ac34921aea4f98843f1b6798e5f50f~mv2_d_2339_1993_s_2.jpgttps://dummyimage.com/542x460"
                bgImageAlt="the cat"
                strength={400}
                bgImageSize="100%"
              ></Parallax>
            <div class="px-2 flex flex-row justify-center">
              <div class="flex flex-row w-full rounded sm:py-24 py-16 sm:px-10 px-6 relative justify-center">
                <div class="rounded-lg overflow-hidden w-1/2 flex flex-col justify-center">
                  <h1 className="font-bold text-8xl md:text-5xl text-white p-4">
                    À propos de Base
                  </h1>
                  <p className="p-2">
                    Suspendisse a ipsum vel risus facilisis posuere. Suspendisse
                    potenti. Duis tincidunt mi purus, sed malesuada magna cursus
                    id. <br />
                    Nunc sed suscipit ex. Pellentesque bibendum, erat ac
                    elementum aliquam.
                  </p>
                  <div className="p-4">
                    <button class="text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 focus:outline-none hover:bg-teal-600 rounded">
                      Lire plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* training */}
        <section class="text-gray-400 bg-zinc-900 body-font">
          <div className="flex flex-row justify-center p-5">
            <h1 className="font-bold md:text-5xl text-white">Training</h1>
          </div>
          <div class="container px-5 mx-auto p-10">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3 ">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden  hover:border-teal-500">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image3.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The Catalyzer
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:border-teal-500">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image5.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden hover:border-teal-500">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image13.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden ">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image12.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image1.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      The 400 Blows
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                  <img
                    class="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/image11.jpg"
                    alt="blog"
                  />
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font text-lg font-medium text-white mb-3">
                      Shooting Stars
                    </h1>
                    <p class="leading-relaxed mb-3">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center flex-wrap ">
                      <a class="text-red-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          class="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* motivation */}
        <section>
          <div class="flex flex-col text-center w-full bg-zinc-900 text-white p-10 ">
            <h1 class="sm:text-4xl text-3xl font-bold md:text-5xl text-white p-4 ">
              Rejoins Base et transforme <br /> ton corps et ton esprit
            </h1>
          </div>
          <div className="grid grid-cols-2 h-full w-full">
            <video className="" width="auto" height="auto" autoPlay loop>
              <source
                src="https://video.wixstatic.com/video/ad420a_d36342da247848dbbf81c357052c1673/720p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
            <div className=" flex flex-col justify-center p-28 bg-zinc-900 text-white">
              <h1 class="font-bold text-5xl p-10">comunauté</h1>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis voluptas eaque culpa,
                quod totam accusamus facere quibusdam a reprehenderit quos
                dolores delectus possimus nostrum ab? Fugiat inventore at quidem
                totam!
              </p>
              <div className="p-4">
                <button class=" flex mx-auto  text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-teal-600 rounded">
                  Let's Go
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className=" flex flex-col justify-center p-28 bg-zinc-900 text-white">
              <h1 class="font-bold text-5xl p-10">Motivation</h1>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis voluptas eaque culpa,
                quod totam accusamus facere quibusdam a reprehenderit quos
                dolores delectus possimus nostrum ab? Fugiat inventore at quidem
                totam!
              </p>
              <div className="p-4">
                <button class=" flex mx-auto  text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-teal-600 rounded">
                  Let's Go
                </button>
              </div>
            </div>
            <Parallax
              bgImage="/images/image3.jpg"
              bgImageAlt="the cat"
              strength={400}
              className=""
            ></Parallax>
          </div>
          <div className="grid grid-cols-2">
            <Parallax
              bgImage="/images/image10.jpg"
              bgImageAlt="the cat"
              strength={400}
              bgImageSize="100%"
            ></Parallax>
            <div className="flex flex-col justify-center p-28 bg-zinc-900 text-white">
              <h1 class="font-bold text-5xl p-10">Résultats</h1>
              <p class="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest
                cornhole brunch, slow-carb neutra irony. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Facilis voluptas eaque culpa,
                quod totam accusamus facere quibusdam a reprehenderit quos
                dolores delectus possimus nostrum ab? Fugiat inventore at quidem
                totam!
              </p>
              <div className="p-4">
                <button class=" flex mx-auto  text-white bg-gradient-to-r from-teal-500 to-red-500 border-0 py-2 px-5 focus:outline-none rounded">
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* rejoins-nous */}
        <section>
          <div
            className="bg-cover bg-center flex flex-col justify-center m-6"
            style={{
              backgroundImage: `url("/images/image11.jpg")`,
              width: "",
              height: "300px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div class="text-white body-font flex flex-row justify-center">
              <div class=" px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                  <buttone class="bg-gradient-to-r from-teal-500 to-red-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <spane class="ml-4 flex items-start flex-col leading-none">
                      <spane class="text-xs text-gray-500 mb-1">
                        GET IT ON
                      </spane>
                      <spane class="title-font font-medium">Google Play</spane>
                    </spane>
                  </buttone>
                  <buttone class="bg-gradient-to-r from-teal-500 to-red-500 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="w-6 h-6"
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <spane class="ml-4 flex items-start flex-col leading-none">
                      <spane class="text-xs text-gray-500 mb-1">
                        Download on the
                      </spane>
                      <spane class="title-font font-medium">App Store</spane>
                    </spane>
                  </buttone>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    </>
  );
};

export default Intro;
