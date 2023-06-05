import React from "react";

const Rating = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <>
      {ratingArray.map((item, index) =>
        item ? (
          <span
            className="bi bi-star-fill text-lg text-yellow-400 mr-1"
            key={index}
          ></span>
        ) : (
          <span className="bi bi-star text-lg text-yellow-500 mr-1"></span>
        )
      )}
    </>
  );
};

export default Rating;
