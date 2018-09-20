import React from 'react';
import { connect } from 'react-redux'
import { RemoveReview } from '../redux/actions'

const mapDispatchToProps = dispatch => {
  return { removeReview: (reviewId ) => dispatch(RemoveReview(reviewId)) }
}

const ConnectedReview = (props) => {
  const review = props.review;

  return (
    <blockquote className="blockquote">
      <hr className="my-4"/>
      <p className="mb-0">
        {review.review}
        <span className="text-danger float-right"
          style={{ cursor: 'pointer' }}
          onClick={() => props.removeReview(review.id)}>
            &times;
        </span>
      </p>
      <footer className="blockquote-footer">
        {review.name}
      </footer>
    </blockquote>
  );
};

const Review = connect(null, mapDispatchToProps)(ConnectedReview)

export default Review;
