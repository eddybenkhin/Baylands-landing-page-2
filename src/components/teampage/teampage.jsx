import React from 'react';

import './teampage.css'

export class TeamPage extends React.Component {
  render() {
    return (
      <div>
  			<h2 className="heading">Team</h2>
  				<div className="container">
  					<div className="item">
  						<h5>Nico</h5>
  							<div>
  								<a href="https://github.com/nicozingarelli">github</a>
  								<a href="https://www.linkedin.com/in/nico-zingarelli">linkedin</a>
  							</div>
  					</div>
  					<div className="item">
  						<h5>Eli</h5>
  							<img src="https://shortcut-test2.s3.amazonaws.com/uploads/role/attachment/209101/default_p-its-always-sunny-in-philadelphia-kaitlin-olson.jpg"
                alt="picture of Eli" />
  							<div>
  								<a href="https://github.com/elihanover">github</a>
  								<a href="https://www.linkedin.com/in/eli-hanover-1489b5b2">linkedin</a>
  							</div>
  					</div>
  					<div className="item">
  						<h5>Leon</h5>
  							<img src="https://img.sharetv.com/shows/characters/thumbnails/its_always_sunny_in_philadelphia.mac.jpg" alt="picture of Leon" />
  							<div>
  								<a href="https://github.com/GagziW">github</a>
  								<a href="https://www.linkedin.com/in/leon-maximilian-stanko">linkedin</a>
  							</div>
  					</div>
  					<div className="item">
  						<h5>Will</h5>
  							<img src="https://theoldqueenshead.com/wp-content/uploads/2018/01/its_always_sunny_in_philadelphia.frank_reynolds.jpg" alt="picture of Will" />
  							<div>
  								<a href="https://github.com/williambannas">github</a>
  								<a href="https://www.linkedin.com/in/williamrschwartz">linkedin</a>
  							</div>
  					</div>
  					<div className="item">
  						<h5>Kiel</h5>
  							<img src="http://rs184.pbsrc.com/albums/x255/albertjayy/charlieiasip1.jpg~c200" alt="picture of Kiel" />
  							<div>
  								<a href="https://github.com/kielbarry">github</a>
  								<a href="https://www.linkedin.com/in/kielbarry">linkedin</a>
  							</div>
  					</div>
  					<div className="item">
  						<h5>Eddy</h5>
  							<img src="https://img.sharetv.com/shows/characters/thumbnails/the_eric_andre_show.eric_andre_host.jpg" alt="picture of Eddy" />
  							<div>
  								<a href="https://github.com/eddybenkhin">github</a>
  								<a href = "https://www.linkedin.com/in/edward-benkhin-4331b5133">linkedin</a>
  							</div>
  					</div>
  			</div>
      </div>
    )
  }
}

export default TeamPage;
