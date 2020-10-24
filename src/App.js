import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import TeamDetails from './pages/TeamDetails';
import TeamEvents from './pages/TeamEvents';
import Home from './pages/Home';
import StatsList from './pages/StatsList';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={TeamDetails} />
          <Route path='/events/:id' component={TeamEvents} />
          <Route path='/stats' component={StatsList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
