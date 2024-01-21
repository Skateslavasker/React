
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



// let name = "harry";
function App() {
  const [mode,setmode] = useState('light')
  const [txt,settxt] = useState("Dark Mode")
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{ 
    setalert({
      msg : message,
      type: type
    })

    setTimeout(() => {
      setalert(null);
    }, 1600);
  }

  const changeGreen = () =>{
    document.body.style.backgroundColor = '#35C649'
  }
  
  const changeYellow = () =>{
    document.body.style.backgroundColor =  '#CAB911'
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(30 52 89)'
      settxt("Light Mode")
      showAlert("Dark Mode is enabled", "success")
      document.title = 'ReactHarry - Dark Mode'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      settxt("Dark Mode")
      showAlert("Light Mode is enabled", "success")
      document.title = 'ReactHarry - Dark Mode'
    }
  }
  return (
    // <div classNameNameName="App">
    //   <header classNameNameName="App-header">
    //     <img src={logo} classNameNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with revanth
    //     </a>
    //   </header>
    // </div>

    // <div classNameNameName="blank">Lovely</div>
    
    // <>
   
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>You</li>
    // </nav>

    // <div classNameNameName="container">
    //   <h1> Hello {name} </h1>
    //   <p>Hello niggas</p>
    // </div>
    // </>
    <>
    <BrowserRouter>
   <Navbar NavTitle = "Navvbar" aboutitle="About" mode = {mode} txt = {txt} toggleMode = {toggleMode} 
   changeGreen = {changeGreen} changeYellow = {changeYellow}/>
   <Alert alert = {alert} />
   {/* <Navbar  /> */}
   <div className="container my-3" >
    <Routes>
      <Route exact path="/about" element = {<About/>} />
        
      <Route exact path="/" element = { <TextForm heading="Enter text to analyze" showAlert = {showAlert} mode = {mode}  />} />

    </Routes>

   </div>
   
   </BrowserRouter>
    </>
  );
}

export default App;
