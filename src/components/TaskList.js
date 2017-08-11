import * as ACTIONS from '../actions';

import React, { Component } from 'react';

import Task from './Task';
import { connect } from 'react-redux';

const Tasks = ({ tasks, handleDelete, handleToggleComplete }) => (
  <ol>
    {tasks.map((task, index) => (
      <Task
        key={index}
        task={task}
        handleDelete={handleDelete}
        handleToggleComplete={handleToggleComplete}
      />
    ))}
  </ol>
);

class TaskList extends Component {
  constructor() {
    super();
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggleComplete(index) {
    this.props.handleToggleComplete(index);
  }

  handleDelete(index) {
    this.props.handleDelete(index);
  }

  render() {
    let { tasks, filter } = this.props;
    if (filter === 'NO_FILTER') {
      tasks = tasks.filter(({ taskDeleted }) => !taskDeleted);
    } else if (filter === 'COMPLETED') {
      tasks = tasks.filter(({ taskCompleted }) => !!taskCompleted);
    } else if (filter === 'ARCHIVED') {
      tasks = tasks.filter(({ taskDeleted }) => !!taskDeleted);
    }
    return (
      <div>
        <h2>List of Todos</h2>
        <i>{this.props.alertMessage}</i>
        <Tasks
          tasks={tasks}
          handleDelete={this.handleDelete}
          handleToggleComplete={this.handleToggleComplete}
        />
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    tasks: state.tasks,
    filter: state.filter,
    alertMessage: state.alertMessage,
  }),
  {
    handleDelete: ACTIONS.deleteTask,
    handleToggleComplete: ACTIONS.toggleComplete,
  }
)(TaskList);
