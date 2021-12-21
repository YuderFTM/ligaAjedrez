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
            <div className="" id="accordionPartidos">
                {/* campeonato1 */}
                <div className="fond_acord">
                    <h2 className="accordion-header" id="headingOne">
                         Campeonato                   
                    </h2>
                    <div>
                    {/* <div id="collapseOne"  className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample"> */}
                    
                     {/* inicio jornadas */}
                        <div className="accordion-body">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                    {/*  jornadas 1*/}
                                <div className=" ">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        Partidos
                                        
                                    </h2>
                                    <div>
                                        {/* <div id="flush-collapseOne" className="accordion-collapse collapse fond_jor" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"> */}
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
                                                    <button type="submit" className="btn btn-primary">Guardar</button>
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
                                                    {/* <td><i class="bi bi-trash"></i><button></button></td> */}
                                        
                                                    <td><button tyoe="button"className="btn btn-outline-success btn-sm">Editar</button>  <button className="btn btn-outline-danger btn-sm">Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                    <td>Equipo_Y  vs  Equipo_X</td>
                                                    <td>2021-12-11</td>
                                                    <td>5:00 pm</td>
                                                    <td>Terminado</td>
                                                    <td>3-1</td>
                                                    <td><button tyoe="button"className="btn btn-outline-success btn-sm">Editar</button>  <button className="btn btn-outline-danger btn-sm">Eliminar</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                    <td>Equipo_Y  vs  Equipo_Z</td>
                                                    <td>2021-12-8</td>
                                                    <td>2:00 pm</td>
                                                    <td>Terminado</td>
                                                    <td>4-1</td>
                                                    <td><button tyoe="button"className="btn btn-outline-success btn-sm">Editar</button>  <button className="btn btn-outline-danger btn-sm">Eliminar</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                    {/* fin de tabla */}  
                            </div>
                        </div>
                   
                    </div>
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
