import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../../components/card/card.css"
import normal from "../../sources/back-normal.jpg"
import fire from "../../sources/back-fire.jpg"
import water from "../../sources/back-water.jpg"
import grass from "../../sources/back-grass.jpg"
import dark from "../../sources/back-dark.jpg"
import poison from "../../sources/back-poison.png"
import bug from "../../sources/back-bug.jpg"
import rock from "../../sources/back-rock.png"
import electric from "../../sources/back-electric.jpg"
import ground from "../../sources/back-ground.jpg"
import psychic from "../../sources/back-physic.jpg"
import fight from "../../sources/back-fight.jpg"
import { useTranslation } from 'react-i18next';


function OnePokemon(){
    const { t, i18n } = useTranslation(['traductor']);

    const url = window.location.pathname.split('/');
    const [onePokemon, setPokemon] = useState([]);
    const [back, setBack] = useState ();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${url[2]}`).then(value => {
            setPokemon(value.data);
            console.log(value.data);
            
            if(value.data.types[0].type.name=="fire"){
                setBack(fire)
            }
            else if(value.data.types[0].type.name=="water"){
                setBack(water)
            }
            else if(value.data.types[0].type.name=="grass"){
                setBack(grass)
            }
            else if(value.data.types[0].type.name=="bug"){
                setBack(bug)
            }
            else if(value.data.types[0].type.name=="rock"){
                setBack(rock)
            }
            else if(value.data.types[0].type.name=="poison"){
                setBack(poison)
            }
            else if(value.data.types[0].type.name=="ghost"){
                setBack(dark)
            }
            else if(value.data.types[0].type.name=="normal"){
                setBack(normal)
            }
            else if(value.data.types[0].type.name=="electric"){
                setBack(electric)
            }
            else if(value.data.types[0].type.name=="ground"){
                setBack(ground)
            }
            else if(value.data.types[0].type.name=="psychic"){
                setBack(psychic)
            }
            else if(value.data.types[0].type.name=="fighting"){
                setBack(fight)
            }
            // else if(){
            //     setBack()
            // }
        });
    }, []);


    // let className = 'menu';
    // // onePokemon.types[0].type.name=='fire'? className = 'br-r':''
    // onePokemon.types[0].type.name=='fire'? console.log('Si soy fire'):''

    return(
        <div>
            
            <div class="container">
                {
                    onePokemon.types && (

                        <div className="card-body">
                            <div className="card-head">
                                <img src={onePokemon.sprites && onePokemon.sprites.front_default} width={140} height={140} alt="..." />
                            </div>
                            <div >
                                <img src={back} className="card-sub-head" />
                            </div>
                            <div className="card-midle">
                                <h4>{onePokemon.name}</h4>
                                <h5><span className={[
                                        'badge bg-secondary',
                                        // onePokemon.types[0].type.name=="water" ? 'card  bg-b' : '',
                                        onePokemon.types[0].type.name=="fire" ? 'badge bg-r ' : (onePokemon.types[0].type.name=="water" ? 'badge bg-b ' 
                                        :(onePokemon.types[0].type.name=="grass" ? 'badge bg-v ' :(onePokemon.types[0].type.name=="bug" ? 'badge bg-a ' 
                                        :(onePokemon.types[0].type.name=="ground" ? 'badge bg-w ' :(onePokemon.types[0].type.name=="fighting" ? 'badge bg-c ' 
                                        :(onePokemon.types[0].type.name=="poison" ? 'badge bg-m ' :(onePokemon.types[0].type.name=="fairy" ? 'badge bg-rs ' 
                                        :(onePokemon.types[0].type.name=="electric" ? 'badge bg-el ' :(onePokemon.types[0].type.name=="ghost" ? 'badge bg-dr ' 
                                        :(onePokemon.types[0].type.name=="rock" ? 'badge bg-g ' :(onePokemon.types[0].type.name=="psychic" ? 'badge bg-ps ' :'badge bg-nor')))))))))))
                                    ]}>
                                    {onePokemon.types[0].type.name}</span>
                                </h5>
                                <div class="row">
                                    <div class="col-6" style={{textAlign:"start", fontWeight:"bold", height:"180px",overflowY:"scroll"}}>
                                        <p class="text-center bg-secondary rounded-pill text-light m-1">{t("movimientos")}</p>
                                        {onePokemon.moves.length > 0 ? onePokemon.moves.slice(0, 10).map((data, index) => (
                                            <ul style={{fontSize:"12px", margin:"5px"}} key={index}>{data.move.name}</ul>
                                        )) : (
                                            <ul>{t("no_mov")}</ul>
                                        )}
                                    </div>
                                    <div class="col-6" style={{textAlign:"start", fontWeight:"bold", height:"180px",overflowY:"scroll"}}>
                                    <p class="text-center bg-secondary rounded-pill text-light m-1">{t("habilidades")}</p>
                                    {onePokemon.abilities.length > 0 ? onePokemon.abilities.slice(0, 10).map((data, index) => (
                                        <ul style={{fontSize:"12px", margin:"5px"}} key={index}>{data.ability.name}</ul>
                                        )) : (
                                        <ul>{t("no_hab")}</ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default OnePokemon;
