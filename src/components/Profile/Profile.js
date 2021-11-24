import React from "react";
import "./Profile.css";

function Profile({ user, isProfileOpen, toggleModal }) {
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>{user.name}</h1>
          <h4>Images submitted: {user.entries}</h4>
          <p>Member since: {new Date(user.joined).toLocaleDateString()}</p>
          <hr />
          <label htmlFor="username" className="mt-2 fw6">
            Username:
          </label>
          <input
            className="pa2 ba w-100"
            type="text"
            name="username"
            id="username"
            placeholder={user.name}
          />
          <label htmlFor="age" className="mt-2 fw6">
            Age:
          </label>
          <input
            className="pa2 ba w-100"
            type="text"
            name="age"
            id="age"
            placeholder={user.age}
          />
          <label htmlFor="pet" className="mt-2 fw6">
            Pet:
          </label>
          <input
            className="pa2 ba w-100"
            type="text"
            name="pet"
            id="pet"
            placeholder={user.pet}
          />
          <div
            className="mt-4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
}

export default Profile;