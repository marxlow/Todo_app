import React, { Component } from 'react';

import { connect } from 'react-redux';

const TaskList = ({ tasks, alertMessage }) => {
  return (
    <div>
      <h2>List of Todos</h2>
      <i>{alertMessage}</i>
      <ol>
        {tasks.map((task) => (
          <li key={task.taskIndex}>{task.taskName}
            <button> Delete </button>
            <button> Complete </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default connect(
  (state, ownProps) => ({
    tasks: state.tasks,
    alertMessage: state.alertMessage,
  })
)(TaskList);
