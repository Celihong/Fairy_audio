import React from "react";
import imgregister from "../assets/imgregister.png";
import register1 from "../assets/register -1.jpg";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { Phone } from "lucide-react";
import { KeyRound } from "lucide-react";
import { EyeOff } from "lucide-react";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
const register = () => {
  return (
    <div className="bg-black w-full mx-auto  object-cover max-w-full relative max-sm:h-[170vh]">
      <img
        src={imgregister}
        alt=""
        className=" w-full  filter brightness-40 saturate-80 object-cover h-full max-w-full  "
      />

      <h1 className="absolute inset-0 text-red-700 p-10">REGISTER</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 absolute inset-0 mt-20 ml-28 max-sm:ml-25">
        <div className=" w-[80%]  h-[60%] bg-gray-800 inset-0 border-[3px] border-solid border-black mt-10 rounded-2xl max-sm:w-[70%]  max-sm:mt-5 max-sm:h-91% ">
          <img src={register1} alt="" className="h-full rounded-2xl w-full" />
        </div>
        <div className="w-[80%]  h-[60%] bg-gray-700 inset-0  mt-10 rounded-2xl max-sm:w-[70%]  max-sm:mt-5 max-sm:h-[95%]  ">
          <form className="space-y-3 p-5 max-sm:p-2">
            <p className="text-2xl text-orange-400 max-sm:text-xl max-sm:mt-[-10px]">
              REGISTER
            </p>
            <div className="relative flex  w-full p-2.5 pl-5 rounded-md bg-gray-400 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 gap-3 max-sm:p-1.5 ">
              <User style={{ color: "black" }} />
              <input type="User Name" placeholder="User Name" />
              <span className="absolute left-3 top-3 text-gray-400 ">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="relative flex w-full p-2.5 pl-5 rounded-md bg-gray-400 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 gap-3 max-sm:p-1.5 ">
              <Phone style={{ color: "black" }} />
              <input type="Phone Number" placeholder="Phone Number" />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="relative flex w-full p-2.5 pl-5 rounded-md bg-gray-400 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 gap-3 max-sm:p-1.5 ">
              <Mail style={{ color: "black" }} />
              <input type="email" placeholder="Email address" />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <div className="relative flex w-full p-2.5 pl-5 rounded-md bg-gray-400 text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 gap-3 max-sm:p-1.5 s">
              <KeyRound style={{ color: "black" }} />
              <input type="Password" placeholder="Password" />
              <EyeOff style={{ color: "black" }} />
              <span className="absolute left-3 top-3 text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-[#30CC37] text-white rounded-md hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>

          <div className=" flex items-center mt-[-20px]">
            <div className="flex-grow border-t border-gray-300 ml-10" />
            <span className="mx-2 text-xl text-w ">OR</span>
            <div className="flex-grow border-t border-gray-300 mr-10" />
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
          <div className="mt-2 text-xl text-center text-white max-sm:text-sm">
            Didn’t have account yet?{" "}
            <a href="#" className="text-orange-600  hover:underline ">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
