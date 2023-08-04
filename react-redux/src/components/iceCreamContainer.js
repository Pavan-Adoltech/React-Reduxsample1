import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
  return (
    <div className='centered-container'>
    <h1>Number of Icreams - {props.numOfIceCreams}</h1>
    <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}


const mapStateToProps = State => {
    return {
        numOfIceCreams: State.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream:() => dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(IceCreamContainer)
