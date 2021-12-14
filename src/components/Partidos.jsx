import React, {useState} from "react";
import "../style/principal.css";
import "../js/scripts1.js";
import Footer from "./Footer.jsx";
import Nav from "../components/Navig.jsx";

const Partidos = () => {

    const [datos, setDatos] = useState({
        partidos: '',
        fecha:'',
        hora: '',
        estado:'',
        resultado:'',
    })
    const handleInputChange = (event) => {
        //console.log(event.target.name)
         //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('datos...' + [datos.partidos])
        console.log('datos...' + [datos.fecha])
        console.log('datos...' + [datos.hora])
        console.log('datos...' + [datos.estado])
        console.log('datos...' + [datos.resultado])
    }
  return (
    <div className="">
      <div className=" tam_pagina principal ">
        <Nav />
        <body className=" tam_pagina">
          <h1 className=" colorh1">Partidos</h1>
          <hr />
            <div className="accordion " id="accordionPartidos">
                {/* campeonato1 */}
                <div className="accordion-item fond_acord">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                        > Campeonato 1</button>                      
                    </h2>
                    <div id="collapseOne"  className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    
                     {/* inicio jornadas */}
                        <div className="accordion-body">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                    {/*  jornadas 1*/}
                                <div className="accordion-item ">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Jornada 1
                                        </button>
                                    </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse fond_jor" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    {/* inicio del div modal y tabla */}
                                        <div >
                                    {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn btn-primary btn_edit" data-bs-toggle="modal" data-bs-target="#modCamUnoJornadaUno">
                                            Agregar
                                            </button>

                                    {/* <!-- Modal --> */}
                                        <div className="modal fade " id="modCamUnoJornadaUno" tabindex="-1" aria-labelledby="modCamUnoJornadaUnoLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="modCamUnoJornadaUnoLabel">Agregar Partido</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                <form method="POST" id="signup-form" onSubmit={enviarDatos}>
                                                    
                                                    <div className="form-floating mb-3">
                                                        <input type="text" className="form-control" id="partidos" name="partidos" onChange={handleInputChange}/>
                                                        <label for="floatingInput">Partidos</label>
                                                        
                                                    </div>
                                                    <div className="row">
                                                        <div className="col form-floating mb-3">
                                                            <input type="date" className="form-control" id="fecha" name="fecha" aria-label="First name" onChange={handleInputChange}/>
                                                            <label for="floatingInput">Fecha</label>
                                                        </div>
                                                        <div className="col form-floating mb-3">
                                                            <input type="time" className="form-control" id="hora" name="hora"  aria-label="First name" onChange={handleInputChange}/>
                                                            <label for="floatingInput">Hora</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col form-floating mb-3">
                                                            <select className="form-select " id="estado" name="estado" aria-label="First name" onChange={handleInputChange}>
                                                                <option selected>Seleccione</option>
                                                                <option value="Terminado">Terminado</option>
                                                                <option value="Por Jugar">Por Jugar</option>
                                                                {/* <option value="3">Three</option> */}
                                                            </select>                                                           
                                                            <label for="floatingInput">Estado</label> 
                                                        </div>
                                                        <div className="col form-floating mb-3">
                                                            <input type="text" className="form-control" id="resultado" name="resultado"  aria-label="First name" onChange={handleInputChange}/>
                                                            <label for="floatingInput">Resultado</label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab_partidos ">                                     
                                    <table class="table tabla_par fond_tab">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Partidos</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Resultado</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                    <td>Equipo_W  vs  Equipo_X</td>
                                                    <td>2021-12-10</td>
                                                    <td>4:00 pm</td>
                                                    <td>Terminado</td>
                                                    <td>4-2</td>
                                                    <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                    <td>Equipo_Y  vs  Equipo_X</td>
                                                    <td>2021-12-11</td>
                                                    <td>5:00 pm</td>
                                                    <td>Terminado</td>
                                                    <td>3-1</td>
                                                    <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                    <td>Equipo_Y  vs  Equipo_Z</td>
                                                    <td>2021-12-8</td>
                                                    <td>2:00 pm</td>
                                                    <td>Terminado</td>
                                                    <td>4-1</td>
                                                <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    {/* fin de tabla */}  
                            </div>
                        </div>
                    {/*  jornadas 2 */}        
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Jornada 2
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    {/* inicio del div modal y tabla */}
                                    <div>
                    {/* <!-- Button trigger modal --> */}
                                        <button type="button" class="btn btn-primary btn_edit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Agregar
                                        </button>
                    {/* <!-- Modal --> */}
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Agregar</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <form>                                                  
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control" id="floatingInput" />
                                                            <label for="floatingInput">Partidos</label>                                                            
                                                        </div>
                                                        <div className="row">
                                                            <div class="col form-floating mb-3">
                                                                <input type="text" class="form-control" id="floatingInput"  aria-label="First name"/>
                                                                <label for="floatingInput">Fecha</label>
                                                            </div>
                                                            <div class="col form-floating mb-3">
                                                                <input type="text" class="form-control" id="floatingInput"  aria-label="First name"/>
                                                                <label for="floatingInput">Hora</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div class="col form-floating mb-3">
                                                                <input type="text" class="form-control" id="floatingInput"  aria-label="First name"/>
                                                                <label for="floatingInput">Estado</label>
                                                            </div>
                                                            <div class="col form-floating mb-3">
                                                                <input type="text" class="form-control" id="floatingInput"  aria-label="First name"/>
                                                                <label for="floatingInput">Resultado</label>
                                                            </div>
                                                        </div>
                                                
                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab_partidos">                                    
                                    <table class="table tabla_par">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Partidos</th>
                                                <th scope="col">Fecha</th>
                                                <th scope="col">Hora</th>
                                                <th scope="col">Estado</th>
                                                <th scope="col">Resultado</th>
                                                <th scope="col">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                    <td><label className="">Editar</label>/<label className=" ">Eliminar</label></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    {/* fin de tabla */}    
                        </div>
                    </div>

                    {/*  jornadas 3*/}
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Jornada 3
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
                </div>
                {/* campeonato2 */}
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    >
                    Campeonato 2
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    </div>
                </div>
                </div>
                {/* campeonato3 */}
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    >
                    Campeonato 3
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    </div>
                </div>
                </div>
                {/* campeonato4 */}
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingCuatro">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCuatro"
                    aria-expanded="false"
                    aria-controls="collapseCuatro"
                    >
                    Campeonato 4
                    </button>
                </h2>
                <div
                    id="collapseCuatro"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingCuatro"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    </div>
                </div>
                </div>

            </div>
        </body>
      </div>
      <Footer />
    </div>
  );
};
export default Partidos;
