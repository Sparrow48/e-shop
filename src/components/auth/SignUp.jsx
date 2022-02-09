import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { debounce } from "../../utils/Debounce";
import { signUpUser } from "./../../store/AuthSlice";
import { AuthUrl, authKey } from "./../../config";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  let url = `${AuthUrl}signUp?key=${authKey}`;

  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  if (isAuthenticated) {
    history.push("/");
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(
      signUpUser({
        url,
        email,
        password,
      })
    );
  };

  const optimise_EmailHandler = debounce(emailHandler, 500);
  const optimise_PasswordHandler = debounce(passwordHandler, 500);

  return (
    <div>
      <div className="mt-24 text-center">
        {/* <div className="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div> */}
        <h2 className="text-4xl tracking-tight">Create your account</h2>
        <span className="text-sm">
          Already have an account?&nbsp;
          <NavLink to="/login" className="text-blue-500">
            Login
          </NavLink>
        </span>
      </div>
      <div className="flex justify-center mx-4 my-2 md:mx-0">
        <form
          className="w-full max-w-xl p-6 bg-white rounded-lg shadow-md"
          onSubmit={signUpHandler}
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-full">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
                type="email"
                onChange={optimise_EmailHandler}
                required
              />
            </div>
            <div className="w-full px-3 mb-6 md:w-full">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
                type="password"
                onChange={optimise_PasswordHandler}
                required
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-full">
              <button className="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none active:bg-white focus:border-gray-500">
                Sign Up
              </button>
            </div>
          </div>
          {error ? <h1> {error} </h1> : null}
        </form>
      </div>
    </div>
  );
}

export default SignUp;
