import React, { use } from 'react'
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthProvider';
function Register() {
  const {signInWithEmailAndPassword} = use(AuthContext)

  const handleSignInEmailAndPassword = (event) => {
      event.preventDefault()
      const save = event.target;
      const name = save.name.target
      const photo = save.photo.value;
      const email = save.email.value;
      const password = save.password.value;

      signInWithEmailAndPassword(email , password)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handlePasswordSHow = () => {
    
  }
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
                    name='name'
                    className="input w-full"
                    placeholder="Name"
                  />
                  {/* Photo url */}
                  <label className="label">Photo Url</label>
                  <input
                    type="text"
                    name='photo'
                    className="input w-full"
                    placeholder="Photo Url"
                  />

                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name='password'
                    className="input w-full"
                    placeholder="Email"
                  />
                  {/* Password */}
                  <label className="label">Password</label>
                  <input
                    type="password"
                    name='password'
                    className="input w-full"
                    placeholder="Password"
                  />
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