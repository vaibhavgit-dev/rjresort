"use client"
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Amenities() {
  // Hook for detecting when the section comes into view
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the section is visible
    triggerOnce: true, // Trigger animation only once
  });

  // Variants for the fade-in animation
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and slightly below
    visible: {
      opacity: 1,
      y: 0, // Move to its final position
      transition: { duration: 1, ease: "easeOut" }, // Smooth transition
    },
  };

  return (
    <section className="w-full mt-4 mb-14" ref={ref}>
      {/* Title and Description */}
      <motion.div
        className="w-[50%] mx-auto text-center mb-14"
        variants={fadeInVariant}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="mb-3 text-4xl text-themecolor-themebrown relative">
          Amenities
          <motion.span
            className="block mx-auto mt-3 w-32 h-0.5 bg-themecolor-themebrown"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.span>
        </h2>
        <p className="mt-8 mb-3 text-md text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </motion.div>

      {/* Amenities Grid */}
      <motion.div
        className="grid grid-cols-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2, // Delay between each child animation
            },
          },
        }}
      >
        {/* First Main Column */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          variants={fadeInVariant}
        >
          <div className="flex items-center">
            <div className="w-1/2">
              <motion.img
                className="w-full object-cover h-[300px]"
                src="/images/wedding-events.jpeg"
                alt="Salon"
                variants={fadeInVariant}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="w-1/2 p-8 text-center pl-4">
              <h2 className="text-xl font-bold text-[#b6905b] mb-2">Wedding Events</h2>
              <p className="text-[16px] text-gray-700">
                From flowers to food, stationery, photographer and everything
                in between, our dedicated wedding coordinators will ensure that
                your plans run smoothly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Second Main Column */}
        <motion.div
          className="col-span-12 lg:col-span-6"
          variants={fadeInVariant}
        >
          <div className="flex items-center">
            <div className="w-1/2 p-8 text-center pl-4">
              <h2 className="text-xl font-bold text-[#b6905b] mb-2">
                Spa & Wellness
              </h2>
              <p className="text-[16px] text-gray-700">
                Welcome to The Spa, where tranquility and architectural elegance
                unite.
              </p>
            </div>
            <div className="w-1/2">
              <motion.img
                className="w-full h-[300px] object-cover"
                src="/images/spawellness.webp"
                alt="Spa & Wellness"
                variants={fadeInVariant}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Amenities;
