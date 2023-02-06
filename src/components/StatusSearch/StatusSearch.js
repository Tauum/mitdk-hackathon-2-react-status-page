import React, { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import "./StatusSearch.css"

const Search = ({ handleSearchType }) => {

	const [searchTypeValue, setSearchTypeValue] = useState(0);

	useEffect(() => {
		console.log(searchTypeValue)
	}, [searchTypeValue])

	return (

		<div className='status-search-container'
			onChange={(event) => handleSearchType(event.target.value)}>
			<div className='search-type-tool-tip'>
				<div className="type-element type-reset">
					<span className="tooltiptext">Reset status</span>
				</div>

				<div className="type-element type-fully-operational">
					<span className="tooltiptext">Only show fully operational services</span>
				</div>

				<div className="type-element type-semi-operational">
					<span className="tooltiptext">Only show semi operational services</span>
				</div>

				<div className="type-element type-offline">
					<span className="tooltiptext">Only show offline services</span>
				</div>

				<div className="type-element type-unknown">
					<span className="tooltiptext">Only show unknown services</span>
				</div>
			</div>

			<div className='search-type-range'>
				<input type="range"
					className=
					{
						searchTypeValue == 0 ? "search-type-fully-reset" :
							searchTypeValue == 1 ? "search-type-fully-operational" :
								searchTypeValue == 2 ? "search-type-semi-operational" :
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
