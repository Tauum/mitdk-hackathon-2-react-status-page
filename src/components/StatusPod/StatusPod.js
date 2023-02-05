import React from 'react'
import { Button } from 'react-bootstrap'
import "./StatusPod.css"


function StatusPod({ statusPod, selectedPod }) {
  return (
    <div className='status-pod'>
      <h2 className=''>{statusPod.parent}</h2>
      <p>{statusPod.pods.length} Services</p>
      <p>Overall health: Okay </p>
      <br />
      {selectedPod === null &&
        <Button className="shadow btn" variant="light">
          View
        </Button>
      }
    </div>

  )
}

export default StatusPod