import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Header from '../Header/Header';
import Success from '../Success/Success';
import './App.css';



function App() {

  return (
    <div>
    <Router>
      <Header />

      <Route exact path="/">
        <Feeling />
      </Route>

      <Route exact path="/understanding">
        <Understanding />
      </Route>

      <Route exact path="/support">
        <Support />
      </Route>

      <Route exact path="/comments">
        <Comments />
      </Route>

      <Route exact path="/review">
        <Review />
      </Route>

      <Route exact path="/success">
        <Success />
      </Route>

     </Router>

    </div>
    

  );
}

export default App;
