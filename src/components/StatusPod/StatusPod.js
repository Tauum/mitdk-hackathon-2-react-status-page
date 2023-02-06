import React, { useEffect, useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import "./StatusPod.css"


function StatusPod({ statusPod, setSelectedPod, setShowPodModal }) {

  const [placeHolderValue, setplaceHolderValue] = useState(0)

  const loadModal = () => {
    setSelectedPod(statusPod)
    setShowPodModal(true)
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setplaceHolderValue(getRandomInt(4))
  }, [])

  return (
    <div className='status-pod'>
      <h2 className=''>{statusPod.parent}</h2>
      <p>{statusPod.pods.length} Services</p>
      <br />
      <p>
        Overall health status:
        <br /> <br />
        {
          placeHolderValue === 1 ? ' Fully Operational' :
            placeHolderValue === 2 ? ' Semi Operational' :
              placeHolderValue === 3 ? ' Downtime' :
                " Unknown"
        }
      </p>

      <ProgressBar now={
        placeHolderValue === 1 ? 100 :
          placeHolderValue === 2 ? 75 :
            placeHolderValue === 3 ? 50 :
              placeHolderValue === 4 ? 25 :
                0
      }
        min={0}
        max={100}
        animated
        className={
          placeHolderValue === 1 ? 'progress status-live' :
            placeHolderValue === 2 ? 'progress-warning ' :
              placeHolderValue === 3 ? 'progress-offline ' :
                "progress-unknown"
        }

        striped variant={
          placeHolderValue == 1 ? 'success' :
            placeHolderValue == 2 ? 'warning' :
              placeHolderValue == 3 ? 'danger' :
                "info"
        }
      />

      <br />
      <Button className="shadow btn" variant="light" onClick={loadModal}>
        View components
      </Button>
    </div>

  )
}

export default StatusPod