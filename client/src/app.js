import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./views/home.page";
import { Login } from "./views/login.page";
import { Signup } from "./views/signup.page";
import { Map } from "./views/map.page";
import { Content } from "./views/content.page";
import { Geolocation } from "./components/geolocated";
import { StartBtn } from "./components/startBtn";
import { Layout } from "./layout/Layout";
import { ContextAppProvider } from "./context/Context";

export const App = () => {
  return (
    <Router>
      <ContextAppProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/signup" exact component={Signup} />
            <Route path="/map" exact component={Map} />
            <Route path="/content" exact component={Content} />
          </Switch>
        </Layout>
      </ContextAppProvider>
    </Router>
  );
};
