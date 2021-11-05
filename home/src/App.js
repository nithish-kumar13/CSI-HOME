/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Dasbord from './components/Dasboard';
import Dashboard_content from './components/Dashboard_content';
import Direct from './components/Direct';
import Profile from './components/profile';
import Tron_address from './components/tron_address';
import Change_password from './components/change_password';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  return (
    <Router>
       <Switch>
          <Route path="/" exact>
                 <div className='main-div'>
                   <Dasbord/>
                    <Dashboard_content/>
                  </div>
          </Route>

          <Route path="/Direct" exact>
               <div className='main-div'>
              <Dasbord/>
               <Direct/>
               </div>
          </Route>
          <Route path="/profile" exact>
               <div className='main-div'>
              <Dasbord/>
               <Profile/>
               </div>
          </Route>
          <Route path="/tron_address" exact>
               <div className='main-div'>
              <Dasbord/>
               <Tron_address/>
               </div>
          </Route>
          <Route path="/change_password" exact>
               <div className='main-div'>
              <Dasbord/>
               <Change_password/>
               </div>
          </Route>
    </Switch>
    </Router>
 
  
  );
}

export default App;
