"use client";

import "./globals.css";
import "@/app/assets/css/custom.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { IoMdArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Serif:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="theme-wrapper">{children}</div>
        <Footer />

        {/* Scroll to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 px-6 py-2 rounded-full bg-[#c8830c] text-white shadow-md hover:bg-[#c8830c] focus:outline-none"
            aria-label="Scroll to top"
          >
            <IoMdArrowUp />
          </button>
        )}
      </body>
    </html>
  );
}
