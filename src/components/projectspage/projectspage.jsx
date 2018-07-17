import React from 'react';

import './projectspage.css'

export class ProjectsPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Current Collaborations</h2>
  			<p>
  				<div><a href="https://github.com/ethereum/py-evm">Py-evm</a></div>
  				<div><a href="https://github.com/prysmaticlabs">Prismatic Labs</a></div>
  				<div><a href="https://github.com/ethereum/casper">Casper</a></div>
  				<div><a href="https://github.com/ConnextProject/Connext">Spankchain/ Connext Network</a></div>
  				<div><a href="https://github.com/ethereum/go-ethereum">goethereum</a></div>
  			</p>
      </div>
    )
  }
}

export default ProjectsPage;
