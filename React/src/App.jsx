import { useState } from 'react'
import './App.css'
 const Modal = ({setIsOpenModal,isOpenModal}) => {
  return (
    <div className="modal">
      <h1>Name : Tanvir</h1>
      <p>A Frontend Developer</p>
      <p>Very Dedicated..</p>
      <button onClick={()=> setIsOpenModal(!isOpenModal)}>Close</button>
    </div>
  )
}

const App = () => {
  const [isOpenModal,setIsOpenModal] = useState(false)
  const handleOpenModal = ()=> {
    setIsOpenModal(!isOpenModal)
  }
  return (
    <div>
      {isOpenModal ? <Modal setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}/> : null}
      {isOpenModal ? null :<button onClick={handleOpenModal}>{isOpenModal? 'Close' : 'Open'} Modal</button>}
    </div>
  )
}

export default App

