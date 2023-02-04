import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchStatus, handleSearchType }) => {

	return (
		<div className='search-container'>
			<div className='search'>
				<MdSearch className='search-icons' size='1.3em' />
				<input
					onChange={(event) => handleSearchStatus(event.target.value) }
					type='text'
					placeholder='type to search...'
				/>
			</div>
			
			<div className='search-type'
				onChange={(event) => handleSearchType(event.target.value) }>

				<div className="type-element type-reset">
					<input type="radio" value="Reset" name="search-type" defaultChecked />
				</div>
				
				<div className="type-element type-fully-operational">
					
					<input type="radio" value="Fully-Operational" name="search-type"/>
				</div>

				<div className="type-element type-semi-operational">
					<input type="radio" value="Semi-Operational" name="search-type"/>
				</div>

				<div className="type-element type-offline">
					<input type="radio" value="Offline" name="search-type"/>
				</div>

				<div className="type-element type-unknown">
					<input type="radio" value="Unknown" name="search-type"/>
				</div>

			</div>
		</div>
	);
};

export default Search;
