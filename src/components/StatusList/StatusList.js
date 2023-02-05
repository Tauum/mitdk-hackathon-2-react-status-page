import React, { useEffect, useState } from 'react'
import StatusElement from '../StatusElement/StatusElement'
import Test2 from '../test2/Test2'
import "./StatusList.css"
import { motion, AnimatePresence } from "framer-motion"
import { Frame, useMotionValue, useTransform } from "framer-motion"

function StatusList({ statusList }) {

	useEffect(() => {
		console.log("inside statuslist",statusList)
	}, [statusList])

const [selectedId, setSelectedId] = useState(null)

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