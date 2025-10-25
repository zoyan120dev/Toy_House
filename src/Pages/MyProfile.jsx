import React, { useContext } from "react"; 
import userImage from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";

function MyProfile() {
  const { user, updatedUser, setUser } = useContext(AuthContext); 

  const handleUpdateMyprofile = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const photo = event.target.photo.value

    updatedUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto flex gap-10 items-center mt-40">
      <div className="flex space-y-3.5 flex-col">
        <img
          className="w-23 rounded-full h-23"
          src={`${user ? user.photoURL : userImage}`}
          alt=""
        />
        <p className="text-xl font-bold text-secondary">
          Name: {user && user?.displayName}
        </p>
        <p className="text-accent">Email:{user ? user?.email : ''}</p>
      </div>
      <div>
        {/* Name */}
        <form onSubmit={handleUpdateMyprofile}>
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
          <button className="btn bg-secondary px-10 mt-2 text-white">
            Change Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyProfile;
