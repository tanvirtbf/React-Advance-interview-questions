import "./App.css";
// import { Profile as UserProfile } from "./components/Profile"; // Named Export 
import UserProfile from './components/Profile'


function App() {
  return (
    <>
      <h1>Hello World</h1>
      <UserProfile />
    </>
  );
}

export default App;
