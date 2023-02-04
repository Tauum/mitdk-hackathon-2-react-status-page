import React from 'react'
import { Button } from 'react-bootstrap'
import "./StatusElement.css"


function StatusElement({id, container, statusCode, message, timeStamp}) {
  
  const handleNotify = () => {

  }
  
  return (
    <li

    className={
      statusCode == 200 ? 'status status-live' : 
      statusCode == 403 ? 'status status-warning ' :
      statusCode == 500 ? 'status status-offline ' : "status status-unknown"
    }

    >
      {/* <small>{id}</small> */}
      <h1 className='status-container'>{container}</h1>    
      <h2>
        Current status:
        &nbsp;
        {statusCode != "" ? statusCode : "unknown" }
      </h2>
      <p>{message}</p>
      <small>
        {timeStamp}
      </small>
      <br/>

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