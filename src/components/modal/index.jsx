import { createPortal } from 'react-dom';

import { CROSS_PNG } from '../../assests/images';

import './index.css';

const Modal = ({ isShowing, closeModal, children }) =>
  isShowing
    ? createPortal(
        <>
          <div className="modal-overlay" />
          <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
              <div className="d-flex justify-end modal-close-button">
                <img src={CROSS_PNG} alt="crossicon" onClick={closeModal} />
              </div>
              <div className="model-content">{children}</div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
