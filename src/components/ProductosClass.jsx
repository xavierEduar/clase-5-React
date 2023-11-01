import { Component } from "react";

class ProductosClass extends Component{

    constructor(){
        super()

        this.state = {
            texto : "Ingrese su Nombre",
            cantidad : 0
        }
    }

    render(){
        return(
            <>
            <h2>Componente productos</h2>
            
            </>
        )
    }
}

export default ProductosClass