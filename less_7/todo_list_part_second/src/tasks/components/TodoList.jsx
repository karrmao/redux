/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
// import { createTask } from '../tasksGateway';
import * as tasksAction from '../tasks.actions';
import { sortedTasksListSelector } from '../tasks.selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  // handleTaskStatusChange = id => {
  //   this.props.updateTask(id); //look
  // };

  // handleTaskDelete = id => {
  //   this.props.deleteTask(id);
  // };

  handleTaskCreate = text => {
    this.props.createTask({ text });
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.createTask,
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = state => {
  return {
    tasks: sortedTasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
