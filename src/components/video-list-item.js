import React from 'react';
import { List, Image } from 'semantic-ui-react';

const VideoListItem = ({video, onVideoClick}) => {
	const imgUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	const channel = video.snippet.channelTitle;
	const published = video.snippet.publishedAt.substring(0,9);

	return(
		<List.Item onClick={() => onVideoClick(video)}>
			<Image size='small' src={imgUrl} />
			<List.Content>
				<List.Header>{`${title.substring(0,50)}...`}</List.Header>
				<List.Description>Channel: {channel}</List.Description>
				<List.Description>Published At: {published}</List.Description>
			</List.Content>
		</List.Item>
	);
}

export default VideoListItem;