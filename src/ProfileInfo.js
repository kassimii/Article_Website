import React from "react";
import UserInfo from "./UserInfo";
import UserExperience from "./UserExperience";
import FollowedWebsites from "./FollowedWebsites";

function ProfileInfo() {
  return (
    <>
      <div style={{ backgroundColor: "#561f55   " }}>
        <br />
        <h1 className="text-light text-center">Profile</h1>
        <br />
        <br />
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <UserInfo
                info={{ name: "Patricia-Simina Boc", address: "Lugoj" }}
              />
            </div>
            <div class="col-sm">
              <UserExperience />
            </div>
            <div class="col-sm">
              <FollowedWebsites />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default ProfileInfo;
