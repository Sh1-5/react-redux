import React from 'react'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'
import { increment, addNumber } from '../store/actionCreators'

function Home3(props) {
  return (
    <div>
      <h2>Home3</h2>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addNumber(15)}>+15</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: function () {
      dispatch(increment())
    },
    addNumber: function (num) {
      dispatch(addNumber(num))
    }
  }
}
const EnhanceHome3 = connect(mapStateToProps, mapDispatchToProps)(Home3)

export default EnhanceHome3
