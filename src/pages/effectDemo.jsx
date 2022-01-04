import React,{ useState,useEffect,useRef }from "react";
const getUsername = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("John");
    }, 3000);
  });
};

export default function EffectDemo() {
  const [count, setCount] = useState(0);

  const countRef=useRef(count);
  countRef.current=count;
  
  useEffect(() => {
    userNameHandle()
  }, []);
  const userNameHandle=()=>{
    getUsername().then((res) => {
      console.log(res,count);
    });
  }
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
    </div>
  );
}
