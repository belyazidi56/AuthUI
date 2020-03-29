import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Reset from "./Components/Auth/ResetPassword";
import { UserContext } from "./Context/Auth/UserContext";
function App() {
  return (
    <>
      <Switch>
        <UserContext.Provider>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/reset" component={Reset} />
        </UserContext.Provider>
      </Switch>
    </>
  );
}

export default App;
