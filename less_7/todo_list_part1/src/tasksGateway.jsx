/* eslint-disable arrow-body-style */
/*New code*/
const baseUrl = 'https://63b6f97a4f17e3a931c6a0d0.mockapi.io/api/v1/tasks';
/***/
export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json;utc-8',
    },
    body: JSON.stringify(taskData),
  });
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Faild to create new task');
  //   }
  // });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'aplication/json;utc-8',
    },
    body: JSON.stringify(taskData),
  });
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Faild to create update task');
  //   }
  // });
};

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Faild to delete task');
  //   }
  // });
};

export const getTasksList = () => {
  return fetch(baseUrl).then(response => response.json());
};

// export const fetchTasksList = () => {
//   return fetch(baseUrl)
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then(tasksList =>
//       tasksList.map(({ _id, ...task }) => ({ id: _id, ...task })),
//     );
// };
