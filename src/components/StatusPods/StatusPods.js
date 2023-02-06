import React, { useEffect, useState } from 'react'
import StatusPod from '../StatusPod/StatusPod'
import { Button, Button as button, Modal } from 'react-bootstrap'
import { motion, AnimatePresence } from "framer-motion"
import "./StatusPods.css"
import StatusList from '../StatusList/StatusList'

function StatusPods({ statusPods, }) {

  const [selectedPod, setSelectedPod] = useState(null)

  const [showPodModal, setShowPodModal] = useState(false);
  const handleClosePodModal = () => {
    setShowPodModal(false)
    setSelectedPod(false)
  };

  return (

    <div className='status-pods'>
      {statusPods.map((statusPod, index) => (
        <motion.li key={index}
          layoutId={statusPod.id} onClick={() => setSelectedPod(statusPod)}>

          <StatusPod key={index} statusPod={statusPod} 
          setSelectedPod={setSelectedPod} showPodModal={showPodModal} 
          setShowPodModal={setShowPodModal}
          />

        </motion.li>
      ))}

      <Modal className="modal" show={showPodModal} onHide={handleClosePodModal} centered backdrop="static">
        {selectedPod &&
          <>
            <div className="card text-center shadow">
              <div className="card-header"> </div>
              <div className="card-body">
              <AnimatePresence>
                {selectedPod && (
                  <motion.div layoutId={selectedPod.id} className="selected-pod">
                    <StatusList statusList={selectedPod.pods}/>
                    <motion.button onClick={handleClosePodModal} variant="primary" className='btn shadow'>
                      Close
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
            </div>
          </>}
      </Modal>

    </div>
  )
}

export default StatusPods