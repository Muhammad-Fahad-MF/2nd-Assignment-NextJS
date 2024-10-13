import React from 'react'
import style from './footer.module.css'

export default function footer() {
  return (
    <div className={style.footer}>
        <h2 className={style.create}>Created By : 'Next.JS'</h2>
        <h2 className={style.info}>For Further Information : Go to About</h2>
        <br></br>
        <br></br>
        <h2 className={style.rights}>All Rights Reserved!</h2>
    </div>
  )
}
