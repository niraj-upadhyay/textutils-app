
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';






function App() {

  const [mode, setMode]=useState('light');
  const [alert, setAlert]= useState(null);

  const showAlert = (message,type) => {
       setAlert({
        msg:message,
        type: type
       })

       setTimeout(()=>{

        setAlert(null);

       },1500);
       
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark Mode has been enabled", "sucess");
      // document.title = 'Textutils - LightMode';

      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "sucess");
      // document.title = 'Textutils - DarkMode';

    }
  }


  return (
  <>  
  <BrowserRouter>

  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert= {alert}/>
 
  <div className="container my-2">
  <Routes>
     <Route exact path="/about"  element={<About mode={mode} /> }> </Route>

     <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils Word Counter Character Counter"/>}> </Route>

  </Routes>
  </div>
  
  </BrowserRouter>
 

  </>


  );
}

export default App;
