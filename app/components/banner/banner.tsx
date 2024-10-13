import React from 'react'
import style from './banner.module.css'

export default function banner() {
  return (
    <div>
        <h1 className={style.banner}>
            We provide best customized products on demand.<br></br>
            Get your order now.<br></br>
            <a href='https://www.youtube.com' target='_blank'>Click Me!</a>
        </h1>
    </div>
  )
}
