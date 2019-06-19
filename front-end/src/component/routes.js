import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AjoutEmetteur from './Emetteur/AjoutEmetteur';
import ListeEmetteur from './Emetteur/ListEmetteurs';
import EditEmetteur from './Emetteur/editEmetteur';
import AjoutTicket from './Ticket/Ajouter-ticket';
import ListeTicket from './Ticket/ListTicket'
import Navbar from './navbar'




class Routes extends Component {
    
    render() { 
        return ( <div>
                 <Navbar/>
           <Route exact path="/AjoutEmetteur" component={AjoutEmetteur}/>
           <Route exact path="/ListeEmetteur" component={ListeEmetteur}/>
           <Route exact path="/editEmetteur:_id" render={props=><EditEmetteur _id={props.match.params._id}/>}/>
           <Route exact path="/AjoutTicket" component={AjoutTicket}/>
           <Route exact path="/ListeTicket" component={ListeTicket}/>
        </div> );
    }
}
 
export default Routes;