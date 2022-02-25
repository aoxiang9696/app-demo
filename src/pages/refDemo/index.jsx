import React, { useRef } from "react";

export default function RefDemo() {
  const divRef = useRef(null);

  return (
    <div>
      <div ref={divRef} style={{width:'99px',height:'99px',background:'red'}}></div>
      <button
        onClick={() => {
          console.log(divRef);
          divRef.current.style.background='blue'
        }}
      >
        点点
      </button>
    </div>
  );
}
