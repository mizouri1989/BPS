import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
class EmetteurItem extends Component {

    deleteEmetteur=()=>
    {  const {item} = this.props
    axios.delete(`/delete-emetteur/${item._id}`)
    .then(()=>
        this.props.deleteReducer(item._id))
        .catch((err)=>alert(err))
    }
    render() { 
        const {item}=this.props
        return ( 
            <div style={{display: 'flex'}}>
            <h4>{item.name}</h4>
           <div style={{display: 'flex',     marginLeft: '3%'}}> 
           <Link to={`/editEmetteur:_id ${item._id}`}>
            <button  >modifier</button> 
            </Link>
            <button onClick={this.deleteEmetteur}>supprimer</button>
            </div>
            <br></br>
            
            </div>
         );
    }
}
const mapDispatchToProps=(dispatch)=>
{
    return {
        deleteReducer:_id=>
        {
            dispatch({
                type:'REMOVE',
                _id
            })
        }
    }
}
 
export default connect(null,mapDispatchToProps)(EmetteurItem);