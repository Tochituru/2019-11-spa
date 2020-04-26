import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Navigation from './components/Navigation';


const App = () => {
  let  [state, setState] = useState()
  state = {
    data: 'soy un datito'
  } 

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path={'/'} component={Home}>
        </Route>
        <Route path={'/about'}>
          <About data={state.data} />
        </Route>
        <Route path={'/contact'} component={Contact} ></Route>

      </Router>
    </div>
  );
}

export default App;
