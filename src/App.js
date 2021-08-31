import { Component } from 'react';
import './App.css';
import CervejasForm from './Components/cervejas_form/CervejasForm';
import CervejasList from './Components/cervejas_list/CervejasList';
import TipoForm from './Components/tipo_form/TipoForm';
import TiposList from './Components/tipos_list/TiposList';

class App extends Component {
  
  list = [];
  listTipo = [];

  constructor (){
    super()
    this.state = {
      list: this.list,
      listTipo: this.listTipo
    }
  }

  create (model) {
    this.list.push(model);
    this.setState({
      list: this.list
    })
  }

  createTipo (model){
    this.listTipo.push(model)
    this.setState({
      listTipo: this.listTipo
    })
    console.log(this.listTipo)
  }

  delete (id){
    let item = this.list.find(i => i.id === id);
    this.list.splice(item, 1);
    this.setState({
      list: this.list
    })
  }

  render (){
    return (
      <section>
        <CervejasForm create = {this.create.bind(this)} listTipo = {this.state.listTipo} />
        <CervejasList listTipo = {this.state.listTipo} list = {this.state.list} delete = {this.delete.bind(this)}/>
        <TipoForm createTipo = {this.createTipo.bind(this)} />
        <TiposList listTipo = {this.state.listTipo} />
      </section>
    );
  }
}

export default App;
