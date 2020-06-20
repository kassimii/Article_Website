import React from "react";
import ProfileInfo from "./ProfileInfo";
import NavbarCustom from "./NavbarCustom";
import SearchPage from "./SearchPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid">
      <NavbarCustom />
      <Switch>
        <Route path="/" exact component={ProfileInfo} />
        <Route path="/my-profile" exact component={ProfileInfo} />
        <Route path="/profile" exact component={ProfileInfo} />
        <Route path="/search" exact component={SearchPage} />
      </Switch>
    </div>
  );
}

export default App;
