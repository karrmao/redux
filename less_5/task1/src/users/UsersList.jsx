import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { goNext, goPrev } from './user.actions';
import { usersListSelector, usersPageSelector } from './users.selectors';

const itemsPerPage = 3;
const UsersList = ({
  users,
  currentPage,
  toggleNextPage,
  togglePrevPage,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const userToDisplay = users.slice(startIndex, endIndex);
  return (
    <div>
      <Pagination
        goPrev={togglePrevPage}
        goNext={toggleNextPage}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />

      <ul className="users">
        {userToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

UsersList.PropTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentPage: PropTypes.string.isRequired,
  goNext: PropTypes.func.isRequired,
  goPrev: PropTypes.func.isRequired,
};

const mapState = state => ({
  users: usersListSelector(state),
  currentPage: usersPageSelector(state),
});

const mapDispatch = {
  toggleNextPage: goNext,
  togglePrevPage: goPrev,
};

// const connector = connect(mapState, mapDispatch);

// const ConnectedUsersList = connector(UsersList);

// export default ConnectedUsersList;

export default connect(mapState, mapDispatch)(UsersList);
