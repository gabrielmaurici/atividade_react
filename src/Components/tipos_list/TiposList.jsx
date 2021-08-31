import { Component } from "react";
import { ReactComponent as DeleteSvg } from "../../Assets/img/delete.svg"

class TiposList extends Component {

    constructor (props){
        super(props)
        this.lista_Tipos = props.listTipo;
    }

    render(){
        return(
            <section>
                <table>
                    <thead>
                        <th>Tipos De Cervejas Disnponíveis</th>
                    </thead>
                    <tbody>
                        {this.lista_Tipos.map((t, i) =>
                            <tr key = {i}>
                                <td>{t}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default TiposList;