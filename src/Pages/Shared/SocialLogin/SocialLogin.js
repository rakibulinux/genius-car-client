import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import JWTAuthToken from "../../../APIS/JWTAuthToken/JWTAuthToken";

const SocialLogin = () => {
  const { googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        JWTAuthToken(user, navigate, from);
        toast.success("Login success with Google", user.displayName);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleFacebookLogin = () => {
    facebookLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        JWTAuthToken(user, navigate, from);
        toast.success("Login success with Facebook", user.displayName);
      })
      .catch((err) => toast.error(err.message));
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        JWTAuthToken(user, navigate, from);
        toast.success("Login success with Github", user.displayName);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="flex gap-5 justify-center my-5">
      <button
        onClick={handleFacebookLogin}
        className="btn bg-gray-120 text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
        type="submit"
      >
        <FaFacebook />
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn bg-gray-120 text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
        type="submit"
      >
        <FaGithub />
      </button>
      <button
        onClick={handleGoogleLogin}
        className="btn bg-gray-120 text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
        type="submit"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
