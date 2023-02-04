import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import "./StatusPreviousElement.css"

function StatusPreviousElement({ id, title, message, timeStamp }) {
  return (
    <div>
      <Accordion className="shadow previous-status-accordian" >
        <Card className='card'>
          <Card.Header>
            <CustomToggle eventKey="0">{title} - {timeStamp}</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className='previous-status-content'>
              <p> {message} </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>
  )
}

export default StatusPreviousElement