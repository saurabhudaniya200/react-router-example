import React, { Component } from 'react';
import { UserStorage } from '../localstorage/models';
import { Link } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: UserStorage.all() };
  }

  filterUserHandler = (event) => {
    this.setState({ users: UserStorage.all(event.target.value) });
  }

  render() {
    let notFound;

    if (this.state.users.length === 0) {
      notFound = <h4 className="text-center text-muted col-md-12"> <strong>No users found</strong> </h4>;
    }
    return (
      <div style={ { paddingTop: '40px' } }>
        <div className="row">
          <h1 className="col-md-8">Listing Users</h1>
          <div className="col-md-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search Users"
                className="form-control"
                onChange={this.filterUserHandler}/>
            </div>
          </div>
        </div>
        <div className="row">
          {notFound}
          {
            this.state.users.map((user) => (
              <div className="card col-md-4" key={user.id}>
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text text-muted text">{user.description}</p>
                  <Link to={`/users/${user.id}`}>View More..</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Users;
