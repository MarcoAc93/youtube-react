import React from 'react';
import VideoListItem from './video-list-item';
import { List, Segment } from 'semantic-ui-react';

const VideoList = (props) => {
	const VideoItems = props.videos.map(video => {
		return (
			<VideoListItem
				onVideoClick={props.onVideoSelect}
				video={video} 
				key={video.id.videoId} />
		);
	})


	return(
		<Segment>
			<List relaxed='very' celled>
				{VideoItems}
			</List>
		</Segment>
	);
}

export default VideoList;