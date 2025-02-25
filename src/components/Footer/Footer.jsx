import React from "react";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Company details */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6 text-center sm:text-left" // Center text on small screens
            >
              <h1 className="text-3xl font-bold uppercase ">TuneTrek</h1>
              <p className="text-sm max-w-[300px] mx-auto sm:mx-0 sm:text-left mt-1">At TuneTrek, we specialize in delivering high-quality headphones designed for an immersive audio experience. Our commitment to innovation ensures that music lovers enjoy superior sound and comfort, no matter where their journeys take them.</p>
              <div className="flex flex-col items-center gap-2 sm:items-start"> {/* Align to start on larger screens */}
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +1 (123) 456-7890
                </p>
                <p className="flex items-center gap-2">
                  <FaMapLocation /> Mangaluru, Karnataka
                </p>
              </div>
            </motion.div>

            {/* Footer links details */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="flex flex-col items-center justify-center h-full space-y-6 text-center sm:text-left" // Center text on small screens
            >
              <h1 className="text-3xl font-bold mt-2 sm:-mt-20">Quick Links</h1>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </motion.div>

            {/* Social details */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="space-y-6 text-center sm:text-left" // Center text on small screens
            >
              <h1 className="text-3xl font-bold">Follow Us</h1>
              <div className="text-3xl font-bold flex items-center justify-center gap-4 sm:justify-start"> {/* Centered icons, align to start on larger screens */}
                <FaFacebook className="hover:scale-125 duration-300" />
                <FaInstagram className="hover:scale-125 duration-300" />
                <FaTelegram className="hover:scale-125 duration-300" />
                <FaGoogle className="hover:scale-125 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Cards} alt="" className="w-[80%] mx-auto sm:w-full" /> {/* Centered image */}
              </div>
            </motion.div>
          </div>

          {/* Copyright details */}
         {/* Copyright details */}
          <p className="text-white text-center mt-8 border-t-2 pt-8">
                &copy; 2024 Designed by Varsha Shetty. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
