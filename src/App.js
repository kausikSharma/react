import React,{Component} from 'react';
import Menu from './components/MenuComponents';
import { Navbar,NavbarBrand } from "reactstrap";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Navbar bg="dark" color="primary">
            <div className="container">
              <NavbarBrand href="/" style={{color:"white"}}>Confuion </NavbarBrand>
            </div>
          </Navbar>
          <Menu/>
      </div>
    );
  }
}

export default App;
