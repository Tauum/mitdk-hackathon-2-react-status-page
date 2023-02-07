import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import CustomToggle from './CustomToggle'
import "./StatusPreviousElement.css"

function StatusPreviousElement({ id, title, message, timeStamp, severity }) {
  return (
    <div>
      <Accordion className="shadow previous-status-accordian" >
        <Card className='card'>
          <Card.Header>

            {/* bind this toggle colour to the severity of the status update */}
            <CustomToggle backgroundColor={severity} eventKey="0">{title} - {timeStamp}</CustomToggle>
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