import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import SignUpFormCreator from './components/pages/SignUpFormCreator';
import Profile from './components/pages/Profile';


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/sign-up-form-creator' component={SignUpFormCreator}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </Router>
      </>
    </div>
  );
}

export default App;
