import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./StatusElement.css"
import { faCircleCheck, faCircleExclamation, faCircleQuestion, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';


function StatusElement({ id, service, statusCode, timeStamp }) {

  return (
    <li 
    className='status'
    >
      <div className='status-top'>
        <h2 className='status-container'>{service} </h2>
        {
        statusCode == 200 ? <FontAwesomeIcon icon={faCircleCheck} color="green" size="2x" className='icon'/> :
        statusCode == 500 ? <FontAwesomeIcon icon={faCircleQuestion} color="orange" size="2x" className='icon'/> :
        statusCode == 403 ? <FontAwesomeIcon icon={faTriangleExclamation} color="red" size="2x" className='icon'/> :
        <FontAwesomeIcon icon={faCircleXmark} color="black" size="2x" className='icon'/>
        }
      </div>
     
      <small>
        {timeStamp}
      </small>
      <br />
    </li>
  )
}

export default StatusElement