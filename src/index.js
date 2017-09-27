// Dependencias
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Segment, Grid } from 'semantic-ui-react';
import YTSearch from 'youtube-api-search';

// Componentes
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

// Constantes
const API_KEY = 'AIzaSyC97k25w7xAUOcF3nj0TxMgG1ydUCLt_Lk';
const size = 'large';

class App extends Component {
	constructor(props){
		super(props);
		
		this.videoSearch = this.videoSearch.bind(this);

		this.state = {
			videos:[],
			selectedVideo: null
		}
		this.videoSearch('Skyline gtr 34');
	}

	// hace la busqueda al api de youtube y actualiza el state con los resultados
	videoSearch(term){
		YTSearch({key: API_KEY, term:term}, videos  => {
			this.setState({
				videos: videos,
				selectedVideo: videos[1]
			});
		});
	}

	render() {
		return (
			<div>
				<Segment key={size} size={size}>
					<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				</Segment>
				<Grid divided='vertically'>
					<Grid.Row columns={2}>
						<Grid.Column computer={10} tablet={8} mobile={16}>
							<VideoDetail video={this.state.selectedVideo}/>
						</Grid.Column>
						<Grid.Column computer={6} tablet={8} mobile={16}>
							<VideoList 
								videos={this.state.videos} 
								onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);