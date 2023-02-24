import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const NavMenSlider = () => {
  return (
    <div className="slider-men-nav">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/15790154_puo_a35592_pri_larg.jpg"
            alt=""
          />
          <a href="/">Filter's</a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/1162/large/18340173_wkb_18b4728_pri_larg.jpg"
            alt=""
          />
          <a href="/">Breaks's</a>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/landing/battery/diehard/HP-Dropdown-Menu-DieHard-Gold-95x95.jpg"
            alt=""
          />
          <a href="/">Batteries</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


