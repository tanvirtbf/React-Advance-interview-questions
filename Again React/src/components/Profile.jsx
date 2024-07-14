function Profile(props){ 
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.status}</h2>
      {props.children}
    </>
  )
}
export default Profile