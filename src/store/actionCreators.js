import { CHANGE_INPUT,SAVE,GETID } from './actionType'
import Axios from 'axios'

export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

export const saveStore = (value)=>({
  type:SAVE,
  value
})

export const getId = ()=>{
  return (dispatch)=>{
    Axios.get('/getId').then(res=>{
      console.log(res.data.id)
      dispatch(saveStore({userId:res.data.id}))
    })
  }
}