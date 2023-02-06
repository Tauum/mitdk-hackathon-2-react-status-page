import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import "./StatusSearch.css"

const Search = ({ handleSearchType }) => {

	const [searchTypeValue, setSearchTypeValue] = useState(0);

	useEffect(() => {
		console.log(searchTypeValue)
	},[searchTypeValue])

	return (
		<div className='status-search-container'>

			<div className='search-type'
				onChange={(event) => handleSearchType(event.target.value) }>

				<div className="type-element type-reset">
					<input type="radio" value="Reset" name="search-type" defaultChecked />
					<span className="tooltiptext">Reset status</span>
				</div>
				
				<div className="type-element type-fully-operational">
					<input type="radio" value="Fully-Operational" name="search-type"/>
					<span className="tooltiptext">Only show fully operational services</span>
				</div>

				<div className="type-element type-semi-operational">
					<input type="radio" value="Semi-Operational" name="search-type"/>
					<span className="tooltiptext">Only show semi operational services</span>
				</div>

				<div className="type-element type-offline">
					<input type="radio" value="Offline" name="search-type"/>
					<span className="tooltiptext">Only show offline services</span>
				</div>

				<div className="type-element type-unknown">
					<input type="radio" value="Unknown" name="search-type"/>
					<span className="tooltiptext">Only show unknown services</span>
				</div>

			</div>

			<div  className='search-type search-type-range'>
				<input type="range" 
				className=
				{
					searchTypeValue == 0 ? "search-type-fully-reset" :
					searchTypeValue == 1 ? "search-type-fully-operational":
					searchTypeValue == 2 ? "search-type-semi-operational":
					searchTypeValue == 3 ? "search-type-offline" :
					"search-type-unknown"
				}
				
				min="0" max="4" step="1"
				onChange={(event) => setSearchTypeValue(event.target.value)}
				value={searchTypeValue}
				/>
			</div>
		</div>
	);
};

export default Search;
