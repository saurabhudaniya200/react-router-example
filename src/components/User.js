import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Review from './Review';
import { ReviewStorage, UserStorage } from '../localstorage/models';
import Alert from '../alert';

class User extends Component {
  constructor(props) {
    super(props);
    const user = UserStorage.find(parseInt(props.match.params.id, 10));
    this.state = user;
    this.state.reviews = ReviewStorage.getByKey('userId', user.id);
  }

  onReviewSubmit = (data) => {
    ReviewStorage.save(data);
    this.resetReviews();
    Alert.alert('Review added successfully!!!');
  }

  removeReviewHandler = (reviewId) => {
    ReviewStorage.removeByKey('id', reviewId);
    this.resetReviews();
    Alert.alert('Review removed successfully!!!');
  }

  resetReviews = () => {
    this.setState({ reviews: ReviewStorage.getByKey('userId', this.state.id) });
  }


  render() {
    let reviewMessage;

    if (!this.state) {
      return <h1>Sorry, but the user was not found</h1>;
    }

    if (this.state.reviews.length > 0) {
      reviewMessage = <h4 className="text-primary">Showing {this.state.reviews.length} review(s)</h4>;
    }
    return (
      <div>
        <Link to='/users' className="small">Back</Link>
        <span> | </span>
        <Link to={`/users/${this.state.id}/edit`} className="small">Edit</Link>
        <div className="jumbotron">
          <h1 className="display-4">{this.state.name}</h1>
          <h4>{this.state.description}</h4>
        </div>
        <hr className="my-4"/>
        <div className="row">
          {reviewMessage ? (
            <div className="col-md-7">
              {reviewMessage}
              {
                this.state.reviews.map((review) => (
                  <Review review={review} onRemove={this.removeReviewHandler} key={review.id}/>
                ))
              }
            </div>
          ): '' }
          <div className="col-md-5">
            <ReviewForm userName={this.state.name} userId={this.state.id} reviewSumbit={this.onReviewSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
