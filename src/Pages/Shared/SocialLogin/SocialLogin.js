import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin, facebookLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success("login success with google", user.displayName);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div className="text-center">
      <p className="font-semibold">Or Sign In with</p>
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
          onClick={handleGoogleLogin}
          className="btn bg-[#F5F5F8] text-gray-150 rounded-full border-none hover:bg-orange-750 hover:text-white"
          type="submit"
        >
          <FaGoogle />
        </button>
      </div>
      <p className="mb-5 text-gray-250">
        Already have an account?
        <Link className="text-orange-750 font-semibold ml-2" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SocialLogin;
