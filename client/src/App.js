import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Navbar
import Navbar from './components/navbar/Navbar';

// Routing
import PrivateRoute from './components/routing/PrivateRoute';

// Screens
import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import CreateStrategy from './components/screens/CreateStrategy';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <PrivateRoute
            exact
            path="/createstrategy"
            component={CreateStrategy}
          />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
