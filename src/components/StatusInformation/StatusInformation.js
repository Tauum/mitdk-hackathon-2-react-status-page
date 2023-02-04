import React from 'react'
import "./StatusInformation.css"

function StatusInformation() {
  return (
    <div className='service-information'>
        <h1>Service status</h1>
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
            Below you can search for a specific service via its service name.
            Alternatively you may also search or refine searching with the service's status type which are as follows:
        </p>

        <div className='filter-types'>
            <div className='filter-none'>
                <p>White</p>
            
            </div>
            <div className='filter-live'>
                <p>Green</p>
            </div>
            <div className='filter-semi-operational'>
                <p>Yellow</p>
            </div>
            <div className='filter-offline'>
                <p>Red</p>
            </div>
            <div className='filter-unknown'>
                <p>Black</p>
            </div>
        </div>


        
    </div>
  )
}

export default StatusInformation