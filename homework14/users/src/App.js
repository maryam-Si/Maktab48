import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import NotFoundPage from "./components/NotFoundPage";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ToastContainer />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/:id" exact component={UserPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
