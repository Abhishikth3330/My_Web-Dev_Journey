import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import Errormsg from './Components/Errormsg';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Form from './Components/Form';
import Random from './Components/Random';
import Map from './Components/Map';
import Users from './Components/Users';
import Fruits from './Components/Fruits';
import Sap from './Components/Sap';
import UseStateHook from './Components/UseStateHook';
import EventHandling from './Components/EventHandling';
import HandlingInput from './Components/HandlingInput';
import FormSubmit from './Components/FormSubmit';
import { useState } from 'react';
import ChildButton from './Components/ChildButton';
import LoginControl from './Components/LoginControl';
import LoginControlIfElse from './Components/LoginControlIfElse';
import StudentNames from './Components/StudentNames';
import ProductList from './Components/ProductList';


function App() {


  const [message, setMessage] = useState("Hello from Parent !");

  const updateMessage = () => {
    setMessage("Message Updated by Child");
  }


  return (
    <>
    {/* <Calculator/>
    <Errormsg /> */}
    {/* <Home/>
    <About/>
    <Contact/>
    <Services/> */}

      {/* <Form/> */}

      {/* <Random/> */}

      {/* <Map/> */}

      {/* <Users/> */}
      
      {/* <Fruits name="Apple" />
      <Fruits name="Orange" /> */}

      {/* <Fruits name="Orange" city="Nagpur" /> */}

      {/* <Sap name="Abhi" /> */}

      {/* <UseStateHook /> */}

      {/* <EventHandling/> */}

      {/* <HandlingInput/> */}

      {/* <FormSubmit/> */}


      {/* <h2>{message}</h2> */}

      {/* <ChildButton onclick = {updateMessage}></ChildButton>   */}

      {/* <ChildButton onClick={updateMessage} /> */}


        {/* <LoginControl/> */}

        {/* <LoginControlIfElse/> */}


        {/* <StudentNames/> */}

        <ProductList/>


    </>
  );
}

export default App;
