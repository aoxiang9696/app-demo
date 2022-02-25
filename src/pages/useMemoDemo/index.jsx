import React, { useCallback, useState, useMemo} from "react";
import Child from './child'

export default function MemoDemo() {
  const [a, setA] = useState(1);

  const clickHandle = useCallback(() => {
    setA((a) => {
      return a + 1;
    });
  }, [a]);
  const b=useMemo(()=>{
      return a + 'b'
  },[a])

  return (
    <div>
      <button onClick={clickHandle}>点点</button>
      <div>{b}</div>
      <span>{a}</span>
     <Child/>
    </div>
  );
}



// import Button from './Button';
// export default function App() {
//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);
//     const [count3, setCount3] = useState(0);
  
//     const handleClickButton1 = () => {
//       setCount1(count1 + 1);
//     };
  
//     const handleClickButton2 = useCallback(() => {
//       setCount2(count2 + 1);
//     }, [count2]);
  
//     return (
//       <div>
//         <div>
//           <Button onClickButton={handleClickButton1}>Button1</Button>
//         </div>
//         <div>
//           <Button onClickButton={handleClickButton2}>Button2</Button>
//         </div>
//         <div>
//           <Button
//             onClickButton={() => {
//               setCount3(count3 + 1);
//             }}
//           >
//             Button3
//           </Button>
//         </div>
//       </div>
//     );
//   }
  
