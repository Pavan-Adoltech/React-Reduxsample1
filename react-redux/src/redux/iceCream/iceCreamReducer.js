import { BUY_ICECREAM } from './iceCreamTypes'

const initialState ={
    numOfIceCreams :20
}

const iceCreamReducer = (State = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM :return {
            ...State,
            numOfIceCreams:State.numOfIceCreams-1
        }
        default:return State
    }
}

export default iceCreamReducer

