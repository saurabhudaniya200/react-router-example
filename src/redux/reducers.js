import { ADD_REVIEW, REMOVE_REVIEW } from './action_names'
import { ReviewStorage } from '../localstorage/models';

const initialState = {
  reviews: ReviewStorage.all()
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, reviews: [action.payload, ...state.reviews] };
    case REMOVE_REVIEW:
      return { ...state, reviews: state.reviews.filter((review) => review.id !== action.payload) }
    default:
      return state;
  }
};

export default rootReducer;