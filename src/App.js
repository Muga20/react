import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
// import App from './App';
import Navbar from './components/Navbar';
import Replace from './components/Replace';
// import Map from './components/Map';
import Event from './components/Events';
import Create from './components/Create';

// import Reuse from './components/ReusingComp';

// import {Greet} from './components/greet';
import './App.css';

function App() {
  return (
      <Router>
    <div className="App">
    <Navbar />
   <div className='Content'>
    <Switch>
      <Route exact path="/">
        <Event />
      </Route>
      <Route path="/Create">
        <Create />
      </Route>
    </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
