import { Component } from "react";

class CervejasForm extends Component {

    id;
    nome;
    tipo;
    
    handlerInputId(event) {
        this.id = event.target.value;
        event.stopPropagation();
    }
    handlerInputNome(event) {
        this.nome = event.target.value;
        event.stopPropagation();
    }
    handlerInputTipo(event) {
        this.tipo = event.target.value;
        event.stopPropagation();
    }
    handlerSubmitSalvar (event){
        let cerveja = {'id': this.id, 'nome': this.nome, 'tipo': this.tipo}
        event.stopPropagation();
        event.preventDefault();
        this.props.create(cerveja);
    }
    
    render() {
        return(
            <section>
                <form onSubmit= {this.handlerSubmitSalvar.bind(this)} id="form-cervejas">
                    <label>ID: </label>
                    <input 
                        type="text" 
                        id="id" 
                        name="id" 
                        placeholder="Digite um Id"
                        onChange= {this.handlerInputId.bind(this)}
                    />    <br /><br />
                    <label>Nome: </label>
                    <input 
                        type="text"
                        id="nome" 
                        name="nome" 
                        placeholder="Digite um Nome" 
                        onChange= {this.handlerInputNome.bind(this)}
                    />   <br /><br />
                    <label>Tipo: </label>
                    <input 
                        type="text" 
                        id="tipo" 
                        name="tipo" 
                        placeholder="Digite o Tipo de sua Cerveja"
                        onChange= {this.handlerInputTipo.bind(this)} 
                    />    <br /><br />          
                    <input 
                        type="submit" 
                        value="Enviar"

                    />
                </form>    
            </section>
        )
    }
}

export default CervejasForm;