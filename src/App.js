import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to={'/'}> Link para home </Link>
        <Link to={'/about'}> Link para about</Link>
        <Route exact path={'/'}>
          <h1>Acá va uno</h1>
        </Route>
        <Route path={'/About'}>
          <h1>Quiénes somos</h1>
        </Route>
      </Router>
    </div>
  );
}

export default App;
