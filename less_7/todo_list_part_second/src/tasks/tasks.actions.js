//import thunk from 'redux-thunk';
import { fetchTasksList } from './tasksGateway';

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
  const thunkAction = function () {
    fetchTasksList().then(tasksList =>
      dispatchEvent(tasksListRecieved(tasksList)),
    );
  };
  return thunkAction;
};
