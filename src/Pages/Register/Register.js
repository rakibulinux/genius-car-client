import React, { useContext, useState } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUserAccount, updateUserProfile, verifyUserAccount } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photoURL: "",
    email: "",
    password: "",
  });

  const { name, photoURL, email, password } = userInfo;
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    createUserAccount(email, password)
      .then((result) => {
        // const user = result.user;
        toast.success("User created successfully");
        verifyUserAccount()
          .then(() => {
            toast.success("Please verify your email");
          })
          .catch((err) => {
            toast.error(err.message);
          });
        updateUserProfile(name, photoURL)
          .then(() => {
            toast.success("Profile update success");
          })
          .catch((err) => {
            toast.error(err.message);
          });
        form.reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleNameChange = (e) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };
  const handlePhotoURLChange = (e) => {
    setUserInfo({ ...userInfo, photoURL: e.target.value });
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
          <h1 className="text-5xl font-semibold text-center">Register</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                value={name}
                onChange={handleNameChange}
                type="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                value={photoURL}
                onChange={handlePhotoURLChange}
                type="text"
                placeholder="Your PhotoURL"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <input
                className="btn border-none bg-orange-750 hover:bg-orange-700"
                value="Register"
                type="submit"
              />
            </div>
          </form>
          <div className="text-center">
            <p className="font-semibold">Or Sign Up with</p>
            <SocialLogin />
            <p className="mb-5 text-gray-250">
              Already have an account?
              <Link className="text-orange-750 font-semibold ml-2" to="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
