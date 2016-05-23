import React, { Component } from 'react';

//input hander onChange
//state is a plain js object record events
//control field
class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: 'Kyle'};
	}
	render() {
		return (
			<div className="search-bar">
				<input
					value = {this.state.term}
					onChange={event => this.setState({term: event.target.value})} />
			}
			</div>
		)
	}

}

export default SearchBar;
