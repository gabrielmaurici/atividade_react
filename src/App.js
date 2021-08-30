import { Component } from 'react';
import './App.css';
import CervejasForm from './Components/cervejas_form/CervejasForm';
import CervejasList from './Components/cervejas_list/CervejasList';
import TipoForm from './Components/tipo_form/TipoForm';

class App extends Component {
  list = [];
  constructor (){
    super()
    this.state = {
      list: this.list
    }
  }

  create (model) {
    this.list.push(model);
    this.setState({
      list: this.list
    })
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
        <CervejasForm create = {this.create.bind(this)} />
        <CervejasList list = {this.state.list} delete = {this.delete.bind(this)}/>
        <TipoForm />
      </section>
    );
  }
}

export default App;
