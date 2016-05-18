// createa new component that should produce html
//import reactDOM interacts with DOM
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'


const API_KEY = 'AIzaSyBhYvzkE_emUXUT6fUgJ-qrZP228Lx4DLo'



//const values cannot change
//set up constructor
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };
		//when you have object where key and value are identical
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//identical
		});

	}

	render() {
		return(
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>

		);
	}
}



// //Take this component and put in DOM

//createa an instance of passing app with JSX

ReactDOM.render(<App />, document.querySelector('.container'));

