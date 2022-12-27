import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { users } = this.props;
    <div className="users">
      <button className="users__create-btn">Create Batton</button>
      <ul className="users__list">
        {users.map(user => (
          <li className="users__list-item"></li>
        ))}
      </ul>
    </div>;
  }
}

export default Users;
