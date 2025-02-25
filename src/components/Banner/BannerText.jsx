import React from "react";
import { UpdateFollower } from "react-mouse-follower";

const BannerText = () => {
  return(
    <section className="py-12 text-center">
      <div className="container">
        <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8
        hover:scale-105 duration-500 hover:shadow-2xl">
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "black",
              zIndex: 9999,
              followSpeed: 0.7,
              scale:10,
              mixBlendMode: "screen"
            }}
          >
                      <p className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">Headphones with Great Quality and Affordability</p>
          </UpdateFollower>
        </div>
      </div>
    </section>
  )
};

export default BannerText;
