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

    case ACTION_TYPES.SET_ALERT_MESSAGE:
      return {
        ...state,
        alertMessage: action.alertMessage,
      };
    default:
      return state;
  }
};

export default reducer;
