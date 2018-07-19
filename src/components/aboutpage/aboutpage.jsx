import React from 'react';

import './aboutpage.css'

export class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <section className="about">
    			<h2>About Us</h2>
    			<p>
    				<div>We are a small group of dedicated individuals learning about and contributing to the Ethereum infrastructure.</div>
    			</p>
        </section>
      </div>
    )
  }
}

export default AboutPage;
