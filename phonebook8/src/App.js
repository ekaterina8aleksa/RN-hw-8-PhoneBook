import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import Container from "./common/Container";
import AppBar from "./components/NavMenu/AppBar";
import { authOperations } from "./redux/auth";
import { connect } from "react-redux";
import routes from "./units/routes";
import PrivateRoute from "./components/NavMenu/PrivateRoute";
import PublicRoute from "./components/NavMenu/PublicRoute";
import Spinner from "./common/Spinner";

const HomePage = lazy(() =>
  import("./pages/homePage" /* webpackChunkName: "home-page" */)
);
const RegisterPage = lazy(() =>
  import("./pages/registerPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("./pages/loginPage" /* webpackChunkName: "login-page" */)
);
const ContactsPage = lazy(() =>
  import("./pages/contactsPage" /* webpackChunkName: "contacts-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.registration}
              restricted
              redirectTo={routes.contacts}
              component={RegisterPage}
            />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.contacts}
              component={LoginPage}
            />
            <PrivateRoute
              path={routes.contacts}
              redirectTo={routes.login}
              component={ContactsPage}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
