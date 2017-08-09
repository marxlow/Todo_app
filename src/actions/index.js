import * as ACTION_TYPES from '../constants';

export const CreateTask = (taskname) => ({
  type: ACTION_TYPES.CREATE_TASK,
  taskname,
});
