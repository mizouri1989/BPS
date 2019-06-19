import React , {Component} from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import EmetteurItem from './EmetteurItem';


class ListeEmetteur extends Component{
    componentDidMount=()=>{
        axios.get('/list-emetteurs').then((res)=>this.props.refreshListReducer(res.data))
    }
    render() {
       
        return (
         <div>
            {this.props.data.map((el,index)=>
            <EmetteurItem  key={index} item={el}/>)}
          </div>

        );
}}

const mapStateToProps=(state)=>{
    return {
        data:state.EmetteurListReducer
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        refreshListReducer:data=>
        {
            dispatch({
                type:'REFRESH-LIST',data
                
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ListeEmetteur);