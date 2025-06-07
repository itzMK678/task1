import React from 'react'
import "../Components/header.css"
const header = () => {
  return (
   <>
   <div className="header">
    <div id="right">TASK CREATOR</div>

    <div id="left"><ul>
    <li>About </li>
    <li>Service</li>
    <li>Contact</li>
    </ul></div>
   </div>
   </>
  )
}

export default header