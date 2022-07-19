import React from 'react'

import { connect } from '../utils/connect'
import { increment, addNumber } from '../store/actionCreators'

function Home2(props) {
  return (
    <div>
      <h2>Home2</h2>
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
const EnhanceHome2 = connect(mapStateToProps, mapDispatchToProps)(Home2)

export default EnhanceHome2
