import React from "react";

const Form = ({year, cour, handleChange}) => {
	return (
		<form onSubmit={e => e.preventDefault}>
			<div className='form-element'>
				<label htmlFor='yearList'>年を選んでください</label>
				<select name='year' onChange={handleChange} value={year}>
					<option value='2014'>2014</option>
					<option value='2015'>2015</option>
					<option value='2016'>2016</option>
					<option value='2017'>2017</option>
					<option value='2018'>2018</option>
					<option value='2019'>2019</option>
				</select>
			</div>

			<div className='form-element'>
				<label htmlFor='season'>季節を選んでください</label>
				<select name='cour' id='season' onChange={handleChange} value={cour}>
					<option value='1'>冬</option>
					<option value='2'>春</option>
					<option value='3'>夏</option>
					<option value='4'>秋</option>
					<option value='all'>全て</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
