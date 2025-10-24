import React from "react";
import logo from "../assets/toyicone.jpg"; 

function Footer() {
  return (
    <footer className="bg-black text-accent">
      <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <img src={logo} alt="Toy Galaxy Logo" className="w-12 mb-3 rounded-full" />
          <p className="text-sm textarea-xl">
            <strong>Toy Galaxy</strong> — where fun meets learning! Discover a
            world of creativity, joy, and imagination with our wide collection
            of toys for every child.
          </p>
        </div>
        <div>
          <h6 className="footer-title font-semibold text-lg mb-3 text-white">
            Services
          </h6>
          <a className="block link link-hover">Branding</a>
          <a className="block link link-hover">Design</a>
          <a className="block link link-hover">Marketing</a>
          <a className="block link link-hover">Advertisement</a>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title font-semibold text-lg mb-3 text-white">
            Company
          </h6>
          <a className="block link link-hover">About Us</a>
          <a className="block link link-hover">Contact</a>
          <a className="block link link-hover">Jobs</a>
          <a className="block link link-hover">Press Kit</a>
        </div>

        {/* Social */}
        <div>
          <h6 className="footer-title font-semibold text-lg mb-3 text-white">
            Follow Us
          </h6>
          <div className="flex gap-5">
            <a className="hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current text-gray-500"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.868 9.868 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.73 0-4.942 2.212-4.942 4.942 0 .39.045.765.128 1.124A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0-.667 2.482c0 1.71.87 3.214 2.188 4.099a4.903 4.903 0 0 1-2.24-.616v.062c0 2.388 1.698 4.377 3.95 4.83a4.936 4.936 0 0 1-2.229.084 4.935 4.935 0 0 0 4.604 3.419A9.869 9.869 0 0 1 0 19.54 13.955 13.955 0 0 0 7.548 21.5c9.056 0 14.01-7.506 14.01-14.01 0-.213-.004-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </a>

            <a className="hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current text-red-500"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>

            <a className="hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                className="fill-current text-blue-700"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-5 border-t border-gray-300 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Toy House</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
