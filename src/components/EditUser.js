import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserStorage } from '../localstorage/models';
import Alert from '../alert'

class EditUser extends Component {
  constructor(props) {
    super(props);
    const user = UserStorage.find(parseInt(props.match.params.id, 10));
    this.userName = user.name;
    this.state = user;
  }

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  descriptionChangeHandler = (event) => {
    this.setState({ description: event.target.value });
  }

  saveHandler = (event) => {
    event.preventDefault();
    UserStorage.update(this.state);
    this.props.history.push(`/users/${this.state.id}`);
    Alert.alert(`${this.state.name} update successfully!!!`);
  }


  render() {
    return (
      <form>
        <Link to={`/users/${this.state.id}`} className="small">Back</Link>
        <h2>Editing {this.userName}</h2>
        <hr className="my-4"/>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.nameChangeHandler}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" value={this.state.description} onChange={this.descriptionChangeHandler} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.saveHandler}>Submit</button>
      </form>
    );
  }
}

export default EditUser;
