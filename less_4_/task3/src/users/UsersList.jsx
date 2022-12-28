import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { goNext, goPrev } from './users.actions';

const UsersList = ({
  currentPage,
  toggleNextPage,
  togglePrevPage,
  users,
}) => {
  const usersPerPage = 3;

  const startIndex =
    (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersRender = users.slice(
    startIndex,
    endIndex,
  );
  console.log(usersRender);
  return (
    <div>
      <Pagination
        goNext={toggleNextPage}
        goPrev={togglePrevPage}
        currentPage={currentPage}
        itemsPerPage={usersPerPage}
        totalItems={users.length}
      />
      <ul className="users">
        {usersRender.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => ({
  users: state.usersList,
  currentPage: state.currentPage,
});

const mapDispatch = {
  toggleNextPage: goNext,
  togglePrevPage: goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
