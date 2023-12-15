import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase-config";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [dateOfB, setDateOfB] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isArtist, setIsArtist] = useState(false);
  const navigate = useNavigate();

  console.log(isArtist,'testtttt');
  const signUp = () => {
   if (!isArtist) {
     axios.post("http://127.0.0.1:3000/signup/user" , {
       name : registerName,
       email : registerEmail,
       dateOfBirth : dateOfB,
       phoneNum : registerPhone
     }).then((res) => console.log("added!")).catch((err) => console.log(err))
    } else {
      axios.post("http://127.0.0.1:3000/signup/artist", {
        name: registerName,
        email: registerEmail,
        dateOfBirth: dateOfB,
      }).then((res) => console.log("added!")).catch((err) => console.log(err))
    }
  };

  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      const user = userCredential.user;

      localStorage.setItem("user", user);

      console.log("User signed up successfully:", user);

      // Redirect to the sign-in page after successful registration
      navigate("/SignIn");
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <>
      <div className="relative bg-[linear-gradient(113deg,#984D38_-30.3%,#181E41_58.12%)] flex w-full h-screen flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1131px] mt-28 mb-20 max-md:max-w-full max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-center mt-8 max-md:max-w-full max-md:mt-10">
                <img
                  className="mt-[-20%]"
                  loading="lazy"
                  src="https://s3-alpha-sig.figma.com/img/a59c/1e4a/905494d13b92596161da408b21648aa6?Expires=1703462400&Signature=ph1rrOffokpkaiR4HZ8Oto0UR8ExmYlJNwE~n8GUBRj-dY0aM872pO9HOO4OCQnL4pjzj7-RoUDXKjGa7hWNRtLRnl~inYgsjE3UixIJ0E4civNZdYCfEJVVfvQj7Z~mQsUjNH-PPlJfmaNKrQpUdGbqpbn9uUbbIRsTmaQ9HpeoOSOUyUagyWLHVO4IQroHJYpaK5NslbdGnQ8M734dDOkkR3PMRlhLvDaRQXMr311xZlau86vMV2sGUbDz~1~41C~32b0fi-a~OfsdC0UhuhoZH8ZR4xRsUElxBAQI7gmQ1fJYzPJGQ4FWHm6HgwgZRgrIGUWW2VRxT5OSIW6-CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
                <div className="text-white text-center text-3xl font-bold leading-10 tracking-wide self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                  Explore the world of meta fashion
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[36%] h-[36%] ml-5 max-md:w-full max-md:ml-0 mt-[-10%]">
              <div className="bg-login bg-opacity-20 flex grow flex-col w-full py-7 rounded-xl max-md:max-w-full max-md:mt-10">
                <div className="self-stretch flex flex-col px-9 max-md:max-w-full max-md:px-5">
                  <div className="text-white text-center text-3xl font-extrabold tracking-wide self-stretch">
                    Sign Up
                  </div>
                  <div className="font-medium font-sfprodisplay ml-1.5 md:ml-0 mt-[22px] text-deep_purple-400 text-lg tracking-[0.36px]">
                    <span className="text-white-A700 text-left font-normal">
                      Already a Member?
                    </span>
                    <span className="text-deep_purple-400 text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-deep_purple-400 text-left">
                      Sign In
                    </span>
                  </div>
                  <br />
                  <div className="relative max-w-xs">
                    <svg
                      className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(event) => {
                        setRegisterEmail(event.target.value);
                      }}
                      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <br />
                  <div class="flex items-center justify-center">
                    <div class="w-full flex gap-3">
                      <input
                        class="capitalize shadow-2xl p-3 ex w-full outline-none focus:border-solid focus:border-[1px] border-[#035ec5] placeholder:text-black"
                        type="text"
                        placeholder="Name"
                        id="Name"
                        name="Name"
                        required=""
                        onChange={(e) => setRegisterName(e.target.value)}
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <input
                        class="p-3 capitalize shadow-2xl  glass w-full placeholder:text-black outline-none focus:border-solid focus:border-[1px] border-[#035ec5]"
                        type="text"
                        placeholder="+216"
                        id="PhoneNum"
                        name="PhoneNum"
                        onChange={(e) => setRegisterPhone(e.target.value)}
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-600">Password</label>
                    <div className="relative max-w-xs mt-2">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        onChange={(event) => {
                          setRegisterPassword(event.target.value);
                        }}
                        className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      className="block text-sm font-medium text-gray-700"
                      for="dob"
                    >
                      Date of Birth
                    </label>
                    <div class="mt-1">
                      <input
                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required=""
                        type="date"
                        name="dob"
                        onChange={(e) => setDateOfB(e.target.value)}
                        id="dob"
                        className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex items-center justify-center mt-6">
                  <span class="mr-3 text-gray-700 font-medium"></span>
                  <label class="inline-flex items-center">
                    {/* <input
                      type="checkbox"
                      class="form-radio h-5 w-5 text-pink-600"
                      value="User"
                      checked={isUser}
                      onChange={() => {setIsUser(!isUser)
                        console.log(isUser)
                      }}
                    /> */}
                    {/* <span class="ml-2 text-gray-700">Buyer</span> */}
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input
                      type="Checkbox"
                      class="form-radio h-5 w-5 text-purple-600"
                      // value="Artist"
                      checked={isArtist}
                      onChange={() => {setIsArtist(!isArtist)
                        console.log(isArtist)
                      }}
                    />
                    <span class="ml-2 text-gray-700">Artist</span>
                  </label>
                </div>

                <div class="mt-6 flex items-center justify-between"></div>
                <button
                  onClick={(register, signUp)}
                  className="text-white text-base whitespace-nowrap justify-center items-stretch bg-[linear-gradient(214deg,#B75CFF_6.04%,#671AE4_92.95%)] mt-6 px-5 py-1 rounded-[121px] self-end"
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
        /
      </div>
    </>
  );
};

export default SignUp;
