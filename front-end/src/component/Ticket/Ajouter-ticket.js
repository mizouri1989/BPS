import React , {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';


import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class AjoutTicket extends Component{
    constructor(props)
    {
        super(props)
        this.state=({
        nameticket:"",
        numticket:""
        })
    }
    addTicket=(e)=>
    { alert(this.state.nameticket + "a été ajouté")
            axios.post('/add_ticket',{...this.state}) 
            .then(()=>this.props. addTicketReducer({...this.state})) 
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
          <Label for="Nom">Nom Ticket</Label>
          <Input type="text" name="nameticket" value={this.state.name} onChange={this.handlechange} placeholder="Nom ticket" />
          <Input type="text" name="numticket" value={this.state.name} onChange={this.handlechange} placeholder="num ticket" />
        </FormGroup>
        </Form>
        <Button  style={{   marginLeft: '42%'}} onClick={this.addTicket}>Ajouter</Button>
          </div>
        );
      }
    }
    
    
    const mapDispatchToProps=(dispatch)=>{
        return{
            addTicketReducer :neweticket=>{
            dispatch({
              type:'ADD-TICKET',
              neweticket
            })
          }
        }
      }
      
      export default connect(null,mapDispatchToProps) ( AjoutTicket);