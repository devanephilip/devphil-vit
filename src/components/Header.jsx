import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="bg-white flex justify-around py-6 shadow-md ">
      <div>
        <h2  className="font-bold text=[30px]">lordMarcos</h2>
      </div>
      <div className="flex ">
        <Link to="/" className="mx-4 font-semibold hover:text-green-700">home</Link>
        <Link to="/about" className="mx-4 font-semibold hover:text-green-700">about</Link>
        <Link to="/project" className="mx-4 font-semibold hover:text-green-700">project</Link>
        <Link to="skills" className="mx-4 font-semibold hover:text-green-700">skills</Link>
        <Link to="contact" className="mx-4 font-semibold hover:text-green-700">contact</Link>
       
      </div>
    </div>
  )
}
