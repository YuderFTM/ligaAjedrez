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
       <section class="container camp">
       <h1>Crear Campeonato</h1>
       <hr/>
          <div class="row g-3 contenedor">
            <div class="col-auto contenedores">
             
                <div class="col"><label for="" >Nombre del Campeonato</label></div>
                <div  class="col"><label for="" >Lugar</label></div>
                <div  class="col"><label for="" >Número de equiipos</label></div>
                <div  class="col"><label for="" >Premio 1er Puesto</label></div>
                <div  class="col"><label for="" >Premio 2er Puesto</label></div>
                <div  class="col"><label for="" >Fecha de apertura</label></div>
                <div  class="col"><label for="" >Fecha de Clausura</label></div>
              </div>
             
            <div class="col-auto contenedores" >
              <div class="camp_imput">
                <div  class="col1"><input type="text" id="" class="form-control imp_camp" aria-describedby="passwordHelpInline"/></div>
                <div  class="col1"><input type="text" id="" class="form-control imp_camp" /></div>
                <div  class="col1"><input type="number" id="" class="form-control imp_camp" /></div>
                <div  class="col1"><input type="text" id="" class="form-control imp_camp" /></div>
                <div  class="col1"><input type="text" id="" class="form-control imp_camp" /></div>
                <div  class=" col2">
                  <input type="date" id="" class="form-control imp_camp1" />
                  <select class="form-select col2 col3" aria-label="Default select example">
                    <option selected>Seleccione</option>
                    <option value="1">Inscripción Abierta</option>
                    <option value="2">Inscripción Cerrada</option>
                    <option value="3">En Progreso</option>
                    <option value="4">Terminada</option>
                    <option value="5">Cancelado</option>
              </select></div>
                <div  class="col1"><input type="date" id="" class="form-control imp_camp1" /></div>
              </div>
            </div>
            <div class="but-camp">
          <button type="button" class="btn btn-outline-success ">Crear</button>
          {/* <!-- <button type="button" class="btn btn-outline-danger">Editar</button> --> */}
        </div>
          </div>             
             
          
    </section>
                </body> </div> 
 <Footer /> 
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

        
                </div>
    );

};
export default Campeonatos;