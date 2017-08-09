import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import * as ACTION_TYPES from './constants';
import * as ACTIONS from './actions';
import reducer from './reducers';
import initStore from './store';

const store = initStore();

const TaskList = (props) => {
  return (
    <div>
      <h2>List of Todos</h2>
      <ol>
        <li> task 1 </li>
        <li> task 2 </li>
      </ol>
    </div>
  );
};

const TaskInputBar = (props) => {
  return (
    <div>
    <input
      type = "text"
      value = "New task to ..."
    />
    <button> Text bar to add input here! </button>
    </div>
  );
};

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
