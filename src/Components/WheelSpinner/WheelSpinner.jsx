import { useState } from "react";
import { Wheel } from "react-custom-roulette";
import React from "react";

const WheelSpinner = ({ ticketNumber}) => {
  const generateRandomNumbers = (count, exclude) => {
    const numbers = [];
    while (numbers.length < count) {
      const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit number
      if (randomNum !== exclude && !numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers;
  };

  // Generate 8 random numbers and include the user's ticketNumber
  const [data] = useState([
    { option: ticketNumber.toString(), style: { backgroundColor: "black" } },
    ...generateRandomNumbers(8, ticketNumber).map((num) => ({
      option: num.toString(),
    })),
  ]);

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber); // Set the random prize number
      setMustSpin(true); // Set to spin the wheel
    }
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        outerBorderColor={"#000000"}
        outerBorderWidth={8}
        innerRadius={30}
        innerBorderColor={"#000000"}
        innerBorderWidth={10}
        radiusLineColor={"#dedede"}
        radiusLineWidth={5}
        fontSize={18}
        onStopSpinning={() => {
          setMustSpin(false); // Stop spinning
          if (data[prizeNumber].option === ticketNumber.toString()) {
            alert("Congratulations! You won!");
          } else {
            alert("Sorry, better luck next time!");
          }
        }}
        // Add easing function for smoother deceleration
        animationDuration={2} // Slow deceleration for smooth end
        animationEase="cubic-bezier(0.68, -0.55, 0.27, 1.55)" // Smooth easing
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  );
};

export default WheelSpinner;



