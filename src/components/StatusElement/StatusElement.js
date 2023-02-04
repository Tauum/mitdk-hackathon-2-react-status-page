import React from 'react'
import "./StatusElement.css"


function StatusElement({id, container, statusCode, message, timeStamp}) {
  
  const handleNotify = () => {

  }
  
  return (
    <li

    className={
      statusCode == 200 ? 'status status-live' : 
      statusCode == 403 ? 'status status-warning' :
      statusCode == 500 ? 'status status-offline' : "status status-unknown"
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
        <button onClick={handleNotify} className="notify">
          notify on change
        </button> 
        :
        <div></div>
      }
    </li>
  )
}

export default StatusElement