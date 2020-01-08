import { CHANGE_INPUT,SAVE } from './actionType'

export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

export const saveStore = (value)=>({
  type:SAVE,
  value
})