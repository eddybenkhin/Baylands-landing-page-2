import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


import Header from './components/header/header.jsx';
import AboutPage from './components/aboutpage/aboutpage.jsx';
import TeamPage from './components/teampage/teampage.jsx';
import ContactPage from './components/contactpage/contactpage.jsx';
import ProjectsPage from './components/projectspage/projectspage.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <link href="landingmain.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
        <link async href="http://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" type="text/css" href="./" />
          <Header />
          <AboutPage />
          <ProjectsPage />
          <TeamPage />
          <ContactPage />
          <Switch>
             <Route path="/header" component={Header} />
             <Route path="/about" component={AboutPage} />
             <Route path="/teampage" component={TeamPage} />
             <Route path="/contactpage" component={ContactPage} />
             <Route path="/projectspage" component={ProjectsPage} />

           </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
