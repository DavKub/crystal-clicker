import React from 'react';
import './Modal.scss';

const Modal = () => {
    return (
        <div className="saving-modal modal">
            <div className="modal-content">
                <span className="close">&times;</span>
                <p>Game saved</p>
            </div>
        </div>
    );
};

export default Modal;
