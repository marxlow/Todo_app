import * as ACTION_TYPES from '../constants';

export const setAlert = (alertMessage) => ({
  type: ACTION_TYPES.SET_ALERT_MESSAGE,
  alertMessage,
});

export const toggleComplete = (taskIndex) => ({
  type: ACTION_TYPES.TOGGLE_COMPLETE,
  taskIndex,
});

export const deleteTask = (taskIndex) => ({
  type: ACTION_TYPES.DELETE_TASK,
  taskIndex,
  alertMessage: "DEFINITELY IN DELETe!",
});

export const createNewTask = (task) => {
  return dispatch => {
    if (!!task.taskName) {
      dispatch({
        type: ACTION_TYPES.CREATE_TASK,
        task,
      });
    } else {
      let alertMessage = 'You must enter a task name!';
      dispatch(setAlert(alertMessage));
    }
  }
};
