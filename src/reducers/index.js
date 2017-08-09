import * as ACTION_TYPES from '../constants';


const reducer = function(state = [], action) {
  switch(action.type) {
    case ACTION_TYPES.CREATE_TASK:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default reducer;
