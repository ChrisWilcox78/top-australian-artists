import React, { Component } from "react";
import logo from "./logo.svg";

class Header extends Component {
	render() {
		return (
		<header className="app-header">
			<h1 className="app-title">Australia's Top Artists</h1>
			<div>Powered by</div>
			<img src={logo} className="app-logo" alt="logo" />
		</header>);
	}
}

export default Header;
