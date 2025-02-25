import React from "react";
import Icon1 from "../../assets/icons/obj1.png"
import Icon2 from "../../assets/icons/obj2.png"
import Icon3 from "../../assets/icons/obj3.png"
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeUp = (delay) =>{
  return{
    hidden:{
      opacity:0,
      y:100,
    },
    show: {
        opacity:1,
        y:0,
        transition: {
          duration:0.5,
          delay: delay,

        },
    },
  };
};
const ServicesData =[
  {
    id:1,
    title: "Security",
    icon: Icon1,
    link:"#",
    desc: "At our headphones store, your security is our utmost priority. We implement industry-standard encryption and secure payment gateways to safeguard your personal and payment information. Our commitment to privacy ensures that your data is never shared with third parties without your consent. Shop with confidence, knowing your security is in expert hands.",
    delay: 0.5,
  },
  {
    id:2,
    title: "Gurantee",
    icon: Icon2,
    link:"#",
    desc: "We proudly stand behind the quality of our headphones, offering a satisfaction guarantee for all customers. If you encounter any issues, our dedicated support team is always ready to assist you. Each product comes with a warranty to provide peace of mind and protection against defects. Enjoy your audio experience, knowing we've got you covered!",
    delay: 0.8,
  },
  {
    id:3,
    title: "Affordability",
    icon: Icon3,
    link:"#",
    desc: "Our headphones are crafted to deliver exceptional value without sacrificing quality. We believe everyone deserves an immersive audio experience, which is why we offer competitive pricing to fit any budget. With a variety of models available, you can easily find the perfect pair to match your needs and preferences.high quality in affordable money",
    delay: 1.1,
  },
];
const Services = () => {
  return <>
  <section className="bg-gray-100 font-poppins py-8">
    <div className="container py-14">
      <motion.h1 
      variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
      className="text-3xl font-bold text-center pb-10">Services</motion.h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {ServicesData.map((data)=>(
        <UpdateFollower
        mouseOptions={
          {
            backgroundColor: "white",
            zIndex: 9999,
            followSpeed: 0.5,
            rotate: -720,
            scale:6,
            mixBlendMode: "darken",
            backgroundElement: <motion.div>
                  <img src={data.icon} />
              </motion.div>           

          }
        }
        >
          <motion.div 
          variants={fadeUp(data.delay)}
          initial="hidden"
          whileInView="show"className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white mt-12">
              <img src={data.icon} alt="" className="w-[100px] mb-4"/>
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-center text-sm text-black/75">{data.desc}</p>
              </div>
          </motion.div>
        </UpdateFollower>
      ))}
    </div>
    </div>
  </section>
  </>
};

export default Services;
