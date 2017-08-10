import * as ACTION_TYPES from '../constants';

let nextId = 0

export const CreateTask = (taskname) => ({
  type: ACTION_TYPES.CREATE_TASK,
  id: nextId ++,
  taskname
});

export const TOGGLE_TASK = (index) => ({
  type: ACTION_TYPES.TOGGLE_TASK,
  index
})
