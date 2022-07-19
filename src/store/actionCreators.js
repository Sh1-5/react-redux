import { INCREMENT, DECREMENT, ADD_NUMBER, SUB_NUMBER } from './constants'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const addNumber = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}

export const subNumber = (num) => {
  return {
    type: SUB_NUMBER,
    num
  }
}
