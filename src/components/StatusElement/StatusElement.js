import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StatusElement.css"
import { faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function StatusElement({ id, container, statusCode, message, timeStamp }) {

  const handleNotify = () => {

  }

  return (
    <li 
    className='status'
    >
      <h2 className='status-container'>{container}</h2>
      <br/>
      {
        statusCode == 200 ? <FontAwesomeIcon icon={faCircleCheck} color="green" size="2x" /> :
        statusCode == 500 ? <FontAwesomeIcon icon={faCircleQuestion} color="orange" size="2x" /> :
        statusCode == 403 ? <FontAwesomeIcon icon={faCircleXmark} size="2x" /> :
        <FontAwesomeIcon icon={faCircleExclamation} color="red" size="2x" />
        }
      <p>
        {statusCode != "" ? statusCode : "unknown"}
      </p>

      <p>{message}</p>
      <small>
        {timeStamp}
      </small>
      <br />

      {statusCode != 200 ?
        <Button onClick={handleNotify} className="shadow btn" variant="light">
          notify on change
        </Button>
        :
        <div></div>
      }
    </li>
  )
}

export default StatusElement