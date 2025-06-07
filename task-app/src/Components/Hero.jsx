import React from 'react'
import save from "../assets/save.png";
import "../Components/Hero.css"

const Hero = () => {
  return (
    <>
    <div className="hero">
    <div id="left-1">
        <p id='head'>Create Your Tasks</p>
        <p id='punchline'>Organize and manage your tasks with ease.</p>
        <button> Get Started </button>

    </div>

    <div id="right-1">
        <img src={save} alt="" />
    </div>
    </div>
    </>
  )
}

export default Hero