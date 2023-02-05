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
      <br/>
      <p>
      Overall health status:
      <br/> <br/>
        {
        placeholderVal === 1 ? ' Fully Operational' : 
        placeholderVal === 2 ? ' Semi Operational' :
        placeholderVal === 3 ? ' Downtime' : 
        " Unknown"
        }
      </p>
      
      <ProgressBar now={
        placeholderVal === 1 ? 100 :
        placeholderVal === 2 ? 75 :
        placeholderVal === 3 ? 50 :
        placeholderVal === 4 ? 25 :
        0
      } 
      min={0}
      max={100}
      animated 
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
          View components
        </Button>
      }
    </div>

  )
}

export default StatusPod