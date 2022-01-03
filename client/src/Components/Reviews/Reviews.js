import "../Reviews/Reviews.css";
import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 2323,
      author: "boby",
      text: "This is a review",
      stars: 5,
      date: "2020-01-01",
    },
    {
      id: 2311,
      author: "bill",
      text: "This is a review",
      stars: 4,
      date: "2020-01-01",
    },
    {
      id: 11,
      author: "bob",
      text: "This is a review lorem ipsum",
      stars: 1,
      date: "2020-01-01",
    },
  ]);

  const addReview = (author, text, stars, date) => {
    const newReview = {
      id: Math.random(),
      author: author,
      text: text,
      stars: stars,
      date: date,
    };

    setReviews([...reviews, newReview]);
  };

  return (
    <div className="reviews">
      <div className="review-panel">
        {reviews.map((review) => (
          <div className="review-item" key={review.id}>
            <div className="review-stars">
              {Array(review.stars)
                //.fill is a method that creates an array of the same length as the number of stars
                .fill()
                //.map creates a bunch of star spans
                .map((star, i) => (
                  <span className="star">&#9733;</span>
                ))}
            </div>
            <div className="review-text">
              {review.text} -{review.author}
            </div>
            <div className="review-date">{review.date}</div>
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            addReview("bob", "this is a review", 5, "2020-01-01");
          }}
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
