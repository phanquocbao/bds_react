import { useState } from "react";
// import { useFormik } from "formik";
import isEmpty from "validator/lib/isEmpty";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../utils/api/axios";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [validateMsg, setValidateMsg] = useState("");
  const navigate = useNavigate();

  const onChangeName = (e) => {
    const value = e.target.value;
    console.log("🚀 ~ file: Login.js:16 ~ onChangeName ~ value:", value);
    setUserName(value);
  };

  const onChangePassWord = (e) => {
    const value = e.target.value;
    console.log("🚀 ~ file: Login.js:21 ~ onChangePassWord ~ value:", value);
    setPassWord(value);
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
      // Authorization:
      //   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODA1MzE1MjEsImV4cCI6MTY4MDUzNTEyMSwiZW1haWwiOiJVc2VyQGdtYWlsLmNvbSIsImlkIjoiMiIsInNpdGUiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg4OFwvZGVtb2JhdGRvbmdzYW5cL3dvcmRwcmVzcyIsInVzZXJuYW1lIjoiVXNlciJ9.s3BIfZREKbrFAahRBlY_jDogn-vsMtdCtkuykXc6xpY",
    },
  };

  const data = {
    username: username,
    password: password,
  };

  const validateAll = () => {
    const msg = {};
    if (!isEmpty(username)) {
      msg.username = "Nhập username";
    }
    if (!isEmpty(password)) {
      msg.password = "Nhập password";
    }

    setValidateMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = validateAll();
    // if (!isValid) return;
    axios
      .post("/simple-jwt-login/v1/auth", data, config)
      .then((response) => {
        console.log(response);
        localStorage.setItem('jwt',response.data.jwt);
        navigate('/admin');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleInputChange = (e) => {
  //   const target = e.target;
  //   const value = target.value;
  //   const username = target.name;
  //   setLogin({...Login, [username ]: value});
  // }
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="name"
                onChange={onChangeName}
              />
              <p className="text-orange text-xs italic">
                {validateMsg.username}
              </p>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                onChange={onChangePassWord}
              />
              <p className="text-orange text-xs italic">
                {validateMsg.password}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
