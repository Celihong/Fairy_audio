import imglogin from "../assets/imglogin.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
const login = () => {
  return (
    <div className="bg-black w-full mx-auto relative object-cover h-auto max-w-full">
      <img
        src={imglogin}
        alt=""
        className=" w-full  filter brightness-40 saturate-80 object-cover h-[750px] max-w-full"
      />
      <div className="absolute w-[50%] h-[90%] bg-gray-800 inset-0 mx-auto mt-10 rounded-2xl max-sm:w-[70%] max-sm:h-[570px] max-sm:mt-20">
        <h2 className="text-white p-7 text-4xl max-sm:text-2xl">LOGIN</h2>
        <form className="space-y-4">
          <div className="ml-20 max-sm:ml-10">
            <label className="block text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-[85%] p-2 border border-green-400 rounded-md focus:outline-none hover:border-[#2F80ED] "
            />
          </div>
          <div className="ml-20 max-sm:ml-10">
            <label className="block text-lg font-medium text-white">
              Password
            </label>
            <input
              type="email"
              className="mt-1 w-[85%] p-2 border border-green-400 rounded-md focus:outline-none hover:border-[#2F80ED] "
            />
          </div>
        </form>
        <div className="flex items-center mt-4 ml-20 max-sm:ml-10 max-sm:mt-2">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 w-6 h-6 max-sm:w-5 max-sm:h-5 "
          />
          <label
            htmlFor="remember"
            className="text-white text-xl max-sm:text-sm"
          >
            Remember me
          </label>
        </div>
        <button className="flex w-[75%] ml-20 mt-5 items-center justify-center rounded-md bg-[#30CC37] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 hover:bg-[#2F80ED] max-sm:ml-10">
          Login
        </button>
        <div className="mt-4 text-lg text-white ml-20 max-sm:ml-10 max-sm:text-sm">
          Didn’t have account yet?{" "}
          <a href="#" className="text-orange-600 hover:underline">
            Register
          </a>
        </div>
        <div className="my-4 flex items-center p-20 mt-[-45px] max-sm:p-10 max-sm:mt-1 ">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-xl text-white font-bold">OR</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4 mt-[-70px]">
          <button>
            <img src={google} alt="" className="w-20 h-20" />
          </button>
          <button>
            <img src={facebook} alt="" className="w-30 h-15" />
          </button>
          <button>
            <img src={linkedin} alt="" className="w-15 h-15" />
          </button>
        </div>
        <div className="mt-4 text-xl text-white text-center max-sm:text-sm">
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
