const Profile = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      {props.children}
    </div>
  )
}

export default Profile



