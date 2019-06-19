import React , {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import ItemTicket from './ItemTicket';


class ListeTicket extends Component{
    componentDidMount=()=>{
        axios.get("/list-tickets").then((res)=>this.props.UpdateListReducer(res.Ticket))
    }
    render() {
        return (
         <div>
            {this.props.Ticket.map((el,index)=>
            <ItemTicket  key={index} item={el}/>)}
          </div>

        );
}}

const mapStateToProps=(state)=>{
    return {
        Ticket:state.TicketListReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        UpdateListReducer:Ticket=>
        {
            dispatch({
                type:'REFRESHTICKET',Ticket
                
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ListeTicket);