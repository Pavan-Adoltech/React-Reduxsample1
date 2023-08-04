import { BUY_CANDY } from "./candyTypes"

const initialstate ={
    numOfCandy:10
}

const candyReducer=(state = initialstate,action) => {
    switch(action.type){
        case BUY_CANDY:return{
            ...state,
            numOfCandy:state.numOfCandy-1
        }
        default:return state
    }

}

export default candyReducer
