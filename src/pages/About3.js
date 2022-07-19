import React from 'react'

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'
import { decrement, subNumber } from '../store/actionCreators'

function About3(props) {
  return (
    <div>
      <h2>About3</h2>
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
const EnhanceAbout3 = connect(mapStateToProps, mapDispatchToProps)(About3)

export default EnhanceAbout3
