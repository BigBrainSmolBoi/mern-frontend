import React from 'react';

import Modal from './Modal';
import Button from '../FormElements/Button';

const ErrorModal = (Props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      {props.error}
    </Modal>
  );
};

export default ErrorModal;
