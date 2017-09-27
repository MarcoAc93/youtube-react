import React from 'react';
import { Embed, Segment, Header } from 'semantic-ui-react';

const VideoDetail = ({video}) => {
	if (!video) {
		return <Segment loading></Segment>
	}
	
	return(
		<Segment>
			<Embed 
				id = {video.id.videoId}
				source = 'youtube'
				placeholder = {video.snippet.thumbnails.medium.url}
			/>
			<Segment>
				<Header>{video.snippet.title}</Header>
				<Header.Subheader>{video.snippet.description}</Header.Subheader>
			</Segment>
		</Segment>
	);
};

export default VideoDetail;