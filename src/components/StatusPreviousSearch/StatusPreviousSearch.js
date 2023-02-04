import React from 'react'
import "./StatusPreviousSearch"
import { MdSearch } from 'react-icons/md';

const StatusPreviousSearch = ({ handlePreviousSearchStatus, handlePreviousSearchDate }) => {

        return (
            <div className='status-search-container'>
                <div className='search'>
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
            </div>
        );
    };

export default StatusPreviousSearch