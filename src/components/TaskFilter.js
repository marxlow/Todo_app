import * as ACTIONS from '../actions';

import React, { Component } from 'react';

import { connect } from 'react-redux';

class TaskFilter extends Component {
  render() {
    let { filter, changeFilter } = this.props;
    return (
      <section>
        <p>Filter tasks:</p>
        <a
          href="#"
          onClick={() => changeFilter('NO_FILTER')}
          className={filter === 'NO_FILTER' ? 'active' : ''}
        >
          No filter
        </a>
        <br />
        <a
          href="#"
          onClick={() => changeFilter('COMPLETED')}
          className={filter === 'COMPLETED' ? 'active' : ''}
        >
          View Completed Tasks
        </a>
        <br />
        <a
          href="#"
          onClick={() => changeFilter('ARCHIVED')}
          className={filter === 'ARCHIVED' ? 'active' : ''}
        >
          View Archived Tasks
        </a>
      </section>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    filter: state.filter,
  }),
  {
    changeFilter: ACTIONS.changeFilter,
  }
)(TaskFilter);
