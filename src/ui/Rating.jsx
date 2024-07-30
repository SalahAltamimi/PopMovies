import { useState } from "react";

function Rating({ userRating, setRating }) {
  const [temp, settemp] = useState(0);
  function onMouseOver(index) {
    setRating(index + 1);
    settemp(index + 1);
  }
  return (
    <div className="space-x-2 mb-4 flex items-center justify-center">
      {Array.from({ length: 5 }, (_, i) => (
        <Stars
          fullfiled={userRating > i}
          onClick={() => onMouseOver(i)}
          onMouseEnter={() => setRating(i + 1)}
          onMouseLeave={() => setRating(temp ? userRating : 0)}
          key={i}
        />
      ))}
    </div>
  );
}

function Stars({ fullfiled, onClick, onMouseLeave, onMouseEnter }) {
  return (
    <>
      <div
        onClick={onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        {fullfiled ? (
          <span className="text-yellow-400 text-3xl cursor-pointer">
            <ion-icon name="star"></ion-icon>
          </span>
        ) : (
          <span className="text-yellow-400 text-3xl cursor-pointer">
            <ion-icon name="star-outline"></ion-icon>
          </span>
        )}
      </div>
    </>
  );
}

export default Rating;
