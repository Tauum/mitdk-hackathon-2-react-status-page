import React from 'react'
import "./test.css"

function Test() {
  return (

    <div>test


<motion.div
  whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
/>
    </div>
  )
}

export default Test