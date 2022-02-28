import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EslintDemo from './pages/eslintDemo'
// import EffectDemo from './pages/effectDemo'
// import RefDemo from './pages/refDemo/index'
// import MemoDemo from './pages/useMemoDemo'
// import ReactVideo from './pages/reactVideo/videoplugin'
import EventBusEmitDemo from "./pages/EventBusEmitDemo/index";
import EventBusListener from "./pages/EventBusListener/index";
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
        <Route path="/" element={<EventBusEmitDemo/>} />
        <Route path="/listener" element={<EventBusListener/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
