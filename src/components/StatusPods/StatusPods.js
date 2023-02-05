import React, { useEffect, useState } from 'react'
import StatusPod from '../StatusPod/StatusPod'
import { Button as button } from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion"
import "./StatusPods.css"
import StatusList from '../StatusList/StatusList'

function StatusPods({ statusPods, }) {
  
  const [selectedPod, setSelectedPod] = useState(null)

  return (

    <div className='status-pods'>
    	{statusPods.map((statusPod, index) => (			 
        <motion.li key={index}
        layoutId={statusPod.id} onClick={() => setSelectedPod(statusPod) }>
        <StatusPod key={index} statusPod={statusPod} selectedPod={selectedPod}/>
        </motion.li>
			))}
    
    <AnimatePresence>
      {selectedPod && (
        <motion.div layoutId={1} className="selected-pod">
          <StatusList statusList={selectedPod.pods}/>
          <motion.button onClick={() => setSelectedPod(null)} variant="primary" className='btn'>
            Close
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>

    </div>
  )
}

export default StatusPods