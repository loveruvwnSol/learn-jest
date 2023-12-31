import React, { useState } from "react";

type PowerProps = {
  name: string;
};

export const Power: React.FC<PowerProps> = ({ name }) => {
  const [power, setPower] = useState(false);

  return (
    <div style={{ margin: "2em" }}>
      <h1>
        {name} {power ? "ON" : "OFF"}{" "}
      </h1>
      <button onClick={() => setPower(true)} disabled={power ? true : false}>
        ON
      </button>
      <button onClick={() => setPower(false)} disabled={!power ? true : false}>
        OFF
      </button>
    </div>
  );
};
