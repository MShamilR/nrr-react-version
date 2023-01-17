import { useState } from "react";
import AbandonedGame from "./AbandonedGame";
import "./App.css";
import RegularGame from "./RegularGame";
import RevisedGame from "./RevisedGame";

function App() {
  const [defOPI, setDefOPI] = useState();
  const [defYTS, setDefYTS] = useState();
  const [defYTO, setDefYTO] = useState();
  const [yourTeamBalls, setYourTeamBalls] = useState();

  const [isYourTeamAllOut, setIsYourTeamAllOut] = useState();
  const [isYourOpponentAllOut, setIsYourOpponentAllOut] = useState();

  return (
    <>
      <h1>{yourTeamBalls}{defOPI}</h1>
      <RegularGame
        defOPI={defOPI}
        setDefOPI={setDefOPI}
        setDefYTS={setDefYTS}
        isYourTeamAllOut={isYourTeamAllOut}
        setIsYourTeamAllOut={setIsYourTeamAllOut}
        isYourOpponentAllOut={isYourOpponentAllOut}
        setIsYourOpponentAllOut={setIsYourOpponentAllOut}
        setDefYTO={setDefYTO}
        setYourTeamBalls={setYourTeamBalls}
      />
      <RevisedGame />
      <AbandonedGame />
    </>
  );
}

export default App;
