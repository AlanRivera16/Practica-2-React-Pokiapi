import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [index, setIndex] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [onePokemon, setOnePok] = useState([]);
  // const [urlPokemon, setUrlPokemon] = useState("")
  // const [Pokemon, setPokemon] = useState({})

  // const fetchApi = async () => {
  //   const response = await fetch(url)
  //   // console.log(response.status);
  //   const responseJSON = await response.json()
  //   await setTodos(responseJSON.results)
  //   // console.log(responseJSON.results);
  //   // console.log(todos);
  //   await setUrlPokemon(responseJSON.results[0].url)
  //   // console.log(responseJSON.results[0].url);
  //   return responseJSON.results
    
  // }
  

  // function fetchAPIPOKEMON(url){
  //   const responseForPok = fetch(url)
  //   const resJSONPok = responseForPok.json()
  //   console.log(resJSONPok);
  // }
  
  // useEffect(()=>{
  //   fetchApi().then(value =>{
  //     // console.log(value[0].name);
  //     console.log(value);
  //     fetch(value[0].url).then((data)=>{
  //       console.log(data.body);
  //     })
  //   })
  //   // fetchApi1P()
  // },[])

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=10`).then(value=>{
      setPokemons(value.data.results);
      // console.log(value.data.results);
    })
  }, [index]);

  useEffect(()=>{
    pokemons.map(data => {
      const url = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(value =>{
        setOnePok((current) => [...current, value]);
      });
    });
  },[pokemons]);

  useEffect(()=>{
    setOnePok([]);
    pokemons.map(data => {
      const url = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then((value)=>{
        setOnePok((current) => [...current,value]);
      });
    });
  }, [index]);

  return (
    <div className="App">
     <h1 className='titulo'>POKE API</h1>
      <hr></hr>
      <button className='btn btn-outline-success' onClick={() => {setIndex(index - 10);}}>Back</button>
      <button className='btn btn-outline-success' onClick={() => {setIndex(index + 10);}}>Next</button>
      <div className='grid'>
        {
          onePokemon.length > 0 ? onePokemon.slice(0, 10).map((value, index) => (    
            // <div key={index} className="card">
            //   <div className="card-content">
            //     <div class="container">
            //       <div class="row">
            //         <div class="col-6">
            //           Column
            //         </div>
            //         <div class="col-6">
            //           Column
            //         </div>
            //       </div>
            //     </div>                
            //     <h4><b className='uppercase'>{value.data.name}</b></h4>
            //     <img src={value.data.sprites.front_default} alt={value.data.name}/>
            //   </div>
            // </div>
            <div key={index} className="bg-danger">
              
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-6 bg-primary">
                      <h4><b className='uppercase'>{value.data.name}</b></h4>
                    </div>
                    <div className="col-6 bg-secondary">
                      <img src={value.data.sprites.front_default} alt={value.data.name}/>
                    </div>
                  </div>
                </div>                
                
                
              
            </div>
          )): null
        }
      </div>
    </div>
  );
}

export default App;
