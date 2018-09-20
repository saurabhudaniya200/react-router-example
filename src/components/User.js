import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import NotFound from './NotFound'
import Review from './Review';
import { UserStorage } from '../localstorage/models';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

class ConnectedUser extends Component {
  constructor(props) {
    super(props);
    const user = UserStorage.find(parseInt(props.match.params.id, 10));
    console.log(user)
    this.state = user;
  }

  render() {
    let reviewMessage;

    if (!this.state) {
      return (
        <NotFound></NotFound>
      );
    }

    const reviews = this.props.reviews.filter((object) => object.userId === this.state.id);

    if (reviews.length > 0) {
      reviewMessage = <h4 className="text-primary">Showing {reviews.length} review(s)</h4>;
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
                reviews.map((review) => (
                  <Review review={review} key={review.id}/>
                ))
              }
            </div>
          ): '' }
          <div className="col-md-5">
            <ReviewForm userName={this.state.name} userId={this.state.id}/>
          </div>
        </div>
      </div>
    );
  }
}

const User = connect(mapStateToProps)(ConnectedUser)

export default User;
