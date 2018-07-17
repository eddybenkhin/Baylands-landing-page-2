import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import AboutPage from './components/aboutpage/aboutpage.jsx';
import TeamPage from './components/teampage/teampage.jsx';
import ContactPage from './components/contactpage/contactpage.jsx';
import ProjectsPage from './components/projectspage/projectspage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutPage />
        <ProjectsPage />
        <TeamPage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
