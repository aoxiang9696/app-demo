import React, { useState ,useEffect} from 'react';

function EslintDemo() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
const clickHandle=()=>{
   
      if(count===0){
        setCount(count=>count+1)
    }else{
        setCount(count=>count+2)
    }
  
}

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickHandle}>
        Click me
      </button>
    </div>
  );
}
export default EslintDemo;