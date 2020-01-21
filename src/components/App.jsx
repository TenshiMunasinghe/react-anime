import React, {Component} from "react";
import AnimeItem from "./AnimeItem";

class App extends Component {
	state = {
		isLoading: false,
		year: "2014",
		cour: "1",
		animes: []
	};

	componentDidMount = async _ => {
		try {
			this.setState({isLoading: true});
			const response = await this.getAnime();
			const animes = await response.json();
			this.setState({animes, isLoading: true});
		} catch (err) {
			throw new Error("failed to fetch data");
		}
	};

	async getAnime(name, value) {
		let {year, cour} = this.state;
		let url;
		if (name === "year") {
			cour === "all" ? (url = "") : (url = `/${cour}`);
			const response = await fetch(
				`https://api.moemoe.tokyo/anime/v1/master/${value}${url}`
			);
			return response;
		}
		if (name === "cour") {
			value === "all" ? (url = "") : (url = `/${value}`);
			const response = await fetch(
				`https://api.moemoe.tokyo/anime/v1/master/${year}${url}`
			);
			return response;
		}
		cour === "all" ? (url = "") : (url = `/${cour}`);
		const response = await fetch(
			`https://api.moemoe.tokyo/anime/v1/master/${year}${url}`
		);
		return response;
	}

	handleChange = async ev => {
		this.setState({isLoading: true});
		let {value, name} = ev.target;
		const response = await this.getAnime(name, value).catch(e =>
			console.error(e)
		);
		const animes = await response.json();
		this.setState({animes, [name]: value, isLoading: false});
	};

	scrollTop = () => {
		let currentY = window.pageYOffset;
		window.scrollTo(0, Math.floor(currentY * 0.6));
		if (currentY > 0) {
			window.setTimeout(this.scrollTop, 10);
		}
	};

	render() {
		let {isLoading, animes, year, cour} = this.state;
		let season;
		if (cour === "1") {
			season = "冬";
		} else if (cour === "2") {
			season = "春";
		} else if (cour === "3") {
			season = "夏";
		} else if (cour === "4") {
			season = "秋";
		} else {
			season = "";
		}

		if (isLoading) {
			return (
				<div className='loading'>
					<h1>Loading...</h1>
				</div>
			);
		} else {
			return (
				<>
					<button type='button' onClick={this.scrollTop} id='scroll-top'>
						&#9650;
					</button>

					<div className='flex'>
						<form onSubmit={e => e.preventDefault}>
							<label htmlFor='yearList'>年を選んでください</label>
							<select
								name='year'
								id='yearList'
								onChange={this.handleChange}
								value={year}>
								<option value='2014'>2014</option>
								<option value='2015'>2015</option>
								<option value='2016'>2016</option>
								<option value='2017'>2017</option>
								<option value='2018'>2018</option>
								<option value='2019'>2019</option>
							</select>
							<label htmlFor='season'>季節を選んでください</label>
							<select
								name='cour'
								id='season'
								onChange={this.handleChange}
								value={cour}>
								<option value='1'>冬</option>
								<option value='2'>春</option>
								<option value='3'>夏</option>
								<option value='4'>秋</option>
								<option value='all'>全て</option>
							</select>
						</form>
						<h2>
							{year}年{season && season}アニメ
						</h2>
						<ul>
							{animes.map(anime => {
								return <AnimeItem key={anime.id} anime={anime} />;
							})}
						</ul>
					</div>
				</>
			);
		}
	}
}

export default App;
