import { useState } from "react";

function ModalComp({ title, description, isModalOpen, closeModal }) {
  if(!isModalOpen) return null
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
      <ModalComp
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        title={"This is Awesome Title"}
        description={"This is Awesome Description"}
      />
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Modal;
