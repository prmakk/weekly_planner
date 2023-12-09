import React, { useEffect } from 'react'
import styles from './LightDarkBtn.module.css'

const LightDarkBtn = () => {

  const setDarkMode = () =>{
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }

  const setLightMode = () =>{
    document.querySelector('body').setAttribute('data-theme', 'light')
  }

  const toggleTheme = (e) =>{
    if(e.target.checked){
      setDarkMode()
    }else{
      setLightMode()
    }
  }

  useEffect(() =>{
    setLightMode()
  }, [])

  return (
    <div className={styles.toggleWrapper || 'switchThemeBtn'}>
      <input type="checkbox" className={styles.dn} id="dn" onChange={toggleTheme}/>
      <label htmlFor="dn" className={styles.toggle}>
          <span className={styles.toggle__handler}>
              <span className={styles.crater && styles.crater__1}></span>
              <span className={styles.crater && styles.crater__2}></span>
              <span className={styles.crater && styles.crater__3}></span>
          </span>
          <span className={styles.star && styles.star__1}></span>
          <span className={styles.star && styles.star__2}></span>
          <span className={styles.star && styles.star__3}></span>
          <span className={styles.star && styles.star__4}></span>
          <span className={styles.star && styles.star__5}></span>
          <span className={styles.star && styles.star__6}></span>
      </label>
  </div>
  )
}

export default LightDarkBtn