import React, { use, useRef } from "react";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

function SignInPage() {
  const {
    signInWithGoogle,
    handleShowPassword,
    showPassword,
    LoginInWithEmailAndPassword,
  } = use(AuthContext);
  const emailRef = useRef()
  
  const location = useLocation()
  const navigate = useNavigate();

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginWithEmailAndPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginInWithEmailAndPassword(email , password)
    .then(result => {
      console.log(result)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
  };

  
  const handleForgetPassword = () => { 
      const email = emailRef.current.value;
      sendPasswordResetEmail(auth , email)
      .then(() => {
        alert('Plase check Your Email')
      })
      .catch(error => {
        console.log(error.message)
      })
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLoginWithEmailAndPassword}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <div className=" relative">
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name="password"
                      className="input w-full"
                      required
                      placeholder="Password"
                    />
                    <button
                      className=" absolute top-3 right-3 cursor-pointer"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-2xl" />
                      ) : (
                        <FaRegEye className="text-2xl" />
                      )}
                    </button>
                  </div>
                  <div onClick={handleForgetPassword}>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <button
                onClick={handleSignInWithGoogle}
                className="btn bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>

              <p className="text-accent">
                Create new Account{" "}
                <Link className="text-blue-500 underline" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage;
