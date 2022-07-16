// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import { SearcherConsumer, Show, SearchProvider} from './context/global/global.context'
import { useTranslation } from 'react-i18next';


export default () => <SearchProvider>
    <SearcherConsumer />
    <App />
  </SearchProvider>


function App() {
  const { t, i18n } = useTranslation(['traductor']);

  const results = Show();
  const [index, setIndex] = useState(0);
  const [indeTwo, setIndexTwo] = useState(10);
  const [pokemons, setPokemons] = useState([]);
  const [onePokemon, setOnePok] = useState([]);
  const background = useRef(null);
  const mostrarRef = () =>{
    console.log(background.current.className)
  }

  useEffect(()=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1126`).then(value=>{
      setPokemons(value.data.results);
    })
  }, []);
  
  useEffect(()=>{
    console.log(results.finder);
    if(pokemons){
      pokemons.slice(index,indeTwo).filter((data)=>{
        if(data.name.toString().toLowerCase().includes(results.finder)){
          setOnePok([]);
          const url = data.url.split('/');
          axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then((value) => {
            setOnePok((current) => [...current, value]);
            console.log(onePokemon);
          });
        }
      })
    }
  },[results])

  useEffect(()=>{
    pokemons.slice(index,indeTwo).map(data => {
      const url = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then(value =>{
        setOnePok((current) => [...current, value]);
      });
    });
  },[pokemons]);

  useEffect(()=>{
    setOnePok([]);
    pokemons.slice(index,indeTwo).map(data => {
      const url = data.url.split('/');
      axios.get(`https://pokeapi.co/api/v2/pokemon/${url[6]}`).then((value)=>{
        setOnePok((current) => [...current,value]);
        console.log(onePokemon);
      });
    });
  }, [index]);

  useEffect(()=>{
    
  })

  return (
    <div className="App">
      <ul className="nav bg-danger text-white justify-content-center">
        
        <li className="nav-item">
          <h1 >POKEMONS</h1>
        </li>
        
      </ul>
      <div className='grid' >
      <button className='btn btn-outline-danger pst pst_back' onClick={() => {setIndex(index - 10);setIndexTwo(indeTwo-10)}}>Back</button>
      <button className='btn btn-outline-danger pst pst_next' onClick={() => {setIndex(index + 10);setIndexTwo(indeTwo+10)}}>Next</button>

        {
          onePokemon.slice(0,10).length > 0 ? onePokemon.slice(0, 10).map((value, index) => (    
            <div key={index}  onClick={(e) => window.location.href = `/pokemons/${value.data.id}`} className={[
                'card custom',
                // value.data.types[0].type.name=="water" ? 'card custom bg-b' : '',
                value.data.types[0].type.name=="fire" ? 'card custom bg-r color-w' : (value.data.types[0].type.name=="water" ? 'card custom bg-b color-w' 
                :(value.data.types[0].type.name=="grass" ? 'card custom bg-v color-w' :(value.data.types[0].type.name=="bug" ? 'card custom bg-a color-w' 
                :(value.data.types[0].type.name=="ground" ? 'card custom bg-w color-w' :(value.data.types[0].type.name=="fighting" ? 'card custom bg-c color-w' 
                :(value.data.types[0].type.name=="poison" ? 'card custom bg-m color-w' :(value.data.types[0].type.name=="fairy" ? 'card custom bg-rs color-w' 
                :(value.data.types[0].type.name=="electric" ? 'card custom bg-el color-w' :(value.data.types[0].type.name=="ghost" ? 'card custom bg-dr color-w' 
                :(value.data.types[0].type.name=="rock" ? 'card custom bg-g color-w' :(value.data.types[0].type.name=="psychic" ? 'card custom bg-ps color-w' :'card custom bg-nor')))))))))))
                 
                ]}>
                <div className="container h-custom">
                  <div className="row align-items-center relative h-custom">
                    <div className="col-9 custom-w">
                      <h4 className=''><b className='uppercase'>{value.data.name}</b></h4>
                      {/* <small>{value.data.types[0].type.name}</small> */}
                      <small className='fs-ss '>{t("habilidades")}</small>
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

