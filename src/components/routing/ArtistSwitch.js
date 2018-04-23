import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArtistDetails from '../artistdetails/ArtistDetails';
import SummaryList from '../summarylist/SummaryList'

const ArtistSwitch = () => (
	<Switch>
		<Route exact path='/' component={SummaryList}/>
		<Route path='/artist/:mbid' component={ArtistDetails}/>
	</Switch>
);

export default ArtistSwitch;
