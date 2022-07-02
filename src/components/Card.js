import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscripcion from '../images/inscripcion.jpeg'


function Card(props){

    return (

        <>
        <div class="container">
    <div class="row my-4">
      <div class="col-md-12">
        <img class="img-fluid box-shadow" src={require(props.image).default} alt="Campus Almagro ORT"/>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            {props.Titulo}
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>
                
                {props.Texto}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            Inscripción ciclo lectivo 2021 - Nivel Secundario
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el
              ciclo
              2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            Inscripción ciclo lectivo 2021 - Nivel Secundario
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el
              ciclo
              2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            Inscripción ciclo lectivo 2021 - Nivel Secundario
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el
              ciclo
              2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            Inscripción ciclo lectivo 2021 - Nivel Secundario
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el
              ciclo
              2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-sm-12 my-2">
        <div class="card box-shadow campus-boxes">
          <div class="card-header">
            Inscripción ciclo lectivo 2021 - Nivel Secundario
          </div>
          <div class="card-body">
            <img class="img-fluid mb-3" src="img/inscipcion.jpeg" alt="Inscripcion"/>
            <p>Por la gran cantidad de solicitudes, debimos cerrar la inscripción al curso de ingreso 2020, para iniciar en el
              ciclo
              2021 del nivel secundario de nuestra Escuela. ¡Muchas gracias a todos por confiar en nuestro proyecto educativo!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

        </>   

        
    )


}

export default Card;