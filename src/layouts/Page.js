import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Menu from "../pages/menu/Menu";
import Contact from "../pages/Contact";
import Opinion from "../pages/Opinion";
import Login from "../pages/user/Login";
import NewUser from "../pages/user/NewUser";
import User from "../pages/user/User";
import Error from "../pages/Error";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/opinion" component={Opinion} />
        <Route path="/login" component={Login} />
        <Route path="/new_user" component={NewUser} />
        <Route path="/user" component={User} />      
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Page;
