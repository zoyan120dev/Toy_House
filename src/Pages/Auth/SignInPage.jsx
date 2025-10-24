import React from 'react'
import { Link } from 'react-router';

function SignInPage() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-base-100 w-full min-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
              <p className='text-accent'>Create new Account <Link className='text-blue-500 underline' to='/register'>Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInPage