import "../Reviews/Reviews.css";
import React, { useState } from "react";
import {TextField, Typography, Paper, Modal, Box} from '@material-ui/core';
import Button from '@material-ui/core/Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Reviews = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        {/* <Button onClick={handleOpen} variant="contained" color="primary" size="large">Add Review</Button> */}
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
      </div>
    </div>
  );
};

export default Reviews;
