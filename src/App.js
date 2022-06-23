// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'

function App() {
  const [index, setIndex] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [onePokemon, setOnePok] = useState([]);
  const background = useRef(null);
  const mostrarRef = () =>{
    console.log(background.current.className)
  } 
  // const handleChange = e => {
  //   const { value, name } = e;
  //   console.log(name); // obteniendo el name attr del input desde el evento
  //   console.log(value); // obteniendo el valor del input desde el evento

  //   // console.log(inputRef.current.value); // obteniendo el valor del input desde el ref
  //   // console.log(inputRef.curren.name); // obteniendo el name attr del input desde el ref

  // };
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
        console.log(onePokemon);
      });
    });
  }, [index]);

  return (
    <div className="App">
     {/* <h1 className='titulo' ngClass="asd">POKE API</h1>
      <hr></hr> */}
      <ul class="nav bg-danger text-white justify-content-center">
        
        <li class="nav-item">
          <h1 >POKE API PRÁCTICA 2</h1>
        </li>
        
      </ul>
      <div className='grid' >
      <button className='btn btn-outline-danger pst pst_back' onClick={() => {setIndex(index - 10);}}>Back</button>
      <button className='btn btn-outline-danger pst pst_next' onClick={() => {setIndex(index + 10);}}>Next</button>
      {/* <button className='btn btn-dark' onClick={mostrarRef}>Mostrar</button> */}
        {
          onePokemon.length > 0 ? onePokemon.slice(0, 10).map((value, index) => (    
            <div key={index} ref={background} onClick={mostrarRef} className={[
                'card custom',
                // value.data.types[0].type.name=="water" ? 'card custom bg-b' : '',
                value.data.types[0].type.name=="fire" ? 'card custom bg-r color-w' : (value.data.types[0].type.name=="water" ? 'card custom bg-b color-w' 
                :(value.data.types[0].type.name=="grass" ? 'card custom bg-v color-w' :(value.data.types[0].type.name=="bug" ? 'card custom bg-a color-w' 
                :(value.data.types[0].type.name=="ground" ? 'card custom bg-w color-w' :(value.data.types[0].type.name=="fighting" ? 'card custom bg-c color-w' 
                :(value.data.types[0].type.name=="poison" ? 'card custom bg-m color-w' :(value.data.types[0].type.name=="fairy" ? 'card custom bg-rs color-w' 
                :(value.data.types[0].type.name=="electric" ? 'card custom bg-el color-w' :(value.data.types[0].type.name=="ghost" ? 'card custom bg-dr color-w' 
                :(value.data.types[0].type.name=="rock" ? 'card custom bg-g color-w' :(value.data.types[0].type.name=="psychic" ? 'card custom bg-ps color-w' :'card custom bg-nor')))))))))))
                 
                ]}>
                <div class="container h-custom">
                  <div class="row align-items-center relative h-custom">
                    <div class="col-9 custom-w">
                      <h4 className=''><b className='uppercase'>{value.data.name}</b></h4>
                      {/* <small>{value.data.types[0].type.name}</small> */}
                      <small className='fs-ss '>HABILIDADES</small>
                      <div className='d-flex mb-3'>
                        <small className='m-1 fs-s'>{value.data.abilities[0].ability?value.data.abilities[0].ability.name:'N/A'}</small>
                        <small className='m-1 fs-s'>{value.data.abilities[1]?value.data.abilities[1].ability.name: 'N/A'}</small>
                      </div>
                    </div>
                    <div className="col-3 px-0">
                      <div className='h-custom'>
                        <img src={value.data.sprites.front_default} alt={value.data.name}/>
                      </div>
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
