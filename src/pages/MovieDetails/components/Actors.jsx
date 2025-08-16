import React from "react";
import Actor from "./Actor.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Actors = ({ actors }) => {
  return (
    <div>
      <section className={"flex flex-col gap-4"}>
        <div className={"flex justify-between"}>
          <h3 className={"text-3xl font-bold"}>Actors</h3>
        </div>
        <div className={"relative cursor-grab"}>
          {actors.length && (
            <Swiper
              spaceBetween={50}
              slidesPerView={7}
              loop
              modules={[Autoplay]}
              autoplay={{
                delay: 3000, // 3 seconds per slide
              }}
              breakpoints={{
                320: {
                  // small phones
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  // large phones
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                768: {
                  // tablets
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  // small laptops
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
                1280: {
                  // desktops
                  slidesPerView: 6,
                  spaceBetween: 25,
                },
                1536: {
                  // large desktops
                  slidesPerView: 7,
                  spaceBetween: 30,
                },
              }}
            >
              {actors.map((actor, index) => (
                <SwiperSlide key={index}>
                  <Actor actor={actor} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div
            className={
              "to-dark from-dark/0 via-dark/0 pointer-events-none absolute inset-0 z-2 bg-gradient-to-r via-80%"
            }
          ></div>
          <div
            className={
              "to-dark from-dark/0 via-dark/0 pointer-events-none absolute inset-0 z-2 bg-gradient-to-l via-80%"
            }
          ></div>
        </div>
      </section>
    </div>
  );
};

export default Actors;
