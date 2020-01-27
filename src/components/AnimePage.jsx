import React from "react";
import Form from "./Form";
import AnimeItem from "./AnimeItem";

const AnimePage = ({year, cour, season, animes, handleChange, scrollTop}) => {
	if (animes.length === 0) {
		return (
			<div className='error'>
				<Form year={year} cour={cour} handleChange={handleChange} />
				<section>
					<span>この期間の情報はありません。</span>
				</section>
			</div>
		);
	}
	return (
		<>
			<Form year={year} cour={cour} handleChange={handleChange} />
			<main>
				<h2>
					<span>{year}</span>年{season && <span>{season}</span>}アニメ
				</h2>
				<ul className='grid'>
					{animes.map(anime => {
						return <AnimeItem key={anime.id} anime={anime} />;
					})}
				</ul>
			</main>
			<button type='button' onClick={scrollTop} id='scroll'>
				&#9650;
			</button>
		</>
	);
};

export default AnimePage;
