import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "./ToggleSearchStyle.css"

function ToggleSearchStyle({radioValue, setRadioValue}) {
  
    const radios = [
      { name: 'Object', value: '1' },
      { name: 'List', value: '2' }
    ];

  return (
   <div className='toggle-search-style'>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx} id={`radio-${idx}`} type="radio" name="radio"
            variant={idx % 2 ? 'light' : 'light'}
            checked={radioValue === radio.value} value={radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
  )
}

export default ToggleSearchStyle