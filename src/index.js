import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar/navbar'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acerca from './components/acerca_de/acerca_de';
import OnePokemon from './components/card/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/pokemons' element={<App/>} />
          <Route path='/matricula' element={<Acerca/>} />
          <Route path='/pokemons/:pokemonID' element={<OnePokemon/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
