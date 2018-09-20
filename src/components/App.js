import React from 'react';
import Header from './Header';
import Main from './Main';
import { Provider } from 'react-redux'
import store from '../redux/store'

const App = () => (
  <div>
    <Header />
    <Provider store={store}>
      <Main />
    </Provider>
  </div>
);

export default App;
