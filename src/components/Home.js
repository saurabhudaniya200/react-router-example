import React, { Component } from 'react';
import SeedLoader from '../localstorage/seeds';
import { UserStorage } from '../localstorage/models';
import { Link } from 'react-router-dom';
import Alert from '../alert';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCount: UserStorage.all().length,
    };
  }
  seedHandler = (event) => {
    event.preventDefault();
    SeedLoader.load();
    this.resetState();
    Alert.alert('Seed data loaded successfully!!!');
  }

  flushHandler = (event) => {
    event.preventDefault();
    SeedLoader.flush();
    this.resetState();
    Alert.alert('localstorage cleared successfully!!!');
  }

  resetState = () => {
    this.setState({
      usersCount: UserStorage.all().length,
    });
  }

  render() {
    let seedComponent;

    if (this.state.usersCount === 0) {
      seedComponent = <p>You do not have any data in you localstorage, <a href="" onClick={this.seedHandler}>click here</a> to load the seed data</p>;
    } else {
      seedComponent = <p>You have the necessary data to proceed, explore <Link to="/users">users</Link> or <a href="" onClick={this.flushHandler}>click here</a> to clear your localstorage</p>;
    }
    return (
      <div style={ { paddingTop: '100px' } }>
        <h1>Welcome to the React router example!</h1>
        <hr className="my-4"/>
        {seedComponent}
      </div>
    );
  }
}

export default Home;
