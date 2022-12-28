import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
//import Users from './Users';
import { goNext, goPrev } from './users.actions';

const UsersList = () => {
  return (
    <div>
      <Pagination
        goNext={toggleNextPage}
        goPrev={togglePrevPage}
      />
    </div>
  );
};

const mapState = {
  users: state.users.userList,
  currentPage: state.users.currentPage,
};

const mapDispatch = {
  toglleNextPage: goNext,
  togllePrevPage: goPrev,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
