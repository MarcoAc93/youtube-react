// Dependencias
import React, { Component } from 'react';
import { Grid, Form, Icon, Button } from 'semantic-ui-react';
 
class SearchBar extends Component {
	constructor(props){
		super(props);
		
		// se le pasa el this
		this.onInputChange = this.onInputChange.bind(this);
		this.onClickSearch = this.onClickSearch.bind(this);

		this.state = {
			term: ''
		}
	}
	
	// actualiza el state con el valor del input
	onInputChange(event){
		this.setState({term: event.target.value});
	}

	onClickSearch(event){
		this.props.onSearchTermChange(this.state.term);
	}

	render() {
		return (
			<Grid centered>
				<Grid.Row>
					<Grid.Column width={6}>
						<Form>
							<Form.Field>
								<input 
									type="text" 
									value={this.state.term}
									onChange={this.onInputChange}/>
							</Form.Field>
						</Form>
					</Grid.Column>
					<Button primary onClick={this.onClickSearch} attached='right'><Icon name='search'/> Search</Button>
				</Grid.Row>
			</Grid>
		);
	}
}

export default SearchBar;