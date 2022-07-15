import React, {useState} from "react";
import Feedback from "../Feedback/Feedback";
import Comments from "./Comments";
import Users from "./Users";



export default function MenuDashboard(){
  
    const [component,setComponent] = useState("")

    const handleSideBar= ()=>{
        if (component=== 'usuarios') return (<Users/>)
        if (component === 'comentarios') return (<Comments/>)
        if (component === "feedback" ) return (<Feedback/>)
    }

    return (
        <div class="container-fluid" > 
        <div class="row">   
      <nav class="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
    
        <div class="position-sticky pt-3">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="h2">Dashboard</span>
          </a>
          <hr/>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="#" class="nav-link text-white" onClick={e=>setComponent("peliculas")}>
                Peliculas
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Funciones de peliculas
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                Balance de ventas
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" onClick={e=>setComponent("usuarios")}>
                Usuarios Registrados
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white" onClick={e=>setComponent("comentarios")}>
                Administrar comentarios
              </a>
            </li>
            <li>
             <a href="#" class="nav-link text-white" onClick={e=>setComponent("feedback")} > 
                Feedback
              </a>
            </li>
          </ul>
          <hr/>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
            <strong>admin</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
        </div>
      </nav>
       {handleSideBar()}
        </div>
        </div>
    )
}
