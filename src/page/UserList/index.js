import React, {useState} from 'react';

function UserList(){
  const [ count,setCount ] = useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default UserList