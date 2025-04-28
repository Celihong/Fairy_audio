import Hero from "../assets/hero.jpg";
const HeroSection = () => {
  return (
    <div className="w-full relative object-cover max-w-full">
      <img
        src={Hero}
        alt=""
        className=" w-full  filter brightness-40 saturate-80 object-cover h-[750px] max-w-full "
      />
      <div className="absolute inset-0  bg-opacity-50 p-6 rounded-xl max-w-md ml-6 mt-6">
        <h1 className="text-4xl font-semibold leading-snug mb-4 text-white">
          Making <br /> a little more <br />{" "}
          <span className="text-yellow-300 text-white">magical.</span>
        </h1>
        <p className="mb-2 text-white">
          Welcome to the world’s <br /> largest collection of Fairy Tales.
        </p>
        <p className="mb-4 text-sm text-white">
          Read or listen in our app today! <br />
          <span className="text-gray-300">
            1 month of unlimited access, absolutely free.
          </span>
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow">
          See More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
