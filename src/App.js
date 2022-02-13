import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Films from './components/Films';
import Home from './components/Home';
import People from './components/People';

function App() {
  const [films, setFilms]= useState([]);
  const [people, setPeople]= useState([]);
  const [loading, setLoading]= useState(true);

  useEffect(()=>{
    async function fetchFilms(){
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setFilms(data.results)
      setLoading(false);
    }

    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    fetchFilms();
    fetchPeople();
    
  }, [])

  return (
    <>
      <Router>        
        <Navbar/>
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route  path='/films' element={<Films data={films}/>} /> 
                <Route path='/people' element={<People data={people}/>} /> 
              </Routes>
            )} 
          </Container>
      </Router>
      
    </>
  );
}

export default App;
