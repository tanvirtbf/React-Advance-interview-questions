import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const Modal = ({title,description,closeModal}) => {

  const modalRef = useRef(null)

  const handleClick = (e)=>{
    if(modalRef.current && !modalRef.current.contains(e.target)){
      closeModal()
    }
  }

  useEffect(()=>{
    document.addEventListener("click",handleClick,true)

    return ()=>{
      document.removeEventListener("click",handleClick)
    }
  },[])

  return (
    <div className="modal" ref={modalRef}>
      <h3>{title}</h3>
      <hr />
      <h4>{description}</h4>
      <hr />
      <button onClick={closeModal}>Close Modal</button>
    </div>
  )
}

const DuplicateModal = () => {

  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => {
    setIsOpenModal(true)
  }
  const closeModal = () => {
    setIsOpenModal(false)
  }
  return (
    <div>
      {isOpenModal && createPortal(<Modal title={"My Name is Tanvir"} description={"A React Developer"} closeModal={closeModal} /> , document.getElementById("modals"))}
      <button onClick={openModal}>Open Modal</button>
    </div>
  )
}

export default DuplicateModal
