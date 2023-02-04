import React from 'react'
import StatusPreviousList from '../StatusPreviousList/StatusPreviousList'
import"./StatusPrevious.css"

function StatusPrevious() {
  return (
    <div className='previous-status'>
        <div className='previous-status-title'>
            <h2>Previous status updates</h2>
        </div>
        <br/>
        <StatusPreviousList/>
    </div>
  )
}

export default StatusPrevious