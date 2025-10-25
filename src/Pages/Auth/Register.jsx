import React, { use } from 'react'
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
import { FaRegEye , FaEyeSlash} from "react-icons/fa";


function Register() {
  const {
    registerWithEmailAndPassword,
    handleShowPassword,
    showPassword,
    setUser,
    updatedUser,
  } = use(AuthContext);
  const navigate = useNavigate()

  const handleSignInEmailAndPassword = (event) => {
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const photo = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      registerWithEmailAndPassword(email, password)
        .then((result) => {
          const users = result.user;
          updatedUser({displayName: name , photoURL: photo}).then(() => {
              setUser({...users ,displayName: name , photoURL: photo})
              navigate("/");
          })
           .catch(error => {
             console.log(error)
             setUser(users) 
           })
        })
        .catch((error) => {
          console.log(error);
        });
  };
  

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignInEmailAndPassword}>
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input w-full"
                    required
                    placeholder="Name"
                  />
                  {/* Photo url */}
                  <label className="label">Photo Url</label>
                  <input
                    type="text"
                    name="photo"
                    className="input w-full"
                    required
                    placeholder="Photo Url"
                  />

                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input w-full"
                    required
                    placeholder="Email"
                  />
                  {/* Password */}
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
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p className="text-accent">
                Already have an Account{" "}
                <Link className="text-blue-500 underline" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register