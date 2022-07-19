import React, { PureComponent } from 'react'

import store from '../store'
import { decrement, subNumber } from '../store/actionCreators'

export default class About extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div>
        <h2>About</h2>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.decrement()}>-1</button>
        <button onClick={() => this.subNumber(15)}>-15</button>
      </div>
    )
  }
  decrement() {
    store.dispatch(decrement())
  }
  subNumber(num) {
    store.dispatch(subNumber(num))
  }
}
