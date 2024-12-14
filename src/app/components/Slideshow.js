"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Slideshow() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            src="/video.mp4"  // Replace with your actual video URL
            alt="Slide 1"
            className="w-full h-auto"
            controls
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="https://cdn.pixabay.com/vimeo/987654321/yourvideo.mp4"  // Replace with another video URL
            alt="Slide 2"
            className="w-full h-auto"
            controls
            loop
            muted
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
