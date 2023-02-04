import React, { useEffect, useState } from 'react'
import StatusElement from '../StatusElement/StatusElement'
import "./StatusList.css"

function StatusList({ statusList }) {

	useEffect(() => {
		console.log(statusList)
	}, [])

	return (
		<ul className='status-list'>
			{/* <Button/> */}
			{statusList.map((status, index) => (
				<StatusElement
					key={index}
					id={status.id}
					container={status.container}
					statusCode={status.statusCode}
					message={status.message}
					timeStamp={status.timeStamp}
					className="shadow"
				/>
			))}
		</ul>
	)
}

export default StatusList