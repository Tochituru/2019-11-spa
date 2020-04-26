import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <a href={'/'}> Link para home </a>
        <a href={'/about'}> Link para about</a>
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
