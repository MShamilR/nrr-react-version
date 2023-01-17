import React from "react";

const Balls = ( {setYourTeamBalls} ) => {
  const options = [
    {
      label: "Select Balls",
      value: "",
    },

    {
      label: "0",
      value: 0,
    },

    {
      label: "1",
      value: 1,
    },

    {
      label: "2",
      value: 2,
    },

    {
      label: "3",
      value: 3,
    },

    {
      label: "4",
      value: 4,
    },

    {
      label: "5",
      value: 5,
    },
  ];
  return (
    <label>
      In Balls
      <select onChange={(e) => setYourTeamBalls(e.target.value)}>
        {options.map(
          (option, index) =>
            (index === 0 && (
              <option value={option.value} disabled hidden selected>
                {option.label}
              </option>
            )) || <option value={option.value}>{option.label}</option>
        )}
      </select>
    </label>
  );
};

export default Balls;
