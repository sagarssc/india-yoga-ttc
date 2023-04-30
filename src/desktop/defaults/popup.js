import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../../css/popup.css'


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

// export default CustomPopUp;