import { useEffect, useState } from "react";
import WheelSpinner from "../WheelSpinner/WheelSpinner";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const Countdown = ({ purchaseDate }) => {
  const { ticketNumber, setTicketNumber } = useAuth();
  const [timeLeft, setTimeLeft] = useState("");

  // useEffect(() => {
  //   const targetDate = new Date(purchaseDate);
  //   targetDate.setDate(targetDate.getDate() + 7); // Add 7 days

  //   const countdownInterval = setInterval(() => {
  //     const now = new Date();
  //     const timeRemaining = targetDate - now;

  //     if (timeRemaining <= 0) {
  //       clearInterval(countdownInterval);
  //       setTimeLeft("You can spin the wheel now!");
  //     } else {
  //       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  //        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
  //        const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
  //       const seconds = Math.floor((timeRemaining / 1000) % 60);
  //       setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //     }
  //   }, 1000);

  //   return () => clearInterval(countdownInterval);
  // }, [purchaseDate]);

  useEffect(() => {
    const targetDate = new Date(purchaseDate);
    targetDate.setSeconds(targetDate.getSeconds() + 10); // Add 10 seconds

    const countdownInterval = setInterval(() => {
      const now = new Date();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        setTimeLeft("You can spin the wheel now!");
      } else {
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        setTimeLeft(`${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [purchaseDate]);

  return (
    <div>
      {timeLeft !== "You can spin the wheel now!" ? (
        <div  className="text-center">
          <div><p className="text-[30px] font-medium">{timeLeft}</p></div>
        </div>
      ) : (
        <div className="text-center">
          <div>{timeLeft}</div>{" "}
          <div className="">
            <h1>Ready to Spin?</h1>
            <Link to="/spinner">
              <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
                Yes
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Countdown;
