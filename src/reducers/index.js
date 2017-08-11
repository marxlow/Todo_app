import * as ACTION_TYPES from '../constants';

const initialState  = {
  tasks: [],
  alertMessage: "",
};

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.CREATE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.task,
        ],
        alertMessage: "",
      };
    case ACTION_TYPES.DELETE_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.taskIndex),
          ...state.tasks.slice(action.taskIndex+1)
        ],
        alertMessage: "Deleted Task!",
      };
    case ACTION_TYPES.SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.alertMessage,
      };
    case ACTION_TYPES.TOGGLE_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map(task =>
        (task.taskIndex === action.taskIndex)
        ? {...task, taskCompleted: !task.completed} : task),
      };
    default:
      return state;
  }
};

export default reducer;
