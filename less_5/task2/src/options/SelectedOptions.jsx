import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toogleOption } from './options.actions';

// eslint-disable-next-line arrow-body-style
const mapState = state => {
  //   return { options: state.options.optionsList };
  return { options: selectedOptionsSelector(state) };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
