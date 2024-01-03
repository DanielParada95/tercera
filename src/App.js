import React from 'react';
import './App.css';
import { Routes, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Contacto from './pages/Contacto';
import Quiensoy from './pages/Quiensoy';

export const CONTACTO_URI = '/contacto';
export const QUIENSOY_URI = '/quiensoy';

function App() {

  // BOTON NAVEGACION --> https://stackoverflow.com/questions/64483999/is-there-any-method-to-open-page-using-a-react-router-v6-on-button-click 

  //const navigate = useNavigate();

  const handleClick = () => {
    console.log("PUTO EL QUE LEE...");
    //navigate(CONTACTO_URI);
  };

  return (
    <div className="App">
      <h1>React bootstrap</h1>
      <Router>
        <Routes>
          <Route path={CONTACTO_URI} element={Contacto()}/>
          <Route path={QUIENSOY_URI} element={Quiensoy()}/>
          <Route exact from='/' element={Quiensoy()}/>
          <Route render={() => <div>404 NOT FOUND</div>} />
        </Routes>
      </Router>

    <Button onClick={handleClick}>CONTACTO</Button>
    <br/>
    <Button onClick={handleClick}>QUIEN SOY?</Button>

    </div>
  );
};

export default App;
