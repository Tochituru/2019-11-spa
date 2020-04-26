import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'


const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to={'/'}> Link para home </Link>
        <Link to={'/about'}> Link para about</Link>
        <Route exact path={'/'} component={Home}>
        </Route>
        <Route path={'/About'}>
          <About data={'soy un datito más'} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
