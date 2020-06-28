import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PreviousConferences from './components/PreviousConferences/PreviousConferences';
import VidList from './components/PreviousConferences/VidList';
import MeetUps from './components/MeetUps/MeetUpsList';
import GirlsWhoProduct from './components/GirlsWhoProduct/GirlsWhoProduct';
import Courses from './components/Courses/Courses';
import AlbumCard from './components/PreviousConferences/AlbumCard';
import Consultancy from './components/Consultancy/Consultancy';
import DesignBuild from './components/DesignBuild/DesignBuild';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/previousconferences"
            component={PreviousConferences}
          />
          <Route exact path="/previousconferences/:year" component={VidList} />
          <Route exact path="/consultancy" component={Consultancy} />
          <Route
            exact
            path="/previousconferences/:year/albums"
            component={AlbumCard}
          />
          <Route exact path="/meetups" component={MeetUps} />
          <Route exact path="/designandbuild" component={DesignBuild} />
          <Route exact path="/girlswhoproduct" component={GirlsWhoProduct} />
          <Route exact path="/courses" component={Courses} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
