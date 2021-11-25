import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet,
    };
  }

  onFormChange = (event) => {
    switch (event.target.name) {
      case "username":
        this.setState({ name: event.target.value });
        break;
      case "age":
        this.setState({ age: event.target.value });
        break;
      case "pet":
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  };

  onProfileUpdate = (data) => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: window.sessionStorage.getItem("token"),
      },
      body: JSON.stringify({ formInput: data }),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 304) {
          this.props.toggleModal();
          this.props.loadUser({ ...this.props.user, ...data });
        }
      })
      .catch(console.error);
  };

  render() {
    const { toggleModal, user } = this.props;
    const { name, age, pet } = this.state;

    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img
              src="http://tachyons.io/img/logo.jpg"
              className="h3 w3 dib"
              alt="avatar"
            />
            <h1>{this.state.name}</h1>
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
              onChange={this.onFormChange}
              value={this.state.name}
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
              onChange={this.onFormChange}
              value={this.state.age}
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
              onChange={this.onFormChange}
              value={this.state.pet}
              placeholder={user.pet}
            />
            <div
              className="mt-4"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                onClick={() => this.onProfileUpdate({ name, age, pet })}
              >
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
}
export default Profile;
