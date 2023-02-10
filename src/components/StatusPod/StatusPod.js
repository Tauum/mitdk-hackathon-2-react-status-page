import React, { useEffect, useState } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'
import "./StatusPod.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import StatusList from '../StatusList/StatusList';
import { StrapiGetRequest } from '../../functionality/Request';

function StatusPod({ statusPod }) {

  const [placeHolderValue, setplaceHolderValue] = useState(0)
  const [showChildrenList, setShowChildrenList] = useState(false)
  
  const handleNotify = () => {
      // bla bla bla do request to enable a notification for this container
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setplaceHolderValue(getRandomInt(4))
  }, [])

  return (
    <div className={
      placeHolderValue === 1 ? 'status-pod status-pod-fully-operational shadow' :
        placeHolderValue === 2 ? 'status-pod status-pod-semi-operational shadow' :
          placeHolderValue === 3 ? 'status-pod status-pod-offline shadow' :
            "status-pod status-pod-unknown shadow"
    }

    >

      {
        !showChildrenList ?
        <>

          <h2 className=''>{statusPod.parent}</h2>
          <p>{statusPod.pods.length} Services</p>
          <p>
            Overall health status:
            <br /><br />
            {
              placeHolderValue == 1 ? <FontAwesomeIcon icon={faCircleCheck} color="green" size="xl" /> :
              placeHolderValue == 2 ? <FontAwesomeIcon icon={faCircleQuestion} color="orange" size="xl" /> :
                placeHolderValue == 3 ? <FontAwesomeIcon icon={faTriangleExclamation} color='red' size="xl" /> :
                  <FontAwesomeIcon icon={faCircleXmark} color="black" size="xl" />
            }
            {
              placeHolderValue === 1 ? ' Fully Operational' :
                placeHolderValue === 2 ? ' Semi Operational' :
                  placeHolderValue === 3 ? ' Downtime' :
                    " Unknown"
            }
          </p>
          <br />
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

            striped variant={
              placeHolderValue == 1 ? 'success' :
                placeHolderValue == 2 ? 'warning' :
                  placeHolderValue == 3 ? 'danger' :
                    "info"
            }
          />

        </>

        : 

        <StatusList statusList={statusPod.pods} />
      }

      <br />
      <Button className="shadow btn red-button" variant="light" onClick={() => {setShowChildrenList(!showChildrenList)}}>
        { !showChildrenList ? "Show Components" : "Close" }
      </Button>
      <br/>
      <Button onClick={handleNotify} className="shadow btn" variant="secondary">
        Enable Notification
      </Button>
    </div>

  )
}

export default StatusPod