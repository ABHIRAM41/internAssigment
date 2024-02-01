import React,{Fragment} from "react";
import First from './components/First'
import Second from "./components/Second";
import Third from "./components/Third";
import Forth from "./components/Forth";
function App() {
  return (
    <Fragment>
      <First/>
      <Second />
      <Third/>
      <Forth/>
    </Fragment>
  );
}

export default App;
