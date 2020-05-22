import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PreviousConferences from './components/PreviewsConferences/PreviousConferences';
import MeetUps from './components/MeetUps/MeetUpsList';
import GirlsWhoProduct from './components/GirlsWhoProduct/GirlsWhoProduct';
import Courses from './components/Courses/Courses';
import './App.css';
import NavBar from './components/Shared/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/previewsconferences">
            <PreviousConferences />
          </Route>
          <Route exact path="/meetups">
            <MeetUps />
          </Route>
          <Route exact path="/girlswhoproduct">
            <GirlsWhoProduct />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
