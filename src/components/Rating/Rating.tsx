import React from "react";

export default function Rating(props: { rating: number; numReviews: number; }) {
  const { rating, numReviews } = props;
  return (
    <div className="rating flex items-center mt-3">
      <div className="stars">
        {" "}
        <span className="text-yellow-500	">
          <i
            className={
              rating >= 5
                ? "fa fa-star"
                : rating >= 4.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span className="text-yellow-500	">
          <i
            className={
              rating >= 4
                ? "fa fa-star"
                : rating >= 3.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span className="text-yellow-500	">
          <i
            className={
              rating >= 3
                ? "fa fa-star"
                : rating >= 2.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span className="text-yellow-500	">
          <i
            className={
              rating >= 2
                ? "fa fa-star"
                : rating >= 1.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
        <span className="text-yellow-500	">
          <i
            className={
              rating >= 1
                ? "fa fa-star"
                : rating >= 0.5
                ? "fa fa-star-half-o"
                : "fa fa-star-o"
            }
          ></i>
        </span>
      </div>
      <span className="mr-3 text-xl text-gray-500">{numReviews + "نظر"}</span>
    </div>
  );
}
