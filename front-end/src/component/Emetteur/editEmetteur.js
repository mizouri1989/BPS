import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import axios from 'axios'
class EditEmetteur extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            name:""
         }
    }

    handleChange=(e)=>
    {
       this.setState({
           [e.target.name]:e.target.value
       })
    }
    componentDidMount=()=>
    {
        this.setState({
            ...this.props.data.filter(el=>el._id===this.props._id)[0]
        })
    }
    editEmetteur=()=>
    {
      axios.put(`/editEmetteur/:id ${this.state._id}`,{
        name:this.state.name
      })  
      .then(()=>this.props.editEmetteurReducer({...this.state})) 
      .catch((err)=>alert(err))
    }

    render() { 
   
        return ( 
            <div>
            <h1>Modifier Emetteur</h1>
             Name :
             <input  type='text' name='name' value={this.state.name}  onChange={this.handleChange}/>
       
         
             <button onClick={this.editEmetteur}>Edit Contact </button>
            

            </div> 
         );
    }
}

const mapStateToProps=(state)=>
{
    return {
        data:state.ContactListReducer
    }
} 

const mapDispatchToProps=(dispatch)=>
{
    return {
        editEmetteurReducer:editemm=>
        {
            dispatch({
                type:'EDIT_EMM',
                editemm
            })
        }
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(EditEmetteur);