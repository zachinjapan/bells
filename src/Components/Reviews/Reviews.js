import "../Reviews/Reviews.css";
import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { author: "boby", text: "This is a review", stars: 5, date: "2020-01-01" },
    { author: "bill", text: "This is a review", stars: 4, date: "2020-01-01" },
    {
      author: "bob",
      text: "This is a review lorem ipsum",
      stars: 1,
      date: "2020-01-01",
    },
  ]);

  return (
    <div className="reviews">
      <div className="review-panel">
        {reviews.map((review) => (
          <div className="review-item">
            <div className="review-stars">
              {Array(review.stars)
                .fill()
                .map((_, i) => (
                  <span className="review-star">&#9733;</span>
                ))}
            </div>
            <div className="review-text">
              {review.text} -{review.author}
            </div>
            <div className="review-date">{review.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
