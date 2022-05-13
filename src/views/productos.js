import React from "react";
import { Link } from "react-router-dom";

function Product(){
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

export default Product; 