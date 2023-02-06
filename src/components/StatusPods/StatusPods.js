import React from 'react'
import StatusPod from '../StatusPod/StatusPod'
import "./StatusPods.css"

function StatusPods({ statusPods, }) {

  return (

    <div className='status-pods'>
      {statusPods.map((statusPod, index) => (
        <li key={index} >
          <StatusPod key={index} statusPod={statusPod}/>
        </li>
      ))}
    </div>
  )
}

export default StatusPods