import React from 'react'
import style from './header.module.css'
export default function Header() {
  return (
    <div className={style.anchor}>
         <a href='#'>Home</a>
         <a href='#'>Services</a>
         <a href='#'>About</a>
         <a href='#'>Contact Us</a>
    </div>
  )
}
