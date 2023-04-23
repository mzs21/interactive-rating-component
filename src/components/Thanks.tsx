import { useContext } from "react";
import ThanksIcon from "../assets/logos/illustration-thank-you.svg";
import { AppContext } from "../contexts/AppContext";

const Thanks = () => {
  const { numValue } = useContext(AppContext);
  return (
    <div className="card place-items-center">
      <img src={ThanksIcon} alt="Thank you" />
      <p className="ratings-result">You selected {numValue} out of 5</p>
      <h1>Thank you!</h1>
      <span className="text-center">
        <p>We appreciate you taking the time to give a rating.</p>
        <p>If you ever need more support, don't hesitate to get in touch!</p>
      </span>
    </div>
  );
};

export default Thanks;
