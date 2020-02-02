import React from "react"

const AnimeItem = ({anime}) => {
	const {title, public_url, twitter_account} = anime
	const haveLinks = !(public_url || twitter_account)
	return (
		<li>
			<h3 className='grid__title'>{title}</h3>
			<div className='grid__links'>
				{haveLinks && <span className='grid__link-text--none'>リンクなし</span>}
				{public_url && (
					<div className='grid__link'>
						<a
							href={public_url}
							target='_blank'
							rel='noopener noreferrer'
							className='grid__link-text'>
							<i className='fas fa-link'></i>公式サイト
						</a>
					</div>
				)}
				{twitter_account && (
					<div className='grid__link'>
						<a
							href={`https://twitter.com/${twitter_account}`}
							target='_blank'
							rel='noopener noreferrer'
							className='grid__link-text'>
							<i className='fab fa-twitter'></i>公式Twitter
						</a>
					</div>
				)}
			</div>
		</li>
	)
}

export default AnimeItem
