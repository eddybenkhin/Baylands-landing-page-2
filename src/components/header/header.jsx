import React from 'react';

import './header.css'

export class Header extends React.Component {
  render() {
    return (
      <div>
        <div>
          <head>
        		<title>Baylands Inc</title>
        		<link href="landingmain.css" rel="stylesheet" type="text/css" />
        		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous" />
        		<link async href="http://fonts.googleapis.com/css?family=Warnes" data-generated="http://enjoycss.com" rel="stylesheet" type="text/css"/>
        		<link rel="stylesheet" type="text/css" href="./" />
    	    </head>
        </div>
        <div>
      		<header>
      			<h1>Baylands Incubator</h1>

      		</header>
        </div>
      </div>
    )
  }
}

export default Header;
