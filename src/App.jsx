import React from "react";
import "./App.css";
import avatar from "./assets/images/avatar-jessica.jpeg";

const App = () => {
  return (
    <>
      <div className="card">
        <img src={avatar} alt="jessica-randal" />
        <h1>Jessica Randall</h1>
        <p className="loca">London, United Kingdom</p>
        <p className="info">"Front-end developer and avid reader."</p>
        <div className="websites">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
      <div className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/AyoubSasi20">Ayoub</a>.
        </p>
      </div>
    </>
  );
};

export default App;
