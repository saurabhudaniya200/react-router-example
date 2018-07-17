import React from 'react';

const Review = (props) => {
  const review = props.review;

  return (
    <blockquote className="blockquote">
      <hr className="my-4"/>
      <p className="mb-0">
        {review.review}
        <span className="text-danger float-right"
          style={{ cursor: 'pointer' }}
          onClick={() => props.onRemove(review.id)}>
            &times;
        </span>
      </p>
      <footer className="blockquote-footer">
        {review.name}
      </footer>
    </blockquote>
  );
};

export default Review;
