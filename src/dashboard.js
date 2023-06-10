import React, { useEffect, useState } from "react";
import "./App.css";
import whale1 from "./whale-8.png";
import whale2 from "./whale2.png";
import userImage from "./user.png";
import logoutImage from "./log-out.png";
import Homedesign from "./Homedesign.jpg";
import whalee from "./whale4.png";
import whale3 from "./whale3.jpg";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://localhost:8000/api"
});

function App() {
  const [login, loginState] = useState();
  const [register, clickRegister] = useState(false);
  const [firstname, setFirstName] = useState("My");
  const [lastname, setLastName] = useState("Profile");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openProfile, setOpenProfile] = useState(false);
  const [profile, setProfile] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    client
      .get("user")
      .then(function (res) {
        loginState(true);
      })
      .catch(function (error) {
        loginState(false);
      });
  }, []);

  function update_page() {
    if (register) {
      clickRegister(false);
    } else {
      clickRegister(true);
    }
  }

  function submitRegistration(e) {
    e.preventDefault();
    client
      .post("register", {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password
      })
      .then(function (res) {
        clickRegister(false);
      });
  }

  function submitLogin(e) {
    e.preventDefault();
    client
      .post("login", {
        email: email,
        password: password
      })
      .then(function (res) {
        loginState(true);
      });
  }

  function clickLogout(e) {
    e.preventDefault();
    client.post("logout", { withCredentials: true }).then(function (res) {
      loginState(false);
    });
    setOpenProfile(false);
    setProfile(false);
  }

  function commentSection() {
    document.getElementById("c").innerHTML = comment;
  }

  if (login) {
    return (
      <div>
        <div className="Uh">
          <img
            src={userImage}
            className="ProfileIcon"
            onClick={() => setOpenProfile((p) => !p)}
          />
          <h3 className="Usert">You</h3>

          {openProfile && (
            <div className="flex flex-col dropDownProfile">
              <button onClick={() => setProfile((p) => !p)} className="pbutton">
                <img className="PImages" src={userImage} />
                Profile
              </button>
              <button onClick={clickLogout} className="pbutton">
                <img className="lImages" src={logoutImage} />
                Logout
              </button>
            </div>
          )}
        </div>
        <div className="Uh2"></div>
        {profile ? (
          <div className="H">
            <img className="aimg" src={whalee} />
            <h1 className="marg">{firstname + " " + lastname}</h1>
            <div className="dive">
              <p>Recent Post</p>
              <h4 className="texts">My Title</h4>
              <img className="post" src={whale3} />
              <p id="c"></p>
              <div>
                <input
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Comment"
                />
                <button onClick={commentSection}>post</button>
              </div>
            </div>
            <button className="nbutton" onClick={() => setProfile((p) => !p)}>
              Back to home
            </button>
          </div>
        ) : (
          <div className="H">
            <img className="HIdesign" src={Homedesign} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      {register ? (
        <div className="body">
          <div>
            <button className="backbutton" onClick={update_page}>
              Back To Login
            </button>
          </div>
          <div className="page">
            <div className="field field_v3">
              <label htmlFor="first-name" className="ha-screen-reader">
                First name
              </label>
              <input
                id="first-name"
                className="field__input"
                placeholder="  "
                onChange={(e) => setFirstName(e.target.value)}
              />
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">First name</span>
              </span>
            </div>
            <div className="field field_v3">
              <label htmlFor="last-name" className="ha-screen-reader">
                Last name
              </label>
              <input
                id="last-name"
                className="field__input"
                placeholder="  "
                onChange={(e) => setLastName(e.target.value)}
              />
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Last name</span>
              </span>
            </div>
            <div className="field field_v3">
              <label htmlFor="email" className="ha-screen-reader">
                E-mail
              </label>
              <input
                id="email"
                className="field__input"
                placeholder="  "
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">E-mail</span>
              </span>
            </div>
            <div className="field field_v3">
              <label htmlFor="password" className="ha-screen-reader">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="field__input"
                placeholder="  "
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="field__label-wrap" aria-hidden="true">
                <span className="field__label">Password</span>
              </span>
            </div>
          </div>
          <div style={{ margin: "auto", marginTop: 10 }}>
            <button
              className="bbutton"
              role="button"
              onClick={submitRegistration}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="lbody">
          <div className="container">
            <img className="image" src={whale1} />
          </div>
          <div className="bcontainer">
            <img
              style={{ height: "30%", width: "35%", marginLeft: "29%" }}
              className="image"
              src={whale2}
            />
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                style={{ marginTop: 20 }}
                type="password"
                placeholder="Password"
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button className="button" onClick={submitLogin}>
                Login
              </button>
            </div>
            <div>
              <button className="button-r" onClick={update_page}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
