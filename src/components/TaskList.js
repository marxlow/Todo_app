import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as ACTIONS from '../actions';

class TaskList extends Component {
  constructor() {
    super();
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleToggleComplete(e) {
    this.props.handleToggleComplete(0);
  }

  handleDelete(e) {
    this.props.handleDelete(0);
  }

  render() {
    return (
      <div>
        <h2>List of Todos</h2>
        <i>{this.props.alertMessage}</i>
        <ol>
          {this.props.tasks.map((task) => (
            <li key={task.taskIndex} style={{ textDecoration: task.taskCompleted ? 'line-through' : 'none' }}>{task.taskName}
              <button onClick={this.handleDelete}> Delete </button>
              <button onClick={this.handleToggleComplete}> Complete </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

// const TaskList = ({ tasks, alertMessage, handleDelete, handleToggleComplete}) => {
//   return (
//     <div>
//       <h2>List of Todos</h2>
//       <i>{alertMessage}</i>
//       <ol>
//         {tasks.map((task) => (
//           <li key={task.taskIndex} style={{ textDecoration: task.taskCompleted ? 'line-through' : 'none' }}>{task.taskName}
//             {/* <button onClick={handleDelete(task.taskIndex)}> Delete </button> */}
//             <button onClick={this.handleToggleComplete(task.taskIndex)}> Complete </button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

export default connect(
  (state, ownProps) => ({
    tasks: state.tasks,
    alertMessage: state.alertMessage,
  }),
  {
    handleDelete: ACTIONS.deleteTask,
    handleToggleComplete: ACTIONS.toggleComplete,
  }
)(TaskList);
