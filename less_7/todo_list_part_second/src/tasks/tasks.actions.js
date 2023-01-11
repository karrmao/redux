// import { fetchTasksList, updateTask } from './tasksGateway';

import * as tasksGataway from './tasksGateway';
import { tasksListSelector } from './tasks.selectors';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: TASKS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };
  return action;
};

export const getTaskList = () => {
  const thunkAction = function (dispatch) {
    tasksGataway
      .fetchTasksList()
      .then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
  return thunkAction;
};

export const updateTask = taskId => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGataway
      .updateTask(taskId, updatedTask)
      .then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const deleteTask = taskId => {
  const thunkAction = function (dispatch) {
    tasksGataway.deleteTask(taskId).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};

export const createTask = text => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGataway.createTask(taskData).then(() => dispatch(getTaskList()));
  };
  return thunkAction;
};
