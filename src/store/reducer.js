const defaultState={
  inputValue: 'chenyubaba'
}
export default (state=defaultState,action)=>{
  if(action.type==='changeInput'){
    return {...action.value}
  }
  return state
}