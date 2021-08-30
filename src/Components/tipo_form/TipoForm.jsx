import { Component } from "react";

class TipoForm extends Component {

    handlerEnter (event){
        if(event.keyCode === 13) {
            alert("Deu certo");
            event.stopPropagation();
            event.preventDefault();
        }
    }

    render() {
        return(
            <section>
                <form >
                    <input 
                        type="text" 
                        id="tipo" 
                        name="tipo" 
                        placeholder="Cadastre um Tipo de Cerveja"
                        onKeyDown = {this.handlerEnter}     
                    />
                </form>
            </section>
        )
    }
}

export default TipoForm;