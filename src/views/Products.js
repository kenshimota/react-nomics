import React from "react";
import { Link } from "react-router-dom";

function Products(){
    return(
        <div>
            <Link to = '/'>
                ir al inicio
            </Link>
            <br/>
            Mis productos....
        </div>
    );
}

export default Products; 
