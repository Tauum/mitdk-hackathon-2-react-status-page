import React, { useEffect, useState } from 'react'
import StatusElement from '../StatusElement/StatusElement'
import "./StatusList.css"

function StatusListAlt({ statusList }) {

	useEffect(() => {
		console.log("inside statuslist", statusList)
	}, [statusList])

	return (
		<ul className='status-list-alt' >
			{statusList?.map((status, x) => (
				<StatusElement
					key={x}
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

export default StatusListAlt