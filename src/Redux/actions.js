import {
  ADD_TASK,
  EDIT_TASK,
  UPDATE_TASK_STATUS,
  DELETE_TASK,
  SET_FILTER,
} from "./actionTypes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: task,
});

export const updateTaskStatus = (id, status) => ({
  type: UPDATE_TASK_STATUS,
  payload: { id, status },
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
