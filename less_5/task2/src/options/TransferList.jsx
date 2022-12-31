import React from 'react';
// import Options from './Opions';
import AvailableOptions from './AvailableOptions';
import SelectedOptions from './SelectedOptions';

// eslint-disable-next-line arrow-body-style
const TransferList = () => {
  return (
    <div className="transfer-list">
      <AvailableOptions title="Available options" />
      <SelectedOptions title="Selected options" />
    </div>
  );
};

export default TransferList;
