"use client"
import React from "react";
import { motion } from "framer-motion";

function Rjdarjeeling() {
  return (
    <>
      <section className="container mx-auto section-padding">
        <div className="grid grid-cols-12 px-5 lg:px-10 gap-6">
          <div className="col-span-12 lg:col-span-6 flex items-center">
            <motion.div
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-3 text-4xl text-themecolor-themebrown font-bold">
                RJ Resort, Darjeeling
              </h2>
              <p className="mb-3 text-md text-black font-medium mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="text-md text-white hover:text-themecolor-darkgreen bg-black px-8 py-2 mt-6">
                Read More
              </button>
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg 2xl:max-w-2xl">
              <motion.img
                className="w-full rounded-lg shadow-md"
                src="/images/rjresort.jpg"
                alt=""
                initial={{ opacity: 0.5, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.img
                className="absolute bottom-[-20px] right-[-20px] w-2/5 rounded-lg border-2 border-themecolor-themebrown shadow-lg"
                src="/images/room-darjeeling.jpg"
                alt=""
                initial={{ opacity: 0.5, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-50 w-full section-padding">
        <div className="container mx-auto grid grid-cols-12 px-5 lg:px-10 gap-6">
          <div className="col-span-12 lg:col-span-6 order-2 md:order-1 flex justify-start">
            <div className="relative w-full max-w-lg 2xl:max-w-2xl">
              <motion.img
                className="w-full rounded-lg shadow-md"
                src="/images/aurom.jpg"
                alt=""
                initial={{ opacity: 0.5, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <motion.img
                className="absolute bottom-[-20px] right-[-20px] w-2/5 rounded-lg border-2 border-themecolor-themebrown shadow-lg"
                src="/images/aurom1.jpeg"
                alt=""
                initial={{ opacity: 0.5, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0.5, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-3 text-4xl text-themecolor-themebrown">
                Aurom, Siliguri
              </h2>
              <p className="mb-3 text-md text-black mt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button className="text-md text-white hover:text-themecolor-darkgreen bg-black px-8 py-2 mt-6">
                Read More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto section-padding">
        <div className="grid grid-cols-12 px-5 lg:px-10 gap-6">
          <div className="col-span-12 text-center">
            <div className="text-center">
              <motion.img
                className="w-20 mx-auto"
                src="/images/rjiconlogo.png"
                alt=""
                initial={{ opacity: 0.5, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="mb-3 text-4xl text-themecolor-themebrown">
                RJ Resort, Darjeeling
              </h2>
              <p className="w-[75%] mx-auto mb-3 text-md text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Rjdarjeeling;
