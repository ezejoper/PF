import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedback } from "../../Redux/actions";

export function Feedback (){
    const dispatch = useDispatch()
    const feedback = useSelector((state) => state.feedback)
    // console.log(feedback)

    useEffect(() => {
        dispatch(getFeedback())
      },[dispatch])
      
    return(
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h3">Feedback</h1>
        {/* <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <input type= "text" placeholder="Buscar feedback..."></input>
            <button type="button" className="btn btn-sm btn-outline-secondary">Buscar</button>
          </div>
          </div> */}
        </div>

        <div className="table-responsive">
        <table className="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">Feedback del usuario</th>
              <th scope="col">Nombre de usuario</th>
              <th scope="col">ID del usuario</th>
              {/* <th scope="col">Modificar</th> */}
            </tr>
          </thead>


        {/* <h1>Titulo de feedback</h1> */}
        <tbody>
        {feedback?.map((f)=> 
            (
              <tr key={f.userId} >
                <td>{f.Text}</td>
                <td>{f.user.username}</td>
                <td>{f.userId}</td>
                </tr>
            )
            )}
            </tbody>
        </table>
        </div>
        </main>

    )
}