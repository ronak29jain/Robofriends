import React, {Component} from 'react';
import {data}  from '../Components/data';
import Cardlist from '../Components/cardlist';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import Errorboundary from '../Components/Errorboundary';

class App extends Component {
	constructor() {
		super()
		this.state = {
			data: data,
			searchfield: ""
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render(){
		const {data, searchfield} = this.state;
		const filterddata = data.filter(datalist=>{
			return datalist.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		return !data.length ?
			<h1>LOADING</h1>:
			(
				<div className='tc pa3'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<Errorboundary>
							<Cardlist data={filterddata}/>
						</Errorboundary>
					</Scroll>
				</div>
			);	
	};
};

export default App;