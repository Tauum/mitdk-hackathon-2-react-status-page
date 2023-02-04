import React, { useEffect, useState } from 'react'
import StatusList from '../StatusList/StatusList'
import "./StatusPage.css";

function StatusPage() {

    const [statusList, setStatusList] = useState([])

    useEffect(() => {
      setStatusList(
        [
          {id: 1, container:"Auth-server", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:01:01" },
          {id: 2, container:"Identity-registry-index", statusCode:"403", message:"Semi operational", timeStamp:"2022-01-01:04:04:02" },
          {id: 3, container:"User-profile-store", statusCode:"500", message:"Offline", timeStamp:"2022-01-01:04:06:05" },
          {id: 4, container:"User-profile-index", statusCode:"200", message:"Unknown", timeStamp:"2022-01-01:04:06:05" },
          {id: 5, container:"User-profile-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 6, container:"Mailbox-store", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 7, container:"Mailbox-index", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          {id: 8, container:"Mailbox-reindexer", statusCode:"200", message:"Fully operational", timeStamp:"2022-01-01:04:06:05" },
          
        ]
      )
    },[])

  return (
    <div className="status-page">
      <StatusList statusList={statusList}/>
    </div>
  )
}

export default StatusPage