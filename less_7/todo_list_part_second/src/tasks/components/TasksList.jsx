import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({
  tasks,
  handleTaskStatusChange,
  handleTaskDelete,
}) => {
  // const sortedList = tasks.slice().sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {tasks.map(task => (
        <Task
          key={task.id}
          {...task}
          onChange={handleTaskStatusChange}
          onDelete={handleTaskDelete}
        />
      ))}
    </ul>
  );
};

TasksList.prototype = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.string,
    }),
  ).isRequired,
};
export default TasksList;
