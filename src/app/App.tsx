import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WeatherPage from '../pages/Weather';
import WelcomePage from '../pages/Welcome';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/weather">
        <WeatherPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
