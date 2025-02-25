import React from "react";
import headphone4 from "../../assets/headphone4.png"
import {delay, motion} from 'framer-motion'
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";


const Banner = () => {
  return (
    <>
    <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
            {/**Banner image */}
            <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{  once: false, amount: 0.1  }}  // Animation triggers only once when the image enters the viewport
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeInOut"
              }}
              src={headphone4}
              alt="Headphones"
              className="w-[300px] md:w-[400px] mx-auto"
            />
          </div>

            {/**Banner text info */}
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                  <motion.h1 
                  variants={fadeUp(0.7)}
                  initial="hidden"
                  whileInView="show"
                  className="text-3xl lg:text-4xl font-semibold font-poppins">
                    The latest Headphones with latest technology</motion.h1>
                  <motion.p
                  variants={fadeUp(0.9)}
                  initial="hidden"
                  whileInView="show">Our newest headphones incorporate the latest advancements in audio technology to enhance your listening experience. Designed for music enthusiasts, these models offer superior sound quality and seamless connectivity. With features like noise cancellation and adaptive sound control, they ensure an immersive experience tailored to your preferences.</motion.p>
                  <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale:5,
                  }

                  }
                  >
                  <motion.button 
                  variants={fadeUp(1.0)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white">Shop Now</motion.button>
                  </UpdateFollower>
                  
              </div>
            </div>
        </div>
    </section>
  </>
  )
};

export default Banner;
