import React from 'react';

function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-gray-50 px-5 lg:px-10 pt-5 pb-6 mt-5">
      {/* Logo Section */}
      <div className='grid lg:justify-center text-center mb-10'>
        <a href='#'>
          <img src="/rj_logo.png" alt="logo" className='w-36 lg:text-center' />
          <span className="block mt-3 w-36 h-0.5 bg-themecolor-themebrown"></span>
        </a>
      </div>

      {/* Four Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: About */}
        <div>
          <h4 className="text-gray-800 font-semibold text-base">About RJ Resort</h4>
          <p className="mt-6 text-gray-600 text-sm">RJ Resort is your ultimate getaway destination, offering luxury accommodations, exquisite dining, and unmatched hospitality. Nestled in a serene location, we ensure your stay is both comfortable and memorable.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className='lg:ml-20'>
          <h4 className="text-gray-800 font-semibold text-base">Quick Links</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Career</a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Gallery</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Book Hotel */}
        <div>
          <h4 className="text-gray-800 font-semibold text-base">Book Hotel</h4>
          <ul className="mt-6 space-y-4">
            <li>
              <a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Book RJ Resort</a>
            </li>
            <li>
              <a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Book Aurom</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h4 className="text-gray-800 font-semibold text-base">Contact Info</h4>
          <ul className="mt-6 space-y-4">
            <li className='text-gray-600 text-sm'>Phone: +1-234-567-890</li>
            <li className='text-gray-600 text-sm'>Email: contact@rjresort.com</li>
          </ul>
          <h4 className="mt-6 text-gray-800 font-semibold text-base">Follow Us</h4>
          <ul className="mt-5 flex space-x-5">
            {/* Social Media Icons */}
            <li><a href='#'><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a></li>
            <li><a href='#'><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a></li>
            <li><a href='#'><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a></li>
            <li><a href='#'><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <hr className="mt-10 mb-6 border-gray-300" />
      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="flex gap-3 items-center mb-4 lg:mb-0">
          <li><a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Terms of Service</a></li>
          <li><a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Privacy Policy</a></li>
          <li><a href='#' className='hover:text-gray-800 text-gray-600 text-sm'>Security</a></li>
        </ul>
        <p className='text-gray-600 text-sm md:ml-auto'>RJ Resort Copyright &copy; 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
