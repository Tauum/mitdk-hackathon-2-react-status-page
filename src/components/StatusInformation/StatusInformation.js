import React from 'react'
import "./StatusInformation.css"

function StatusInformation() {
  return (
    <div className='service-information'>
        <h2>Service status</h2>
        <p>
        An operational status page is a web page that provides real-time 
        information on the current status of a company's systems and services. 
        It serves as a centralized source of information for customers, stakeholders and employees, 
        allowing them to quickly check the availability and performance of key services and infrastructure. 
        The status page typically includes information such as current service uptime and downtime, 
        scheduled maintenance windows, and known issues. 
        It is designed to provide transparency and help stakeholders understand the impact of any issues and outages, 
        and keep them informed about the status of systems and services that are critical to their business.
        </p>

        <br/>
        <p>
            Below you may refine results for services by name.
            <br/>
            You may also may also refine searching by a services status.
            <br/><br/>
            Furthermore, while using a mobile device, you may click notify me on a non-fully operating service
            to recieve notifications for the purpose of allowing users to track a paticular needed service 
            for when it is again fully operational.
        </p>
        
    </div>
  )
}

export default StatusInformation