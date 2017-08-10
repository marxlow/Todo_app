import React, { Component } from 'react';

import { connect } from 'react-redux';

const TaskList = ({ tasks, alertMessage }) => {
  return (
    <div>
      <h2>List of Todos</h2>
      <i>{alertMessage}</i>
      <ol>
        {tasks.map((task, idx) => (
          <li key={idx}>{task}</li>
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
