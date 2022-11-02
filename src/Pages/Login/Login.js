import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    loginUserAccount,
    resetUserPassword,
    googleLogin,
    githubLogin,
    facebookLogin,
  } = useContext(AuthContext);
  const { email, password } = userInfo;

  const handleLogin = (e) => {
    e.preventDefault();
    loginUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success(user.displayName, "Login Success");
        console.log(user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
    console.log(userInfo);
  };

  const handleReset = () => {
    resetUserPassword();
  };
  const handleEmailChange = (e) => {
    setUserInfo({ ...userInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-gray-150">
          <h1 className="text-5xl font-semibold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                type="email"
                placeholder="Your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button
                  onClick={handleReset}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn border-none bg-orange-750 hover:bg-orange-700"
                value="Login"
                type="submit"
              />
            </div>
          </form>

          <div className="text-center">
            <p className="font-semibold">Or Sign Up with</p>
            <div className="flex gap-5 justify-center my-5">
              <button
                className="btn bg-[#F5F5F8] text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
                type="submit"
              >
                <FaFacebook />
              </button>
              <button
                className="btn bg-[#F5F5F8] text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
                type="submit"
              >
                <FaGithub />
              </button>
              <button
                className="btn bg-[#F5F5F8] text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
                type="submit"
              >
                <FaGoogle />
              </button>
            </div>
            <p className="mb-5 text-gray-250">
              New to Ginius Car?
              <Link
                className="text-orange-750 font-semibold ml-2"
                to="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
