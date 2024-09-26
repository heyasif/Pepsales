import {
  ADD_TASK,
  EDIT_TASK,
  UPDATE_TASK_STATUS,
  SET_FILTER,
  DELETE_TASK,
} from "./actionTypes";

const loadFromLocalStorage = () => {
  try {
    const taskData = localStorage.getItem("tasks");
    return taskData ? JSON.parse(taskData) : [];
  } catch (e) {
    console.error("Could not load tasks from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  try {
    const taskData = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskData);
  } catch (e) {
    console.error("Could not save tasks to localStorage", e);
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
  filter: "",
};

const tasksReducer = (state = initialState, action) => {
  let updatedTasks;
  switch (action.type) {
    case ADD_TASK:
      updatedTasks = [
        ...state.tasks,
        {
          ...action.payload,
          status: "pending",
          createdAt: new Date().toLocaleString(),
        },
      ];
      saveToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };

    case EDIT_TASK:
      updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.title,
              description: action.payload.description,
            }
          : task
      );
      saveToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };

    case UPDATE_TASK_STATUS:
      updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              status: action.payload.status,
              updatedAt: new Date().toLocaleString(),
            }
          : task
      );
      saveToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };

    case DELETE_TASK:
      updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      saveToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default tasksReducer;
