import "./App.css";
// import { Profile as UserProfile } from "./components/Profile"; // Named Export 
import UserProfile from './components/Profile'


function App() {
  const tanvirObj = {
    name: 'Tanvir Ahmed',
    status: 'Play1'
  }
  const sadiaObj = {
    name: 'Sadia Ahmed',
    status: 'Play2'
  }
  const maymunaObj = {
    name: 'Maymuna Ahmed',
    status: 'Play3'
  }
  return (
    <>
      <h1>Hello World</h1>
      <UserProfile {...tanvirObj}>
        <h1>This is Children</h1>
      </UserProfile>
      <UserProfile {...sadiaObj}/>
      <UserProfile {...maymunaObj}/>
    </>
  );
}

export default App;
