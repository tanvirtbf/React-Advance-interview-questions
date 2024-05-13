import { useState } from "react";
import { createPortal } from "react-dom";

function ModalComp({ title, description, isModalOpen, closeModal }) {
  if (!isModalOpen) return null;
  return (
    <div className="modal">
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      {
        isModalOpen && createPortal(
          <ModalComp
            isModalOpen={isModalOpen}
            closeModal={closeModal}
            title={"This is Awesome Title"}
            description={"This is Awesome Description"}
          />,
          document.getElementById("modals")
        )
      }
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Modal;
