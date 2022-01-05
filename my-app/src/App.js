import logo from './logo.svg';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import NaviBar from './components/NaviBar';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";


function App(props) {
  const loginState = props.isLogin;
  return (
    <div className="App">
      <HashRouter>
        <NaviBar />
        <Switch>
        {!loginState ? <Route path="/login" component={LoginPage}/> : ""}
        {!loginState ? <Route path="/signup" component={RegisterPage}/> : ""}
        {loginState ?<Route path="/main/" component={HomePage}/>: ""}
        <Redirect to="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}
const putStatesToProps =(storeStates) =>{
  return {
    isLogin : storeStates.isLogin,
  }
}

export default connect(putStatesToProps)(App);
