import React from 'react'
import {connect} from 'react-redux'
import {buyCandy} from '../redux'

function CakeContainer(props) {
  return (
    <div>
    <h1>Number of Candies - {props.numOfCandy}</h1>
    <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  )
}


const mapStateToProps = state => {
    return {
        numOfCandy: state.candy.numOfCandy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCandy:() => dispatch(buyCandy())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CakeContainer)
