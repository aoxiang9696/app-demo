import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EslintDemo from './pages/eslintDemo'
// import EffectDemo from './pages/effectDemo'
// import RefDemo from './pages/refDemo/index'
// import MemoDemo from './pages/useMemoDemo'
// import ReactVideo from './pages/reactVideo/videoplugin'
import EventBusEmitDemo from "./pages/EventBusEmitDemo/index";
import EventBusListener from "./pages/EventBusListener/index";
import SocketDemo from "./pages/socketDemo/index";
import ScrollTopDemo from './pages/scrollTopDemo/index'
function App() {
  return (
    // <div className="App">
    // {/* <EslintDemo/> */}
    // {/* <EffectDemo/> */}
    // {/* <ReactVideo/>*/}
    //  {/* <RefDemo/> */}
    //  {/* <MemoDemo/> */}
    //  <EventBusDemo/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/eventbusdemo" element={<EventBusEmitDemo/>} />
        <Route path="/listener" element={<EventBusListener/>} />
        <Route path="/socketdemo" element={<SocketDemo/>}/>
        <Route path="/" element={<ScrollTopDemo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
