import { Component } from "react";

class CervejasForm extends Component {

    constructor (props){
        super(props)
        this.lista_Tipos = props.listTipo;
    }
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
    handlerSelectTipo(event) {
        this.tipo = event.target.value;
        console.log(this.tipo)
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
                    <select 
                        onClickCapture = {this.handlerSelectTipo.bind(this)}
                        name="tipo" 
                        id="tipo"
                    >
                        <option disabled>Selecione um Tipo</option>
                        {this.lista_Tipos.map((c, i) =>
                            <option key= {i} value= {c} >{c}</option>
                            
                        )}
                    </select>
                    <br /><br />

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