import React from 'react'
import "./StatusPreviousElement.css"

function StatusPreviousElement({id, title, message, timeStamp}) {
  return (
    <div>
       <button className="accordion">{title} - {timeStamp} (insert emoji or icon here for severity)</button>
      <div className="panel">
        <p>{message}</p>
      </div>
    </div>
  )
}

export default StatusPreviousElement