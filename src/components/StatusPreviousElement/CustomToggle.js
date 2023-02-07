import { Button, useAccordionButton } from "react-bootstrap";

export default function CustomToggle({ children, eventKey, backgroundColor }) {
    return (
        <Button onClick={useAccordionButton(eventKey, () => { })}        
        className="shadow btn"
        variant={
            backgroundColor == 1 ? 'outline-success' :
            backgroundColor == 2 ? 'outline-secondary' :
            backgroundColor == 3 ? 'outline-info' :
            backgroundColor == 4 ? 'outline-warning' :
            backgroundColor == 5 ? 'outline-danger' :
            'outline-dark'
          }     
        >
            {children}
        </Button>
    );
}