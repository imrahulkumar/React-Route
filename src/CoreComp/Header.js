import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
   <div className='header'>
      Family Head


      <Link to="Prithviraj-Kapoor" className='ml-2'>Prithviraj Kapoor</Link>
       <Link to="Trilok-Kapoor" className='ml-2'>Trilok Kapoor</Link>
   </div>
  )
}
