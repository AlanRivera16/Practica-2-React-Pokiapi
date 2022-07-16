import React from "react";
import "../navbar/navbar.css"
import img from '../../sources/top.png'
import icon from '../../sources/traductor.png'
import { useTranslation } from 'react-i18next';

export default function Navbar(){
    const { t, i18n } = useTranslation(['traductor']);
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
                            <a class="nav-link fs-m hover-war" aria-current="page" href="/pokemons">{t("inicio")}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-m">|</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fs-m hover-war" aria-current="page" href="/matricula">{t("acerca_de")}</a>
                        </li>
                    </ul>
                </div>
                
                <div class="justify-content-end btn outline">
                    <button onClick={(e) => i18n.changeLanguage('en')}>Ingles</button>
                    <button onClick={(e) => i18n.changeLanguage('es')}>Español</button>
                    <img src={icon} width="40" height="40"/>
                </div>
            </div>
        </nav>
    </div>
);
}