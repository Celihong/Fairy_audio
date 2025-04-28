import rub from "../assets/sky.png";
import sleep from "../assets/slepping.jpeg";
import { Play } from "lucide-react";

const storydetails = () => {
  return (
    <div className=" w-full mx-auto relative object-cover h-auto max-w-full ">
      <img
        src={rub}
        alt=""
        className=" w-full   object-cover h-[750px] max-w-full"
      />
      <div className=" grid sm:grid-cols-2 md:grid-cols-2  ml-18 justify-between mt-10">
        <div className="ml-30 absolute w-[30%] h-[65%] inset-0  mt-10 ">
          <img src={sleep} alt="" className="h-[100%] w-full " />
        </div>
        <div className="ml-[50%] absolute w-[40%] h-[70%]  inset-0  mt-10 ">
          <h1 className="text-purple-700 text-3xl font-semibold">
            A Sleeping Beauty Short Story & Audiobook
          </h1>
          <p className="mt-8 font-semibold ">
            A wicked witch curses a baby princess to vanish on her 16th
            birthday. Will the King and Queen, along with some trusted fairies,
            be able to keep the princess safe?
          </p>
          <button className="relative mt-10 bg-blue-600 text-white rounded-full px-[100px] py-3 hover:bg-blue-700 transition overflow-hidden">
            <div className="absolute top-2 left-1 bg-blue-400 rounded-full p-2">
              <Play className="w-4 h-4 text-white " fill="white" />
            </div>
            <span className=" font-serif text-lg">Listen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default storydetails;
