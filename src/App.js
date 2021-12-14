import React from 'react';
import {Routes, Route} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Web from './components/Web.jsx';
import Login from './components/Login.jsx';
import Registro from './components/Registro.jsx';
import Nav from './components/Nav.jsx';
import Principal from './components/Principal.jsx';
import Partidos from './components/Partidos.jsx';



function Webpag() {
  return (
      <Web /> 
  );
}
function Loginpag() {
  return (
      <Login /> 
  );
}
function Registropag(){
  return (
    <Registro />
  )
}
function Pagprin() {
  return (
      <Principal /> 
  );
}
function Pagpartidos() {
  return (
      <Partidos /> 
  );
}
function App() {
  return (
    
      <Router>
      <div className="">
       
        <Routes> 
           {/*pag inicio web  */}
          <Route path="/" element={<Webpag />}>
          </Route>   

          {/* pagina de login */}
          <Route path="/login" element={<Loginpag />}>   
          </Route>

          {/* pag de registro */}
          <Route path="/registro" element={<Registropag />}> 
          </Route>

           {/* pag de  */}
          <Route path="/index"elemnt={<Nav />} >   
          </Route> 

           {/* pag de inicio */}
          <Route path="/inicio" element={<Pagprin />}>   
          </Route>        
     
          <Route path="/partidos" element={<Pagpartidos />}>   
          </Route> 
        </Routes>
      </div>
    </Router>
    
    
  );
}

export default App;

  