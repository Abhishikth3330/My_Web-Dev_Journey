// import logo from './logo.svg';
// import './App.css';
import ThreeUserCard from './components/ThreeUserCard';
import UserDetails from './components/UserDetails';
import Welcome from './components/Welcome';

function App() {
    return (
      <>
        {/* <Welcome name={"Abhi"}/> */}
        {/* <UserDetails name={"Abhiiii"} age={23} city={"Nagpur"} /> */}
        <ThreeUserCard name={"Abhi"} email={"abhi@gmail.com"}/>
      </>
    );
}

export default App;
