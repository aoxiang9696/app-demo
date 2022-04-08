import React, { useEffect } from "react";
import "./index.scss";
export default function Index() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    const dom1 = document.querySelector("#dom1");
    console.log(dom1.getBoundingClientRect());
    console.log(window.innerWidth, window.innerHeight, "window相关，视口大小");
    console.log(
      document.documentElement.offsetWidth,
      document.documentElement.offsetHeight,
      "document相关，文档大小"
    );
    console.log(window.scrollX, window.scrollY, "当前文档的滚动位移");
    console.log(dom1.offsetWidth, dom1.offsetHeight, "dom1的offset宽高"); // 包括pedding+content+border
    console.log(dom1.offsetLeft, dom1.offsetTop, "dom1的offset位置(坐标)");
    console.log(dom1.clientWidth, dom1.clientHeight, "dom1的client宽高"); //padding+content
    console.log(dom1.clientLeft,dom1.clientTop,'dom的client坐标');//??
    console.log(dom1.scrollWidth,dom1.scrollHeight,'dom的内容宽高');
    console.log(dom1.scrollLeft,dom1.scrollTop,'dom的内容scroll位移');
  }, []);

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  const scrollToNum = () => {
    scrollToAnchor("item_15");
  };

  return (
    <div>
      <button onClick={scrollToNum}>点击滚到第15个</button>
      <button onClick={()=>{
        const dom1 = document.querySelector("#dom1");
        console.log(dom1.scrollLeft,dom1.scrollTop,'dom的内容scroll位移');
      }}>dom内容滚动位移</button>
      <div id="dom1">
        世界你好，灵渊你好， 世界你好，灵渊你好 世界你好，灵渊你好 世界你好，灵渊你好 世界你好，灵渊你好 世界你好，灵渊你好 世界你好，灵渊你好 世界你好，灵渊你好
      </div>
      <div className="list-box">
        {list.map((item) => {
          return (
            <div className="list-item" id={`item_${item}`} key={`item_${item}`}>
              <div>{`你哈${item}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
