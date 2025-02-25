import { div } from "framer-motion/client";
import React from "react";
import headphone1 from "../../assets/headphone.png";
import headphone2 from "../../assets/headphone2.png";
import headphone3 from "../../assets/headphone3.png";
import { FaEnvelope } from "react-icons/fa";
import { data } from "autoprefixer";
import { UpdateFollower } from "react-mouse-follower";
import {AnimatePresence, delay, easeInOut, motion} from "framer-motion"

const fadeUp = (delay) =>{
  return{
    hidden:{
      opacity:0,
      y:100,
      scale: 0.5,
    },
    show: {
        opacity:1,
        y:0,
        scale: 1,
        transition: {
          duration:0.5,
          delay: delay,
          ease: easeInOut,

        },
    },
    exit: {
      opacity:0,
      y:50,
      scale:0.5,
      transition: {
        duration:0.2,
        ease: easeInOut,

      },
    }
  };
};
const headphoneData = [
  {
      id: 1,
      image: headphone1,
      title: "boAt Rockerz 450 Pro",
      description: "The boAt Rockerz 450 Pro is a powerful on-ear wireless headphone featuring Bluetooth V5.0 and an AUX option for wired playback. With a robust 750mAh battery, it offers up to 70 hours of playtime, and its 40mm drivers deliver exceptional sound quality. The ASAP fast charge technology provides 10 hours of playback with just a 10-minute charge.",
      price:"$100",
      modal:"Rockerz 450 Pro",
      bgcolor:" #6e3e3a"
  },
  {
    id: 2,
    image: headphone2,
    title: "Sony WH-1000XM4",
    description: "The Sony WH-1000XM4 is a premium over-ear wireless headphone featuring advanced noise-canceling technology and Bluetooth 5.0 for seamless connectivity. With a 30-hour battery life on a single charge and 40mm drivers for rich audio, it also supports quick charging—providing 5 hours of playback from just a 10-minute charge. Touch-sensitive controls make playback and call management effortless, along with voice assistant support.",
    price:"$200",
    modal:"WH-1000XM4",
    bgcolor:" #638153"
},
{
  id: 3,
  image: headphone3,
  title: "JBL Live 660NC",
  description: "The JBL Live 660NC is a dynamic over-ear wireless headphone that offers active noise cancellation and Bluetooth 5.0 for effortless connectivity. With a powerful 50-hour battery life, it ensures extended listening sessions without interruption. The 40mm drivers deliver immersive sound quality, while the quick charge feature offers 10 hours of playback from just a 5-minute charge.",
  price:"$200",
  modal:"Live 660NC",
  bgcolor:" #51777b"
},
]
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);
  const handleActiveData = (data) =>{
    setActiveData(data);
  }
  return(
    <>
    <section className="bg-brandDark text-white font-varela">
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
            {/**Headphone  info */}
            <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
              <div className="space-y-5 text-center md:text-left">
               <AnimatePresence mode="wait">
               <UpdateFollower
                        mouseOptions={{
                          backgroundColor: "white",
                          zIndex: 9999,
                          followSpeed: 0.5,
                          rotate: -720,
                          scale:10,
                          mixBlendMode: "difference"
                        }}>
                      <motion.h1 key={activeData.id} 
                      variants={fadeUp(0.2)}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="text-3xl lg:text-6xl font-bold font-varela">{activeData.title}</motion.h1>
                  </UpdateFollower>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.p 
                    key={activeData.id} 
                    variants={fadeUp(0.3)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-sm leading-loose text-white/80">{activeData.description}</motion.p>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <UpdateFollower
                        mouseOptions={{
                          backgroundColor: activeData.bgcolor,
                          zIndex: 9999,
                          followSpeed: 0.5,
                          rotate: -720,
                          scale:6,
                          mixBlendMode: "difference",
                          backgroundElement: <div>
                                <img src={activeData.image} />
                            </div>
                            
                          
                        }}>
                <motion.button
                key={activeData.id} 
                variants={fadeUp(0.3)}
                initial="hidden"
                animate="show"
                exit="exit" 
                style={{ backgroundColor: activeData.bgcolor }} 
                 className="px-4 py-2 inline-block font-normal rounded-sm">Buy and Enjoy </motion.button>
                 </UpdateFollower>

                </AnimatePresence>
                 {/**Top Trending Headphones  */}
                 <div className="flex items-center justify-center md:justify-start gap-4 !mt-24">
                    <div className="w-20 h-[1px] bg-white"></div>
                    <p className="uppercase text-sm font-varela">Top Trending Headphones for you </p>
                    <div className="w-20 h-[1px] bg-white"></div>
                 </div>
                 {/**top headphones */}
                 <AnimatePresence mode="wait">
                    <UpdateFollower
                                     mouseOptions={{
                                      backgroundElement: (
                                        <div>
                                          <img 
                                            src={activeData.image} 
                                            alt={activeData.title} 
                                            className="w-10 h-10 rounded-full object-cover" 
                                          />
                                        </div>
                                      ),
                                      zIndex: 999,
                                      followSpeed: 0.5,
                                      rotate: -720,
                                      scale: 6,
                                      mixBlendMode: "difference"
                                    }}
                                  >
                            </UpdateFollower>
                      </AnimatePresence>
                      <div className="grid grid-cols-3 gap-10 ">
                          {headphoneData.map((item) =>{
                              return(
                                <UpdateFollower
                                      mouseOptions={{
                                        backgroundColor: item.bgcolor,
                                        zIndex: 9999,
                                        followSpeed: 0.5,
                                        scale:5,
                                        text: "View Details",
                                        textFontSize: "3px"
                                      }}
                                      >
                                      <div 
                                      key={item.id}
                                      onClick={()=>handleActiveData(item)} className="grid grid-cols-2 gap-7 place-items-center cursor-pointer">
                                        
                                        <div>
                                        <img src={item.image} alt="" className="w-[60px]  h-[60px] "/> {/**added for round appearence of the services */}
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-base font-bold">{item.price}</p>
                                            <p className="text-xs font-normal rext-nowrap">{item.modal}</p>
                                        </div>
                                        
                                      </div>
                                  </UpdateFollower>
                              )
                            })}
                      </div>

              </div>
            </div>

            {/**Hero Img*/}
            <div className="flex flex-col justify-end items-center">
              <AnimatePresence mode="wait">
               <motion.img 
               key={activeData.id}
               initial={{opacity:0,scale: 0.9,y:100}}
               animate={{opacity: 1,scale: 1, y: 0}}
               transition={{duration: 0.4, delay: 0.2, ease: easeInOut}}
               exit={{
                opacity: 0,
                scale: 0.9, 
                y: 100,

                transition: {
                  duration: 0.2,
                },
              }}
               src={activeData.image} alt="" className="w-[300px] md:w-[400px] xl:w-[550px]" />
               </AnimatePresence>
            </div>

            {/**Mail Icon */}
            <div>
              <a href="mailto:tunetrek@gmail.com">{/**this mailid is not exist simply created for the working  */}
                <FaEnvelope className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference"/>
              </a>
            </div>

        </div>
    </section>
  </>
  )
};

export default Hero;
