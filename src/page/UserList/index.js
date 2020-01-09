import React, {useState,useEffect} from 'react';

function UserList(){
  const [ count,setCount ] = useState(0)

  useEffect(()=>{
    console.log('click')
    return ()=>{
      console.log('========')
    }
  })
  return (
    <div>
      {count}
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default UserList