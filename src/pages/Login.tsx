import imglogin from "../assets/imglogin.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
const login = () => {
  return (
    <div className="bg-black w-full mx-auto relative object-cover max-w-full">
      <img
        src={imglogin}
        alt=""
        className=" w-full  filter brightness-40 saturate-80 object-cover h-[750px] max-w-full"
      />
      <div className="absolute w-[50%] p-5 h-[90%] bg-gray-800 inset-0 mx-auto mt-10 rounded-2xl max-sm:w-[70%]  max-sm:mt-5 max-sm:h-91% ">
        {" "}
        <h2 className="text-white  text-4xl max-sm:text-2xl ">LOGIN</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-white max-sm:text-sm">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full p-2 border border-green-400 rounded-md focus:outline-none "
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-white max-sm:text-sm">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full p-2 border border-green-400 rounded-md focus:outline-none"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 w-7 h-7 max-sm:w-4 max-sm:h-4"
            />
            <label
              htmlFor="remember"
              className="text-lg text-white ml-2 max-sm:text-sm"
            >
              Remember me
            </label>
          </div>
          <button className="flex items-center justify-center rounded-2xl bg-[#30CC37] text-white px-63 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 hover:bg-[#2F80ED] max-sm:px-25">
            Login
          </button>
        </form>
        <div className="mt-4 text-xl text-white max-sm:text-sm">
          Didn’t have account yet?{" "}
          <a href="#" className=" hover:underline">
            Register
          </a>
        </div>
        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-sm text-gray-600">OR</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4">
          <button>
            <img
              src={google}
              alt="Google"
              className="w-20 h-20 max-sm:w-15 max-sm:h-15"
            />
          </button>
          <button>
            <img
              src={facebook}
              alt="Facebook"
              className="w-30 h-15 max-sm:w-20 max-sm:h-10"
            />
          </button>
          <button>
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-15 h-15 max-sm:w-10 max-sm:h-10"
            />
          </button>
        </div>
        <div className="mt-4 text-xl text-center text-white max-sm:text-sm">
          Need an account?{" "}
          <a href="#" className="text-orange-600 hover:underline">
            SING UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default login;
