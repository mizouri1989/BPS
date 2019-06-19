import {combineReducers} from 'redux'


const data=[]

const Ticket=[] 

const EmetteurListReducer=(state=data,action)=>
{
    switch(action.type){
        case 'REFRESH-LIST':
            return(state=action.data)
        case 'ADD-EMETTEUR':
             return(
            state.concat(action.newemetteur))
        case 'REMOVE':
             return (
             state.filter(el=>el._id!==action._id))
         case 'EDIT_EMM':
             return (
             state.map(el=>el._id===action.editemm._id? el=action.editemm:el)
                )
        default: return (state)
    }
    
}




const TicketListReducer=(state=Ticket,action)=>
{
    switch(action.type){
        case 'REFRESHTICKET':
            return(state=action.Ticket)
        case 'ADD-TICKET':
             return(
            state.concat(action.neweticket))
        default: return (state)
    }
    
}

 
const Reducers= combineReducers({EmetteurListReducer,TicketListReducer});

export default Reducers;