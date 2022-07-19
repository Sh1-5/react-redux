import React from 'react'

import { connect } from '../utils/connect'
import { decrement, subNumber } from '../store/actionCreators'

function About2(props) {
  return (
    <div>
      <h2>About2</h2>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.decrement()}>-1</button>
      <button onClick={() => props.subNumber(15)}>-15</button>
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
    decrement: function () {
      dispatch(decrement())
    },
    subNumber: function (num) {
      dispatch(subNumber(num))
    }
  }
}
const EnhanceAbout2 = connect(mapStateToProps, mapDispatchToProps)(About2)

export default EnhanceAbout2
