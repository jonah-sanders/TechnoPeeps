import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2 searchbox'>
			<input 
				className='pa3 ba b--green bg-lightest-blue' 
				type='search' 
				placeholder='Find a technopeep'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;