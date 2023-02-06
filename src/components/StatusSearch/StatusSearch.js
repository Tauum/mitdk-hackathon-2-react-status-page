import React, { useEffect, useState } from 'react';
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
				<div className="type-element type-reset shadow">
					<span className="tooltiptext">Reset status</span>
				</div>

				<div className="type-element type-fully-operational shadow">
					<span className="tooltiptext">Only show fully operational services</span>
				</div>

				<div className="type-element type-semi-operational shadow">
					<span className="tooltiptext">Only show semi operational services</span>
				</div>

				<div className="type-element type-offline shadow">
					<span className="tooltiptext">Only show offline services</span>
				</div>

				<div className="type-element type-unknown shadow">
					<span className="tooltiptext">Only show unknown services</span>
				</div>
			</div>

			<div className='search-type-range'>
				<input type="range"
					className=
					{
						searchTypeValue == 0 ? "search-type-fully-reset shadow" :
							searchTypeValue == 1 ? "search-type-fully-operational shadow" :
								searchTypeValue == 2 ? "search-type-semi-operational shadow" :
									searchTypeValue == 3 ? "search-type-offline shadow" :
										"search-type-unknown shadow"
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
