import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { loginUserAccount, resetUserPassword } = useContext(AuthContext);
  const { email, password } = userInfo;

  const handleLogin = (e) => {
    e.preventDefault();
    loginUserAccount(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://genius-car-server-one-self.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("genius-token", data.token);
            navigate(from, { replace: true });
          });
        toast.success(user.displayName, "Login Success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
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

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
