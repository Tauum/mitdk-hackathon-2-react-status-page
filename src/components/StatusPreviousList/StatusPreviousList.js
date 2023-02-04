import React from 'react'
import StatusPreviousElement from '../StatusPreviousElement/StatusPreviousElement'
import "./StatusPreviousList.css"


function StatusPreviousList({previousStatusList}) {
  return (
    <ul className='status-previous-list'>
            {previousStatusList?.map((previousStatus, index) => (
				<StatusPreviousElement
					key={index}
					id={previousStatus.id}
					title={previousStatus.title}
					message={previousStatus.message}
					timeStamp={previousStatus.timeStamp}
				/>
			))}
    </ul>
  )
}

export default StatusPreviousList