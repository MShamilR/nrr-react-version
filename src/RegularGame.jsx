import React from "react";
import Balls from "./Balls";
import InputField from "./InputField";

import RadioButton from "./RadioButton";

const RegularGame = ({
  defOPI,
  setDefOPI,
  isYourTeamAllOut,
  setIsYourTeamAllOut,
  setIsYourOpponentAllOut,
  setDefYTO,
  setDefYTS,
  setYourTeamBalls,
  setYourOpponentBalls,
  toggleToDefaultState
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="bodyCont">
        <h2>Calculate Net Run Rate</h2>

        <fieldset className="recheckField"></fieldset>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <InputField
              fieldName="Over per Innings"
              placeholder="Enter Overs"
              className="defOPI"
              onChange={(e) => setDefOPI(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <InputField
              fieldName="Your Team Score"
              placeholder="Enter Score"
              className="defYTS marginRight"
              onChange={(e) => setDefYTS(e.target.value)}
            />
            <p className="rH">Is Your Team All Out?&nbsp;</p>
            <RadioButton
              label={"Yes"}
              onChange={(e) => setIsYourTeamAllOut(true)}
              checked={true === isYourTeamAllOut}
            />
            &nbsp;
            <RadioButton
              label={"No"}
              onChange={(e) => setIsYourTeamAllOut(false)}
              checked={false === isYourTeamAllOut}
            />
          </fieldset>

          <fieldset>
            <InputField
              fieldName="In Overs"
              placeholder="Enter Overs"
              className="defYTO marginRight"
              onChange={(e) => setDefYTO(e.target.value)}
            />
            <Balls setYourTeamBalls={setYourTeamBalls} />
          </fieldset>

          <button type="reset" onClick={toggleToDefaultState}>Reset</button>
        </form>
      </div>
    </>
  );
};

export default RegularGame;
