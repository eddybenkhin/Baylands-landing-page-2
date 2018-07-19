import React from 'react';

import './projectspage.css'

export class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <section className="projects">
          <h2>Current Collaborations</h2>
    			<p>
    				<div className="button"><a href="https://github.com/ethereum/py-evm">Py-evm</a></div>
    				<div className="button"><a href="https://github.com/prysmaticlabs">Prismatic Labs</a></div>
    				<div className="button"><a href="https://github.com/ethereum/casper">Casper</a></div>
    				<div className="button"><a href="https://github.com/ConnextProject/Connext">Spankchain/ Connext Network</a></div>
    				<div className="button"><a href="https://github.com/ethereum/go-ethereum">goethereum</a></div>
    			</p>
        </section>
      </div>
    )
  }
}

export default ProjectsPage;
