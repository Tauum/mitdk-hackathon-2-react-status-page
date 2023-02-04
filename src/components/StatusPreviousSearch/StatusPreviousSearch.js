import React from 'react'
import "./StatusPreviousSearch.css"
import { MdSearch } from 'react-icons/md';

const StatusPreviousSearch = ({ handlePreviousSearchStatus, handlePreviousSearchDate, handlePreviousSearchType }) => {

        return (
            <div className='previous-status-search-container'>
                <div className='previous-search'>
                    <MdSearch className='search-icons' size='1.3em' />
                    <input
                        onChange={(event) => handlePreviousSearchStatus(event.target.value) }
                        type='text'
                        placeholder='type to search...'
                    />
                </div>
                
                <div className='search-type'
                    onChange={(event) => handlePreviousSearchDate(event.target.value) }>
                    <input type="date"/>
                </div>

                <div className='search-type'
				onChange={(event) => handlePreviousSearchType(event.target.value) }>

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
            </div>
        );
    };

export default StatusPreviousSearch