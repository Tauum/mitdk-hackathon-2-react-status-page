import React from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import "./StatusPod.css"


function StatusPod({ statusPod, selectedPod }) {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  var placeholderVal = getRandomInt(4)

  // const reduced = statusPod.pods //bind this to the aggregated status codes
  // lets say fully-operational is 10
  //semi-operational is 5
  // offline is 0

  // console.log(reduced)

  return (
    <div className='status-pod'>
      <h2 className=''>{statusPod.parent}</h2>
      <p>{statusPod.pods.length} Services</p>
      <p>
      Overall health:
        {
        placeholderVal === 1 ? ' Fully Functional' : 
        placeholderVal === 2 ? ' Operational' :
        placeholderVal === 3 ? ' Downtime' : 
        " Unknown"
        }
      </p>
      
      <ProgressBar now={placeholderVal} 
      min={0}
      max={4}
      className={
        placeholderVal === 1 ? 'progress status-live' : 
        placeholderVal === 2 ? 'progress-warning ' :
        placeholderVal === 3 ? 'progress-offline ' : 
        "progress-unknown"
      }

      striped variant={
        placeholderVal == 1 ? 'success' : 
        placeholderVal == 2 ? 'warning' :
        placeholderVal == 3 ? 'danger' : 
          "info"
        }  
      />

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