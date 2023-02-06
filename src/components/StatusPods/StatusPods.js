import React, { useEffect, useState } from 'react'
import StatusPod from '../StatusPod/StatusPod'
import { Button, Button as button, CloseButton, Modal } from 'react-bootstrap'
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

  const [searchText, setSearchText] = useState('');
	const [searchType, setSearchType] = useState(false);

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
              <div className="card-header">
                <CloseButton onClick={handleClosePodModal}/>
                </div>
              <div className="card-body">
                  {/* <StatusSearch
                  handleSearchStatus={setSearchText}
                  handleSearchType={setSearchType}
                  /> */}

                <h2>{selectedPod.parent}</h2>
              <AnimatePresence>
                {selectedPod && (
                  <motion.div layoutId={selectedPod.id} className="selected-pod">
                    <StatusList statusList={selectedPod.pods}/>
                    <motion.button onClick={handleClosePodModal} variant="primary" className='btn shadow modal-close'>
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