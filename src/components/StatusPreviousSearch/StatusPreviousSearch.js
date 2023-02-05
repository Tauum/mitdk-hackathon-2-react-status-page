import React from 'react'

const StatusPreviousSearch = ({ handlePreviousSearchDate }) => {

        return (             
			<div className='search-type'
				onChange={(event) => handlePreviousSearchDate(event.target.value) }>
				<input type="date"/>
			</div>
        );
    };

export default StatusPreviousSearch