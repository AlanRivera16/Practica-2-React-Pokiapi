import React from "react";
import "../navbar/navbar.css"
import img from '../../sources/top.png'
import icon from '../../sources/traductor.png'

export default function Navbar(){
return (
    <div style={{}}>
        <nav class="navbar navbar-expand-lg b-danger">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <img src={img} alt="" width="180" height="45"/>
                </a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mb-2">
                        <li class="nav-item">
                            <a class="nav-link fs-m hover-war" aria-current="page" href="/pokemons">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-m">|</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-m hover-war" aria-current="page" href="/matricula">Acerca de</a>
                        </li>
                    </ul>
                </div>
                <div class="justify-content-end btn outline">
                    <img src={icon} width="40" height="40"/>
                </div>
            </div>
        </nav>
    </div>
);
}