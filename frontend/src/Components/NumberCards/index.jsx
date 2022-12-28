import React, { useState } from "react";

import AnimatedNumber from "animated-number-react";

const NumberCards = (props) => {
  const { value } = props;

  const [counterDuration, setCounterDuration] = useState(800);

  const formatValue = (value) => `${Math.round(value)}`;

  return (
    <div>
      <AnimatedNumber
        value={value}
        formatValue={formatValue}
        duration={counterDuration}
      />
    </div>
  );
};
export default NumberCards;
