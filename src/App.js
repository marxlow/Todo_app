import './App.css';

import * as ACTIONS from './actions';
import * as ACTION_TYPES from './constants';

import { Provider, connect } from 'react-redux'
import React, { Component } from 'react';

import TaskInputBar from './components/TaskInputBar';
import TaskList from './components/TaskList';
import { createStore } from 'redux'
import initStore from './store';
import logo from './logo.svg';
import reducer from './reducers';

const store = initStore();

// onTitleChange(event) {
//   const task = this.state.task;
//   task.title = event.target.value;
//   this.setState({task : task });
// }

class App extends Component {
  render() {
    return(
    <Provider store={store}>
      <div>
        <h1>This is your Todo App!</h1>
        <div>
          <section>
            <TaskList />
            <TaskInputBar />
          </section>
        </div>
      </div>
    </Provider>
    );
  }
}

export default App;
