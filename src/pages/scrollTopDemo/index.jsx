import React from "react";
import "./index.scss";
export default function Index() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  const scrollToNum=()=>{
    scrollToAnchor('item_15')
  }

  return (
    <div>
       <button onClick={scrollToNum}>点击滚到第15个</button>
      <div>
        {list.map((item) => {
          return (
            <div className="list-item" id={`item_${item}`} key={`item_${item}`}>{`你哈${item}`}</div>
          );
        })}
      </div>

     
    </div>
  );
}
