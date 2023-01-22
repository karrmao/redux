/* eslint-disable arrow-body-style */
// import { connect } from 'react-redux';
// import { optionsListSelector } from './options.selectors';
import React from 'react';
import ProtoPypes from 'prop-types';

const Options = ({ title, options, moveOption }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map(option => (
          <li key={option.id}>
            <button
              className="options__list-item"
              onClick={() => moveOption(option.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Options.ProtoPypes = {
  title: ProtoPypes.string.isRequired,
  options: ProtoPypes.arrayOf(ProtoPypes.shape()).isRequired,
  moveOption: ProtoPypes.func.isRequired,
};
export default Options;
// // eslint-disable-next-line arrow-body-style
// const mapState = state => {
//   //   return { options: state.options.optionsList };
//   return optionsListSelector(state);
// };

// export default connect(mapState)(Opions);

// eslint-disable-next-line no-undef
