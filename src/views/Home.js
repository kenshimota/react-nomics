import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
            <Link to="/product">
                ir a product
            </Link>
            <br/>
            Hola Mundo
        </div>
    );
}

export default Home;