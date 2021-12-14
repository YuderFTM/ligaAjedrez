import React from "react";
import '../style/styles.css';
// import { Link } from "react-router-dom";
import uno from "../assets/img/portfolio/thumbnails/1.png";
import dos from "../assets/img/portfolio/thumbnails/2.png";
import tres from "../assets/img/portfolio/thumbnails/3.png";
import cuatro from "../assets/img/portfolio/thumbnails/4.png";
import cinco from "../assets/img/portfolio/thumbnails/5.png";
import seis from "../assets/img/portfolio/thumbnails/6.png";

/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>;
<script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>;
<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>; */


const Web=()=>{
    return (
        <div>
            {/* <h1>Hola YUDER</h1> */}
        <body id="page-top">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <div className="container px-4 px-lg-5">
                    {/* <a className="navbar-brand" href="#page-top">Start Bootstrap</a> */}
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                            <li className="nav-item"><a className="nav-link" href="registro">Registro</a></li>
                            {/* <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Masthead*/}
            <header className="masthead">
                <div className="container px-4 px-lg-5 h-100">
                    <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end">
                            <h1 className="text-white font-weight-bold">Agrupación Liga infantil de Medellín </h1>
                            <hr className="divider" />
                            <h1 className="text-white font-weight-bold">Campeonatos de ajedrez.</h1>
                        </div>
                        <div className="col-lg-8 align-self-baseline">

                            <a className="btn btn-primary btn-xl" href="#portfolio"> Tablas de Posiciones</a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Portfolio*/}
            <div id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-4 col-sm-6">
                            <img className="img-fluid" src={uno}alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal" />

                            {/* Modal-1 */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 1</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bello</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal-2 */}
                        <div className="col-lg-4 col-sm-6">
                            {/* <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name"> */}
                            <img className="img-fluid" src={dos} alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-2" />
                            <div className="modal fade" id="exampleModal-2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 2</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        {/* Modal-3 */}
                        <div className="col-lg-4 col-sm-6">
                            <img className="img-fluid" src={tres} alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-3" />
                            <div className="modal fade" id="exampleModal-3" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 3</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bello</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal-4 */}
                        <div className="col-lg-4 col-sm-6">
                            <img className="img-fluid" src={cuatro} alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-4" />
                            <div className="modal fade" id="exampleModal-4" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 4</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bello</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal-5 */}
                        <div className="col-lg-4 col-sm-6">
                            <img className="img-fluid" src={cinco} alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#exampleModal-5" />
                            <div className="modal fade" id="exampleModal-5" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 5</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bello</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Modal-6 */}
                        <div className="col-lg-4 col-sm-6">
                        
                            <img className="img-fluid rounded float" src={seis} alt="..." type="button"
                                data-bs-toggle="modal" data-bs-target="#torneo6 " />
                            <div className="modal fade " id="torneo6"  tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Lista de Posiciones / Torneo 6</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="img-fluid btn  portfolio-box row " title="">
                                                <thead>
                                                    <tr className="">
                                                        <th scope="col">#</th>
                                                        <th scope="col">Equipo</th>
                                                        <th scope="col">PJ</th>
                                                        <th scope="col">G</th>
                                                        <th scope="col">E</th>
                                                        <th scope="col">P</th>
                                                        <th scope="col">Pts</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>Bello</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>Estrella</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>Cali</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>Medellin</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
            {/* Footer*/}
            <footer className="bg-light py-5">
                <div className="container px-4 px-lg-5">
                    <div className="small text-center text-muted">Copyright &copy; 2021 - Team 4</div>
                </div>
            </footer>
            {/* Bootstrap core JS */}
            {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script> */}
            {/* SimpleLightbox plugin JS*/}
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script> */}
            {/* Core theme JS*/}
            {/* <script src="js/scripts.js"></script> */}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            {/* * *                               SB Forms JS                               * **/}
            {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            {/* <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script> */}
        </body>
        </div>
    )

}
export default Web;

