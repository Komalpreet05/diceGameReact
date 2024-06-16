
import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
import Overlay from "./components/Overlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [showRules, setShowRules] = useState(false);



  const toggleGamePlay = () => {
    setIsGameStarted(prev => !prev);
  }

  function togglesRules() {
    setShowRules((prev) => !prev);
    console.log("toggled");
  }


  function clickHandler() {
    console.log("overlay clicked");
  }

  return (
    <>
      {
        isGameStarted ?
          (<div><GamePlay showRules={showRules} setShowRules={setShowRules} togglesRules={togglesRules} />
            {showRules && <Overlay toggle={togglesRules} />}</div>) :
          (<StartGame toggle={toggleGamePlay} />)
      }
    </>
  )
}

export default App
