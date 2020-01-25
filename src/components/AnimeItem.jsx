import React from "react";

function AnimeItem(props) {
	const {title, public_url, twitter_account} = props.anime;
	const haveLinks = !(public_url || twitter_account);
	return (
		<li className='item'>
			<h3>{title}</h3>
			<div className='links'>
				{haveLinks && <span>リンクなし</span>}
				{public_url && (
					<div className='link'>
						<a href={public_url} target='_blank' rel='noopener noreferrer'>
							<i className='fas fa-link'></i>公式サイト
						</a>
					</div>
				)}
				{twitter_account && (
					<div className='link'>
						<a
							href={`https://twitter.com/${twitter_account}`}
							target='_blank'
							rel='noopener noreferrer'>
							<i className='fab fa-twitter'></i>公式Twitter
						</a>
					</div>
				)}
			</div>
		</li>
	);
}

export default AnimeItem;
