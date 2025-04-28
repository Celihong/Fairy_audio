import { useState } from "react";
import xx from "../assets/xx.jpg";
import { Heart } from "lucide-react";

const CardStory = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="">
      <div className="mt-10 max-w-60 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-white">
        <a href="#">
          <img src={xx} alt="" />
        </a>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-black">
                Sleeping Beauty
              </h5>
            </a>
            <button
              onClick={toggleLike}
              className="text-xl cursor-pointer hover:scale-110 transition-transform"
            >
              <Heart
                className={`w-6 h-6 ${
                  liked ? "text-red-500 fill-red-500" : "text-gray-400"
                } hover:opacity-80`}
              />
            </button>
          </div>
          <p className="mb-3 font-normal dark:text-black">
            A wicked witch curses a baby princess to vanish on her 16th
            birthday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStory;
