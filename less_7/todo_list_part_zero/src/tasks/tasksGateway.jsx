/* eslint-disable arrow-body-style */
// const baseUrl = 'https://63b6f97a4f17e3a931c6a0d0.mockapi.io/api/v1/tasks';
const baseUrl = 'https://619a8b0a27827600174452a1.mockapi.io/api/v1/tasks';

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json;utc-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json;utc-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};
