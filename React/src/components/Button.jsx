const Button = ({changeColor}) => {
  return (
    <div>
      <button onClick={() => changeColor('green')}>Change Color</button>
    </div>
  )
}

export default Button
