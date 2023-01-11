/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput';
import {
  getTasksList,
  createTask,
  updateTask,
  deleteTask,
} from './tasksGateway';
import TasksList from './TasksList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    getTasksList().then(tasksList => {
      this.setState({ tasks: tasksList });
    });
  };

  handleTaskStatusChange = id => {
    const { tasks } = this.state;
    const { done, text } = this.state.tasks.find(task => task.id === id);
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
            tasks={this.state.tasks}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </>
    );
  }
}
export default TodoList;
