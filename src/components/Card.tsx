import { useState } from "react";
import StarIcon from "../assets/logos/icon-star.svg";

interface CardProps {
  numArray: number[];
  changeValue: (value: number) => void;
  handleSubmit: () => void;
}

const Card = ({ numArray, changeValue, handleSubmit }: CardProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleClick = (value: number) => {
    changeValue(value);
    setActiveIndex(value); // Set the active index to the clicked index
  };

  return (
    <div className="card">
      <img src={StarIcon} alt="Star Icon" className="star-icon" />
      <h1>How did we do?</h1>
      <p>
        Please let use know how we did with your support request. All feedback
        is appreciated to help us improve our offering!
      </p>
      <div className="ratings-layout">
        {numArray.map((num) => (
          <span
            key={num}
            className={`ratings ${
              activeIndex === num ? "bg-[#fb7413]" : "bg-[#35414d]"
            }`}
            onClick={() => handleClick(num)}
          >
            {num}
          </span>
        ))}
      </div>
      <button type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default Card;
