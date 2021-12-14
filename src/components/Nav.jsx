import React from "react";
import hamburger from "../assets/img/hamburguesa.png";
import '../style/styles1.css';
import '../js/scripts1.js';
// import Footer from "./Footer.jsx"

const Nav=()=> {
    return (
      
        <nav className='menu'>
            <div className="d-flex" id="wrapper">
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light"></div>
                    <div className="list-group list-group-flush">
                        {/* acordion */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"  aria-controls="collapseOne">
                                        Campeonatos
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="">
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                            Creación
                                        </button>

                                        {/* Modal Creación */}
                                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Campeonato</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                                            Equipos
                                        </button>

                                        {/* Modal Equipo */}
                                        <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Equipo</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
                                            Partidas
                                        </button>

                                        {/* Modal partidas */}
                                        <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear partida</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingtwo">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsetwo" aria-controls="collapsetwo">
                                        Equipos
                                    </button>
                                </h2>
                                <div id="collapsetwo" className="accordion-collapse collapse " aria-labelledby="headingtwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="">
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_creacion">
                                            Creación
                                        </button>

                                        {/* Modal Creación 2 */}
                                        <div className="modal fade" id="staticBackdrop_creacion" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Campeonato 2</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_eq">
                                            Equipos
                                        </button>

                                        {/* Modal Equipo 2 */}
                                        <div className="modal fade" id="staticBackdrop_eq" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabe_eq"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Equipo 2</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_par">
                                            Partidas
                                        </button>

                                        {/* Modal partidas */}
                                        <div className="modal fade" id="staticBackdrop_par" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear partida 2</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingtree">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsetree" aria-controls="collapsetree">
                                        Partidas
                                    </button>
                                </h2>
                                <div id="collapsetree" className="accordion-collapse collapse " aria-labelledby="headingtree"
                                    data-bs-parent="#accordionExample">
                                    <div className="">
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_cre3">
                                            Creación
                                        </button>

                                        {/* Modal Creación */}
                                        <div className="modal fade" id="staticBackdrop_cre3" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Campeonato 3</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_eq3">
                                            Equipos
                                        </button>

                                        {/* Modal Equipo */}
                                        <div className="modal fade" id="staticBackdrop_eq3" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Equipo 3</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_par3">
                                            Partidas
                                        </button>

                                        {/* Modal partidas */}
                                        <div className="modal fade" id="staticBackdrop_par3" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear partida 3</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingfour">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapsefour" aria-controls="collapsefour">
                                        Registrar
                                    </button>
                                </h2>
                                <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingfour"
                                    data-bs-parent="#accordionExample">
                                    <div className="">
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_cre4">
                                            Creación
                                        </button>

                                        {/* Modal Creación */}
                                        <div className="modal fade" id="staticBackdrop_cre4" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Campeonato 4</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_eq4">
                                            Equipos
                                        </button>

                                        {/* Modal Equipo */}
                                        <div className="modal fade" id="staticBackdrop_eq4" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear Equipo 4</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Button trigger modal */}
                                        <button type="button"
                                            className="btn list-group-item list-group-item-action list-group-item-light p-3"
                                            data-bs-toggle="modal" data-bs-target="#staticBackdrop_par4">
                                            Partidas
                                        </button>

                                        {/* Modal partidas */}
                                        <div className="modal fade" id="staticBackdrop_par4" data-bs-backdrop="static"
                                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="staticBackdropLabel">Crear partida 4</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        Formulario
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-outline-danger"
                                                            data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn  btn-outline-success">Crear</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-header">
                            <a type="button"
                                            className="accordion-button btn list-group-item list-group-item-action list-group-item-light p-3"
                                            href="/">
                                            salir
                                        </a>
                                {/* <h2 className="accordion-header" id="headingfive">
                                    <a className="list-group-item list-group-item-action list-group-item-light p-3"
                                        >salir</a>
                                </h2> */}
                                {/* <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                            <div className="">
                                
                            </div>
                            </div> */}
                            </div>
                        </div>
                        {/* <div className="border-end bg-white" id="sidebar-wrapper">
                        <div className="sidebar-heading border-bottom bg-light"></div>
                        <div className="list-group list-group-flush">
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!"></a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Campeonatos</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Equipos</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Partidas</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Registro</a>
                            <a className="list-group-item list-group-item-action list-group-item-light p-3" href="index.html">salir</a> */}

                    </div>
                </div>
                {/* Page content wrapper*/}
                <div id="page-content-wrapper">
                    {/* Top navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div className="container-fluid">
                            <button className="btn btn-primary" id="sidebarToggle"><img src={hamburger}
                                    alt=""></img></button>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation"><span
                                    className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active"><a className="nav-link" href="inicio">Home</a></li>
                                
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content*/}
                    {/* <div className="container-fluid bg-gradient-8">
                        <h1 className="mt-4">pantalla</h1>

                    </div> */}
                </div>
            </div>
            {/* Bootstrap core JS*/}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS*/}
            <script src="../js/scripts1.js"></script>
            </nav>
        

)};

export default Nav;

