import React from "react";

function UserExperience() {
  return (
    <>
      <div className="text-light text-justify">
        <h3 className="text-center" style={{ color: "#f4b0c7" }}>
          User experience
        </h3>
        <br />
        <div>
          <p>
            As far as my experience goes, I have worked on small Java projects
            for university, for different subjects. Most of them were supposed
            to implement algorithms.{" "}
          </p>
          <p>
            I have some experience in Android, since I and a coleague of mine
            have developed an app: Self-Made Healthy, an app that helps people
            have a healthier lifestyle. The user can log into the app, complete
            his/her profile(age, weight, weight goal) and the app will calculate
            the daily calories that the user needs. The user can log the daily
            consumed meals, and set hours for the meals. The app will send the
            user a notification when the meal time approaches. I was in charge
            of these features, while my coleague implemented the login and
            register features.
          </p>
          <p>
            I started working with React a little while ago and I gained some
            experience through a project at a company during the Liga AC LABS
            project. The project is called HandyMan and it is a website
            dedicated to helping people find or post jobs such as walking the
            dog, buying groceries etc.
          </p>
          <p>
            StanCASA is a project for uiversity, which I implemented with other
            3 colleagues. The project aims to solve the electricity waste
            problem and to offer the user an easier way to adapt the amount of
            brightness in a room. I connected the Arduino board to a laptop to
            store the data received from the sensors and also created the
            Android app that controlled the system.
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-light ">
          <a
            href="https://github.com/kassimii"
            target="_blank"
            rel="noopener noreferrer"
            alt="github"
          >
            Github profile
          </a>
        </button>
      </div>
    </>
  );
}

export default UserExperience;
