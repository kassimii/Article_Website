import React from "react";
import profilePicture from "./profile.jpg";

function UserInfo(props) {
  return (
    <>
      <div className="text-light text-center">
        <h3 style={{ color: "#f4b0c7" }}>User information</h3>
        <br />
        <p>{props.info.name}</p>
        <img
          src={profilePicture}
          width="230px"
          height="300px"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt="profilePicture"
        />
        <br />
        <p>3rd year Computer Science student at UPT</p>
        <p>{props.info.address}</p>
      </div>
      <div className="text-center">
        <button className="btn btn-light ">
          <a
            href="https://www.linkedin.com/in/patricia-simina-boc-a3b3261a8/"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
          >
            LinkedIn profile
          </a>
        </button>
      </div>
    </>
  );
}

export default UserInfo;
