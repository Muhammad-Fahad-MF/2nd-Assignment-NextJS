import React from 'react'
import style from './services.module.css'

export default function services() {
  return (
    <div className={style.services}>
        <h1> We provide our services in:</h1> 
            <h2>
                <ul className={style.ul}>
                 <li>Web Development</li>
                 <li>App Development</li>
                 <li>Artificial Intellingence</li>
                 <li>Machine Learning</li>
                </ul>
            </h2>
    </div>
  )
}
