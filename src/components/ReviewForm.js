import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      name: '',
      review: '',
    };
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  reviewChangeHandler = (event) => {
    this.setState({ review: event.target.value });
  }

  submitReviewHandler = (event) => {
    event.preventDefault();
    this.props.reviewSumbit(this.state);
    this.setState({ name: '', review: '' });
  }

  render() {
    return (
      <form>
        <h4>Write a review for {this.props.userName}</h4>
        <div className="form-group">
          <input type="text"
            className="form-control"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.nameChangeHandler}/>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Your Review goes here..."
            value={this.state.review}
            onChange={this.reviewChangeHandler}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.submitReviewHandler}>Submit</button>
      </form>
    );
  }
}

export default ReviewForm;
