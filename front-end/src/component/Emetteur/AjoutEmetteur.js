import React , {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AjoutEmetteur extends Component{
    constructor(props)
    {
        super(props)
        this.state=({
        name:""
        })
    }
    addEmetteur=(e)=>
    { alert(this.state.name + "a été ajouté")
            axios.post('/add_emetteur',{...this.state}) 
            .then(()=>this.props. addContactReducer({...this.state})) 
            .catch((err)=>alert(err))
          }

    handlechange=(e)=>
    {
        this.setState  ({[e.target.name]:e.target.value})
    }
    render() {
        return (
          <div>
          <Form>
        <FormGroup style={{    textAlign: 'center',    marginLeft: '20%',

    width: '50%'}}>
            <br></br>
            <br>
            </br>
          <Label for="Nom">Nom</Label>
          <Input type="text" name="name" value={this.state.name} onChange={this.handlechange} placeholder="Votre Nom" />
        </FormGroup>
        </Form>
        <Button  style={{   marginLeft: '42%'}} onClick={this.addEmetteur}>Ajouter</Button>
          </div>
        );
      }
    }
    
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            addContactReducer :newemetteur=>{
            dispatch({
              type:'ADD-EMETTEUR',
            newemetteur
            })
          }
        }
      }
      
      export default connect(null,mapDispatchToProps) ( AjoutEmetteur);