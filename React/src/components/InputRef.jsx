import { useRef } from "react"

const InputRef = () => {

  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  const handleLabelClick = ()=> {
    inputRef.current.focus()
    inputRef.current.style.padding = '10px'
    buttonRef.current.style.backgroundColor = 'pink'
    buttonRef.current.style.color = 'black'
    inputRef.current.value = "please typing.."
  }
  const handleSubmit = ()=> {
    console.log(inputRef.current)
  }
  return (
    <div>
      <label htmlFor="input" onClick={handleLabelClick}>Name : </label>
      <input ref={inputRef} type="text" name='name' placeholder='type name here' />
      <button ref={buttonRef} onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputRef
