import React, { useRef,useEffect ,useState} from "react";
const Child = (props) => {
  const {text,onSubmit}=props
  // const [count,setCount]=useState(1)
  console.log(text)

  return <div>
        <div>{Math.random()}</div>  
        <input type="text" name="" id=""  onChange={(e)=>{
          const { value } = e.target;
          onSubmit(value)
        }}/>
        <button onClick={()=>{}}>提交</button>
    </div>;
};

export default function RefDemo() {
  const textRef = useRef(null);

  const handleSubmit =(a) => {
    console.log(textRef.current,a);
    // ...
  }
  useEffect(()=>{
    console.log(textRef.current)
  },[textRef.current])

  return (
    <div>
      <div style={{ width: "99px", height: "99px", background: "red" }}></div>
      {/* <button
        onClick={() => {
          // 可以通过useRef改变元素样式
          console.log(divRef);
          divRef.current.style.background = "blue";
        }}
      > */}

      {/* 点点
      </button> */}
      <input
        type='text'
        onChange={(e) => {
          const { value } = e.target;
          textRef.current = value;
        }}
      />

      <Child  onSubmit={handleSubmit} text={textRef.current}/>
    </div>
  );
}


