import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
      
        <Nav style={{    padding: '2%', backgroundColor:'#626B6B',fontSize:' 23px'}}>
         <NavItem >
          <Link to="/AjoutEmetteur">Ajouter Emetteur</Link>
          </NavItem>
          
          <NavItem style={{    marginLeft: '1%'}} >
          <Link to="/ListeEmetteur"> Liste Emetteurs</Link>
          </NavItem>
          
         
          <NavItem style={{    marginLeft: '1%'}}>
            <Link to ="/AjoutTicket"> Ajouter ticket</Link>
          </NavItem>
         
          <NavItem style={{    marginLeft: '1%'}}>
          <Link to ='/ListeTicket'>Liste Tickets</Link>  
          </NavItem>
        
         
        </Nav>
      <br></br>
      <br></br>
      <br></br>
      </div>
    );
  }
}