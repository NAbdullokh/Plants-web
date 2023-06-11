import React from "react";

import classes from "./ReviewsComponent.module.css";

const ReviewsComponent = ({ review }) => {
  return (
    <div className={classes["wrapper"]}>
      <div className={classes["top"]}>
        <img className={classes["user-img"]} src={review.image} alt="user" />
        <div className={classes["user-info"]}>
          <div className={classes["user-fullName"]}>{review.fullName}</div>
          <div className={classes["user-job"]}>{review.job}</div>
        </div>
      </div>
      <div className={classes["bottom"]}>{review.review}</div>
    </div>
  );
};

export default ReviewsComponent;
