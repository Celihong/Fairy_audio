import CardStory from "./CardStory";
import image1 from "../assets/xx.jpg";
import image2 from "../assets/snow-white.jpg";

const StoryList = () => {
  return (
    <div className="flex gap-4">
      <CardStory image={image1} />
      <CardStory image={image2} />
    </div>
  );
};

export default StoryList;
