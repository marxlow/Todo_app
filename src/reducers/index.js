import * as ACTION_TYPES from '../constants';

const initialState = {
  tasklist: {},
  visibility: ACTION_TYPES.VISIBILITY_MODES.ALL
}

const reducer = function(state = initialState, action) {
  switch(action.type) {
    case ACTION_TYPES.CREATE_TASK:
      return [
        ...state,
        {
          id: action.id,
          text: action.taskname,
          completed: false
        },
      ]
    case ACTION_TYPES.TOGGLE_TASK:
      return state.map(task =>
        (task.id === action.id)
        // If Id matches, change parameter
        ? { ...task, completed: !task.completed }
        : task
      )
    default:
      return state;
  }
};

export default reducer;
