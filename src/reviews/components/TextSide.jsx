import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import ReviewsComponent from "./ReviewsComponent";

import { customerReviews } from "../utils/customerReviews";

import classes from "./TextSide.module.css";
import "swiper/css";
import "swiper/css/navigation";

const TextSide = () => {
  return (
    <div className={classes["box-wrapper"]}>
      <h3 className={classes["header"]}>What Our Customers Says</h3>
      <p className={classes["description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
        diam. Lectus elit, nulla elementum fringilla at.
      </p>
      <div className={classes["customer-review"]}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={classes["swiper-wrapper"]}
        >
          {customerReviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <ReviewsComponent review={review} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TextSide;
