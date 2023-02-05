import React, { useEffect, useState } from 'react'
import StatusPod from '../StatusPod/StatusPod'
import { Button as button } from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion"
import "./StatusPods.css"

function StatusPods({ statusPods, }) {
  
  const [selectedPod, setSelectedPod] = useState(null)

  return (

    <div className='status-pods'>
    	{statusPods.map((statusPod, index) => (			 
        <motion.li key={index}
        layoutId={statusPod.id} onClick={() => setSelectedPod(statusPod) }>
        <StatusPod key={index} statusPod={statusPod}/>
        </motion.li>
			))}
    
    <AnimatePresence>
      {selectedPod && (
        <motion.div layoutId={1}>
          <motion.h5>aaa</motion.h5>
          <motion.h2>bbb</motion.h2>
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