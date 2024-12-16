"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Slideshow() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        effect="fade"
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={true} // Navigation enabled
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
          <video
              src="/video.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h1 className="text-white font-bold mb-6 w-[50%] text-center">
                THE BEST LUXURY HOTEL IN COLOSSEUM
              </h1>
              <button className="bg-themecolor-themebrown text-white px-6 py-3 rounded hover:bg-opacity-90 transition duration-300">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
          <video
              src="/video1.mp4" // Replace with your video path
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h1 className="text-white font-bold mb-6 w-[50%] text-center">
                ENJOY YOUR STAY
              </h1>
              <button className="bg-themecolor-themebrown text-white px-6 py-3 rounded hover:bg-opacity-90 transition duration-300">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Fix Navigation Buttons */}
      <style jsx global>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #b88b58 !important; /* Arrow color */
          width: 60px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.9); /* White circle background */
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50; /* Ensures arrows appear above all content */
          transition: all 0.3s ease;
        }

        .swiper-button-prev {
          left: 20px; /* Adjust arrow position */
        }

        .swiper-button-next {
          right: 20px; /* Adjust arrow position */
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 20px; /* Arrow icon size */
          color: #333;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background-color: #b88b58;
          color: white !important;
        }
      `}</style>
    </div>
  );
}
