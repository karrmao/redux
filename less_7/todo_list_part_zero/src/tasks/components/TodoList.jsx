/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateTaskInput from './CreateTaskInput';
import { createTask, updateTask, deleteTask } from '../tasksGateway';
import TasksList from './TasksList';
import { connect } from 'react-redux';
import * as tasksAction from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';

class TodoList extends Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  handleTaskStatusChange = id => {
    const { tasks } = this.state;
    const { done, text, createDate } = tasks.find(task => task.id === id);
    const updatedTask = {
      ...text,
      createDate,
      done: !done,
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    deleteTask(id).then(() => this.fetchTasksList());
  };

  handleTaskCreate = text => {
    createTask({
      text,
      done: false,
      createDate: new Date().toISOString(),
    }).then(this.fetchTasksList);
  };

  render() {
    return (
      <>
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}

TodoList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTasksList: tasksAction.getTasksList,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
