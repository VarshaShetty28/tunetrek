import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg"
import Blogs2 from "../../assets/blogs/blog2.jpg"
import Blogs3 from "../../assets/blogs/blog3.jpg"
import Blogs4 from "../../assets/blogs/blog4.jpg"
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";
import { desc, img, link, title } from "framer-motion/client";
import { data } from "autoprefixer";
const  BlogsData=[
  {
     id : 1,
     desc: "Discover the importance of sound quality in headphones and how it affects your listening experience. A great audio experience can elevate your enjoyment of musicalike.",
     title:"Exploring Sound Quality ",
     link: "#",
     img: Blogs1
    },
    {
      id : 2,
      desc: "Selecting the perfect headphones can be a daunting task, with various styles and features to consider. Whether you prefer over-ear,or on-ear,find what suits you",
      title:"Choosing the Right Headphones ",
      link: "#",
      img: Blogs2
     },
     {
      id : 3,
      desc: "Proper maintenance can extend the life of your headphones. Learn effective tips for cleaning and storing your headphones to keep them performing at their best.",
      title:"Caring for Your Headphones ",
      link: "#",
      img: Blogs3
     },
     {
      id : 4,
      desc: "Stay updated with the latest trends in headphone technology, including noise cancellation,wireless features etc. These advancements can help you make  choices.",
      title:"Trends in Headphone Technology ",
      link: "#",
      img: Blogs4
     },
]

const Blogs = () => {
  return ( <>
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {BlogsData.map((data)=>{
            return(
              <>
              <UpdateFollower
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,

              }}>
                  <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] w-full mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                    <img src={data.img} alt="" />
                    <div className="space-y-2">
                      <h1 className="text-xl font-bold line-clamp-2">
                        {data.title}
                      </h1>
                      <p>{data.desc}</p>
                    </div>
                  </div>
              </UpdateFollower>
             
              </>
            );
          })}
        </div>
      </div>
    </section>
  </>
  )
};

export default Blogs;
