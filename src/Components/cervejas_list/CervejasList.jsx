import { Component } from "react";
import { ReactComponent as DeleteSvg } from "../../Assets/img/delete.svg"


class CervejasList extends Component{

    constructor (props){
        super(props)
        this.lista_cervejas = props.list; 
    }

    delete (id, event){
        event.stopPropagation();
        this.props.delete(id);
    }

    render(){
        return(
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Tipo</th>
                            <th>Deletar | Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.lista_cervejas.map((c, i) =>
                            <tr key= {i}>
                                <td>{c.id}</td>
                                <td>{c.nome}</td>
                                <td>{c.tipo}</td>
                                <td>
                                    <DeleteSvg onClick= {this.delete.bind(this, c.id)} />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default CervejasList;