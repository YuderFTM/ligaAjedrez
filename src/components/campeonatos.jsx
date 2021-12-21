import React from "react";
import Footer from "./Footer.jsx";
import "../style/style3.css";

import Nav from "../components/Navig.jsx";

const Campeonatos = () => {
    return(
       <div> 
            <div className=" tam_pagina principal ">
      <Nav />
       <body>  
            <section class="container camp1"> 
                <div class="title-camp  "> <h1>Campeonatos</h1>
                <a type="button" class="btn btn-outline-success btn-title" href="/crearCampeonatos">Crear</a>
                <hr/></div>
                    <div class="row g-3 contenedor">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre Camp</th>
                                <th scope="col">Lugar</th>
                                <th scope="col">N-Equipos</th>
                                <th scope="col">1er-Premio</th>
                                <th scope="col">2do-Premio</th>
                                <th scope="col">Fecha Apertura</th>
                                <th scope="col">Fecha Clausura</th>
                                <th scope="col">Estado</th>
                                <th scope="col">acciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Campeonato 1</td>
                                <td>Plazoleta central</td>
                                <td>8</td>
                                <th>100mil</th>
                                <td>50mil</td>
                                <td>20/12/2021</td>
                                <td>25/12/2021</td>
                                <td>@cancelado</td>
                                <td><button type="button" class="btn btn-outline-success ">Editar</button>/
                                    <button type="button" class="btn btn-outline-danger " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Eliminar</button>
                                    {/* <!-- Button trigger modal --> */}
                                
                                        
                                        {/* <!-- Modal --> */}
                                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                <h5 class="modal-title" id="staticBackdropLabel">Eliminar Campeonato</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                Estas seguro de eliminar el campeonato
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Salir</button>
                                                <button type="button" class="btn btn-danger">Eliminar</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                </td>
                            </tr>
                            
                            </tbody>
                        </table>
                    </div>             
                        
                    
                </section>
                </body> </div> 
 <Footer /> 
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        
                </div>
    );

};
export default Campeonatos;