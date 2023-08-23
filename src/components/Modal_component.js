import React, { useEffect, useRef } from 'react';
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

Modal.setAppElement('#root'); 

const Modal_component = ({ isModalOpen, closeModal, currentImage }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        disableBodyScroll(modalRef.current);
      } else {
        enableBodyScroll(modalRef.current);
      }
    }
  }, [isModalOpen]);

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.8)',  // Cette ligne rend l'arrière-plan complètement noir
          zIndex: 2,
        },
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '5px',
          zIndex: 2,
        }
      }}
      ref={modalRef}
    >
      <img onClick={closeModal} src={currentImage} alt="Full size" style={{ maxHeight: '80vh', maxWidth: '90vw', objectFit: 'contain' }} />
    </Modal>
  );
};

export default Modal_component;
