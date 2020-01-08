import { CHANGE_INPUT } from './actionType'

const defaultState={
  inputValue: 'chenyubaba'
}
export default (state=defaultState,action)=>{
  if(action.type===CHANGE_INPUT){
    return {...action.value}
  }
  return state
}