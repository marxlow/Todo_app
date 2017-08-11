import * as ACTIONS from '../actions';

import React, { Component } from 'react';

import { connect } from 'react-redux';

let nextTaskIndex = 0;

class TaskInputBar extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newTask = { taskName: this.input.value, taskIndex: nextTaskIndex };
    this.props.handleSubmit(newTask);
    this.input.value = '';
    nextTaskIndex += 1;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={(el) => this.input = el}
          placeholder="Add a task here"
        />
        <button type="submit" onSubmit={this.handleSubmit}>
          Submit task!
        </button>
      </form>
    )
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  {
    handleSubmit: ACTIONS.createNewTask
  }
)(TaskInputBar);
