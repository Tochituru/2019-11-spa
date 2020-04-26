import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = ()  => {
  return (
    <div className="App">
      <Router>
        <Route path={'/'}>
          <h1>Acá va uno</h1>
        </Route>
      </Router>
    </div>
  );
}

export default App;
