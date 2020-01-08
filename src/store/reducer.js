import { CHANGE_INPUT,SAVE } from './actionType'

const defaultState={
  inputValue: 'chenyubaba'
}
export default (state=defaultState,action)=>{
  if(action.type===CHANGE_INPUT){
    return {...action.value}
  }
  if(action.type===SAVE){
    return {...action.value}
  }
  return state
}