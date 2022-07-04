import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props){

    return (

        <>
        <div className="row">
      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>{props.Texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>{props.Texto}</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">0
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>
              {props.Texto}
              </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>
              {props.Texto}
              </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>
              {props.Texto}
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-sm-12 my-2">
        <div className="card box-shadow campus-boxes">
          <div className="card-header">
            {props.Titulo}
          </div>
          <div className="card-body">
            <img className="img-fluid mb-3" src={props.Image} alt="Inscripcion"/>
            <p>
            {props.Texto}
            </p>
          </div>
        </div>
      </div>
    </div>
  <div/>
  
  </>   

        
    )


}

export default Card;