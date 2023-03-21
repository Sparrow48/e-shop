import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { debounce } from "../../utils/Debounce";
import PhoneFormItem from "../Form/PhoneFormItem";
import { userSignUp } from "../../store/reducer/AuthSlice";

function SignUp() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState('')
  const [password, setPassword] = useState("");
  const [isUsernameValid, setUsernameValidation] = useState(false)

  const dispatch = useDispatch();

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const signUpHandler = (e) => {
    console.log('signUpHandler');
    e.preventDefault();
    let payload = {
      name,
      username,
      password
    }

    dispatch(userSignUp(payload))
  };

  const optimism_PasswordHandler = debounce(passwordHandler, 500);
  const optimism_NameHandler = debounce(nameHandler, 500)

  return (
    <div>
      <div className="mt-24 text-center">
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
          onSubmit={(e) => signUpHandler(e)}
        >
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-full">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                required
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
                onChange={optimism_NameHandler}
                required
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-full">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                required
                htmlFor="username"
              >
                Username
              </label>
              <PhoneFormItem setUsername={setUsername} setUsernameValidation={setUsernameValidation} />
              {(!isUsernameValid && username.length) ? <p className=" text-red-600 pt-1">Invalid username</p> : ''}
            </div>
            <div className="w-full px-3 mb-6 md:w-full">
              <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                required
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none"
                type="password"
                onChange={optimism_PasswordHandler}
                required
              />
            </div>

            <div className="w-full px-3 mb-6 md:w-full">
              <button disabled={!isUsernameValid} className="block w-full px-3 py-3 font-bold leading-tight text-gray-100 bg-blue-600 border border-gray-200 rounded-lg appearance-none hover:bg-blue-500 focus:outline-none disabled:bg-gray-500 disabled:opacity-25 focus:border-gray-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
