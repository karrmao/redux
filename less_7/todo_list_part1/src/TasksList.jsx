import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

const TasksList = ({
  tasks,
  handleTaskStatusChange,
  handleTaskDelete,
}) => {
  const sortedList = tasks.slisce().sort((a, b) => a.done - b.done);
  return (
    <ul className="list">
      {sortedList.map(task => (
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
