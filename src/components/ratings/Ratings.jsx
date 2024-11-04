import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";

function Ratings() {
  const [rating, setRating] = useState(4);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log(`New rating: ${newRating}`);
  };

  return (
    <div className="mt-5">
      <div className="flex items-center gap-x-2">
        <span className="font-semibold">Ratting</span>
        <span className="text-[#ffd700]">
          <FaStar />
        </span>
      </div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={25}
        isHalf={true}
        value={rating}
        activeColor="#ffd700"
      />
    </div>
  );
}

export default Ratings;
