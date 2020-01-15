import React from "react";

function AnimeItem(props) {
	const {title, public_url, twitter_account} = props.anime;
	return (
		<div className='anime'>
			<h3>{title}</h3>
			{public_url && (
				<a href={public_url} target='_blank' rel='noopener noreferrer'>
					公式サイト
				</a>
			)}
			{twitter_account && (
				<a
					href={`https://twitter.com/${twitter_account}`}
					target='_blank'
					rel='noopener noreferrer'>
					公式Twitter
				</a>
			)}
		</div>
	);
}

export default AnimeItem;
