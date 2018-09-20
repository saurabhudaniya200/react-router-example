import { ADD_REVIEW, REMOVE_REVIEW } from './action_names'
import { ReviewStorage } from '../localstorage/models'

export const AddReview = (review) => {
  const savedReview = ReviewStorage.save(review);
  return { type: ADD_REVIEW, payload: savedReview }
}

export const RemoveReview = (reviewId) => {
  ReviewStorage.removeByKey('id', reviewId);
  return { type: REMOVE_REVIEW, payload: reviewId }
}