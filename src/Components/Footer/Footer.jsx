import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Tag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#59A5D8] text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <section className="text-center md:text-left">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-primary">
              <Tag className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold bg-gradient-primary  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Discount PRO
              </h3>
              <p className="text-xs text-muted-foreground">
                Save More, Spend Less
              </p>
            </div>
          </div>
          <p className="text-sm mt-2">
            Your ultimate destination for finding the best <br /> deals,
            discounts, and promo codes online.
          </p>
        </section>

        <nav className="text-center">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2">
            <li>
              <a href="/about" className="link link-hover text-sm">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="link link-hover text-sm">
                Contact
              </a>
            </li>
            <li>
              <a href="/careers" className="link link-hover text-sm">
                Careers
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="link link-hover text-sm">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center md:text-right">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-[#E1306C] text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-white hover:text-[#0e76a8] text-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4267B2] text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1DA1F2] text-lg"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-4" />

      <aside>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Discount Pro
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
