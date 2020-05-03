import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import Opinion from "../pages/Opinion";
import Error from "../pages/Error";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Route path="/opinion" component={Opinion} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Page;
