import React from "react";
import '../style/principal.css';
import '../js/scripts1.js';
import {Link} from 'react-router-dom'

const Navig=()=> {
    return (
      
          <nav className='menu '>
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark tam" >
              <Link class="d-flex nav-item align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" to="/inicio" >
                  <span class="fs-3">Inicio</span>
                </Link>
              <hr />
              <ul class="nav nav-pills flex-column mb-auto">
               
                <li>
                  <Link to="/campeonatos" class="nav-link text-white fs-5">
                  Campeonatos
                  </Link>
                </li>
                <li>
                  <Link to="/partidos" class="nav-link text-white fs-5">
                   partidos
                  </Link>
                </li>
                <li>
                  <Link to="/equipos" class="nav-link text-white fs-5">
                    equipos
                  </Link>
                </li>
                <li>
                  <Link to="/" class="nav-link text-white fs-5">  
                    salir
                  </Link>
                </li>
              </ul>
                       
          </div>
        </nav>
     

)};

export default Navig;