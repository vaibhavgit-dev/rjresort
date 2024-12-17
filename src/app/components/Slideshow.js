"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Slideshow() {
  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        effect="fade"
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation={true} // Navigation enabled
        modules={[Navigation, Autoplay, EffectFade]}
        className="w-full h-[560px]"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
          <video
              src="/video.mp4"
              className="absolute top-0 left-0 w-full h-[560px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h1 className="text-white font-bold mb-6 w-[80%] text-center text-4xl">
                The Best Luxury Hotel In Darjeeling
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
              className="absolute top-0 left-0 w-full h-[600px] object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30">
              <h1 className="text-white font-bold mb-6 w-[80%] text-center text-4xl">
                Enjoy Your Stay
              </h1>
              <button className="bg-themecolor-themebrown text-white px-6 py-3 rounded hover:bg-opacity-90 transition duration-300">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Fix Navigation Buttons */}
      
    </div>
  );
}
