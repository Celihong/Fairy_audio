import ting from "../assets/ting.png";
import Card from "../layout/cardstory";

const Story = () => {
  const DataCard = [
    {
      id: 1,
      title: "Sleeping",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      title: "Sleeping",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 7,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 9,
      title: "Sleeping",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 10,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 12,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      title: "Sleeping",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 14,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 15,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 16,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 17,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 18,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 19,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 20,
      title: "Sleeping Beauty",
      desc: "A wicked witch curses a baby princess to vanish on her 16th birthday.",
      imgSrc:
        "https://images.unsplash.com/photo-1593642633270-c4e9b1f8c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className=" mt-10 sm:ml-[200]">
      <form className="w-full max-w-xl ml-165 px-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-800 border border-gray-300 rounded-[20px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Fairy Tale"
            required
          />
        </div>
      </form>

      <div className="bg-gray-100 w-full max-w-6xl mx-auto mt-10 rounded-xl p-6 flex flex-col sm:flex-row gap-8">
        <img
          src={ting}
          alt="Fairy"
          className="w-40 sm:w-60 md:w-72 lg:w-80 h-auto self-center sm:ml-0"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 items-center w-full">
          <h2 className="col-span-1 sm:col-span-3 text-purple-700 font-semibold text-2xl sm:text-3xl mb-2 text-center sm:text-leftA Sleeping Beauty Short Story & Audiobook">
            Choose a story here
          </h2>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">Adventure</span>
          </label>

          <div></div>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">1-4</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">Classic</span>
          </label>

          <div></div>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">4-6</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">Animal</span>
          </label>

          <div></div>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-800">7-11</span>
          </label>
        </div>
      </div>
      <p className="ml-[90px] mt-10 text-[40px]">Classic</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4  ml-18">
        {DataCard.map((item) => {
          return (
            <div>
              <Card title={item.title} desc={item.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Story;
