import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ModalComp({ title, description, isModalOpen, closeModal }) {

  const modalRef = useRef(null)

  const handleClickOutside = (e) => {
    if(modalRef.current && !modalRef.current.contains(e.target)){
      console.log(e.target)
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener("click",handleClickOutside,true)

    return ()=> {
      document.removeEventListener("click",handleClickOutside)
    }
  },[])

  if (!isModalOpen) return null;
  return (
    <div className="modal" ref={modalRef}>
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
            title={"This is Title Field"}
            description={"This is Description Field"}
          />,
          document.getElementById("modals")
        )
      }
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default Modal;
