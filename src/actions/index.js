import * as ACTION_TYPES from '../constants';

// export const createNewTask = (task) => ({
//   type: ACTION_TYPES.CREATE_TASK,
//   task,
// });
export const setAlert = (alertMessage) => ({
  type: ACTION_TYPES.SET_ALERT_MESSAGE,
  alertMessage,
})

export const createNewTask = (task) => {
  return dispatch => {
    if (!!task) {
      dispatch({
        type: ACTION_TYPES.CREATE_TASK,
        task,
      });
    } else {
      let alertMessage = 'You must enter a task!';
      dispatch(setAlert(alertMessage));
    }
  }
}
