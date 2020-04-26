import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Burron from './components/Button'


const App = () => {

  return (
    <div className="App">
      <Router>
        <Link to={'/'}> Link para home </Link>
        <Link to={'/about'}> Link para about </Link>
        <Link to={'/Amor'}>Llegó Luke </Link>
        <Burron />
        <Link to={'/Contact'}>Mandame uno</Link>

        <Route exact path={'/'} component={Home}>
        </Route>
        <Route path={'/about'}>
          <About data={'soy un datito más'} />
        </Route>
        <Route path={'/contact'} component={Contact} ></Route>

      </Router>
    </div>
  );
}

export default App;
