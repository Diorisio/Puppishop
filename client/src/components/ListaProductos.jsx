
import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react"
import Ultimo from "./Ultimo";
import productos from "../services/productos"
import { useNavigate } from "react-router-dom";


function ListaProductos(props) {
    let image="/images/productsDB/";
    let det="/detalle/";
    console.log(props)
    const navigate = useNavigate();
    

    const [currentpro,setpro]=useState()
    setpro(props)


    useEffect(()=>{
        return <ListaProductos></ListaProductos>
        
    },[currentpro])
    

    
    
    
    return(
        <React.Fragment>
          <main id="main"  className="mainListaProductos">
              { props=={}?
              <>

                 {props.currentitem.productos.map(item=>
                    <article>
                        
                          <img src={image+item.imagen} alt=""/> 
                         <div className="vermas">
                             <div className="descripcionMas">
                                <p >Tipo: {item.mascota.tipo_mascota}  </p>
                                 <p >Razas:  {item.raza} </p>
                                 <p >Descripcion: {item.categoria} </p>
                                 <p >Tamanio: {item.tamanio} kg</p>
                                 <p >Precio: $ {item.precio} </p> 
                             </div>
                             <button><Link to={det+item.id}>DETALLES</Link></button>
                         </div>
                    </article>
                 )} 

                 <Ultimo item={props.currentitem.productos}/>
                 </>
                 :
                 <>
                <h1>hola</h1>
                 
                 
                 </>
      }  

                 
                 
                     

        </main>
        </React.Fragment>
           
    )
}
export default ListaProductos