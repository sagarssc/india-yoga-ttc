import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../css/popup.css';
import Modal from 'react-modal';


export function CustomPopUp({ isOpen, handleClose, content}){
  return (
    <Popup open={isOpen} onClose={handleClose} modal>
      <div className="popup-container">
        <h2>{content.mainContent}</h2>
        <p>{content.subContent}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </Popup>
  );
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: '#ffffff',
    borderRadius: '10px',
    outline: 'none',
    padding: '30px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  },
};


export function PaymentInfoModal({ isOpen, onRequestClose }){
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Payment Info Modal"
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#333', fontSize: '24px' }}>Payment Information</h2>
      </div>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>
        Thank you for registering for our course. You will receive an email with a secure payment link shortly.
      </p>
      <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px' }}>
        This payment link will be valid for 3 days. If you have any questions or encounter any issues, please don't hesitate to contact us.
      </p>
      <p style={{ color: '#666', fontSize: '12px', marginBottom: '20px', fontWeight:"600" }}>
        **To ensure a smooth registration process, please keep a screenshot or copy of your payment confirmation for future reference.
      </p>
      <button
        onClick={onRequestClose}
        style={{
          background: '#00b300',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          fontSize: '18px',
          borderRadius: '5px',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        Ok
      </button>
    </Modal>
);
};

// export default CustomPopUp;