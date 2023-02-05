import React, { useEffect, useState } from 'react'
import StatusElement from '../StatusElement/StatusElement'
import StatusList from '../StatusList/StatusList'
// import { motion, AnimatePresence } from "framer-motion"
import "./test.css"

function Test2({ statusPods }) {

	useEffect(() => {
		console.log("test2 statuspods",statusPods)
	}, [statusPods])
  
const [selectedId, setSelectedId] = useState(null)

  return (

    <div className='status-pods'>
		
    	{/* {statusPods.pods?.map((status, index) => (				
        <StatusElement
					key={index}
					id={status.id}
					container={status.container}
					statusCode={status.statusCode}
					message={status.message}
					timeStamp={status.timeStamp}
					className="shadow"
				/>
			))} */}
<ul>
{statusPods?.map((statusPod, index) => (				
    <div>
      <h2>{statusPod.parent}</h2>
      {/* <StatusList statusList={statusPod.pods} key={index}/> */}
		</div>	
    )
  )
}
</ul>


{statusList.pods?.map(item => (
  <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>{item.subtitle}</motion.h5>
      <motion.h2>{item.title}</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>

    </div>
  )
}

export default Test2