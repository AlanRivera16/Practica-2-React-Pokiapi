import React from "react";
import "../acerca_de/acerca_de.css"
import imagen from "../../sources/name.png"
import foto from "../../sources/alan.jpeg"

export default function Acerca(){

    return(
        <div class="" style={{overflowX: "hidden"}}>
            <div className="back">
                <img src={foto} class=" b-radius" width="220px" height="220px"/>
                <img src={imagen} class="name" width="450px" height="50px"/>
            </div>
        
            <div class="row" style={{marginTop:"140px"}}>
                <div class="col-2"></div>
                <div class="col-8 justify-content-center"> 
                    <div class="container">
                        <div class="row" style={{ marginTop: "70px", width: "100%" }}>
                            <div class="col m-2 card shadow bg-body rounded"><h5 class="text-center m-2">Matrícula <br /><span class="badge bg-danger m-2">191338</span></h5></div>
                            <div class="col m-2 card shadow bg-body rounded"><h5 class="text-center m-2">Grado y Grupo <br /><span class="badge bg-danger m-2">9-A</span></h5></div>
                            <div class="col m-2 card shadow bg-body rounded"><h5 class="text-center m-2">Carrera <br /><span class="badge bg-danger m-2">IDGS</span></h5></div>
                            <div class="col m-2 card shadow bg-body rounded"><h5 class="text-center m-2">Turno <br /><span class="badge bg-danger m-2">Vespertino</span></h5></div>
                        </div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
            {/* <div class="row mt-5">
                <div class="col-2">one columns</div>
                <div class="col-8 align-self-center">
                    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4 b-radius">
                                <img src={foto} class="img-fluid rounded-start" />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-2">one columns</div>
            </div> */}

            {/* <div class="row">
                <div class="col-4">
                    <img src={foto} class=" b-radius" width="200px" height="200px"/>
                </div>
                <div class="col-8">
                    <div>
                        <h1>Hola</h1>
                    </div>
                </div>
            </div> */}
           
        </div>
    );
}
