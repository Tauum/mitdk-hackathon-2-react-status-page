import React, { useEffect, useState } from 'react'
import StatusElement from '../StatusElement/StatusElement'
import "./StatusList.css"

function StatusList({ statusList }) {

	useEffect(() => {
		console.log("inside statuslist",statusList)
	}, [statusList])

	return (
		<ul className='status-list' >
			{statusList?.map((status, x) => (
				<div>
				<StatusElement
					key={x}
					id={status.id}
					container={status.container}
					statusCode={status.statusCode}
					message={status.message}
					timeStamp={status.timeStamp}
					className="shadow"
				/>
				</div>
			))}
		</ul>
	)
}

export default StatusList