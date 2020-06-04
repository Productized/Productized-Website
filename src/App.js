import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PreviousConferences from './components/PreviousConferences/PreviousConferences';
import VidList2019 from './components/PreviousConferences/VidList2019';
import VidList2018 from './components/PreviousConferences/VidList2018';
import VidList2017 from './components/PreviousConferences/VidList2017';
import VidList2016 from './components/PreviousConferences/VidList2016';
import VidList2015 from './components/PreviousConferences/VidList2015';
import MeetUps from './components/MeetUps/MeetUpsList';
import GirlsWhoProduct from './components/GirlsWhoProduct/GirlsWhoProduct';
import Courses from './components/Courses/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/previousconferences">
            <PreviousConferences />
          </Route>
          <Route exact path="/previousconferences/2019">
            <VidList2019 />
          </Route>
          <Route exact path="/previousconferences/2018">
            <VidList2018 />
          </Route>
          <Route exact path="/previousconferences/2017">
            <VidList2017 />
          </Route>
          <Route exact path="/previousconferences/2016">
            <VidList2016 />
          </Route>
          <Route exact path="/previousconferences/2015">
            <VidList2015 />
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
