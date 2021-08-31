import { Component } from "react";

class TipoForm extends Component {

    tipo;

    handlerTipo (event){
        this.tipo = event.target.value;
        event.stopPropagation();
    }

    handlerEnter (event){
        if(event.keyCode === 13) {
            alert("Deu certo");
            console.log(this.tipo)
            this.handlerSalvar(event);
            event.stopPropagation();
            event.preventDefault();
        }
    }

    handlerSalvar (event){
        this.props.createTipo(this.tipo)
        console.log(this.tipo);
        event.stopPropagation();
        event.preventDefault();
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
                        onChange = {this.handlerTipo.bind(this)}
                        onKeyDown = {this.handlerEnter.bind(this)}     
                    />
                </form>
            </section>
        )
    }
}

export default TipoForm;