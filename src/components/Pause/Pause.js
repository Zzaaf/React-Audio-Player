import React, { useContext } from 'react'
import styles from '../Player/player.module.scss'
import Context from '../../context/context'

function Pause(props) {
  const { togglePlay } = useContext(Context);
  return (
    <button className={styles.btn} onClick={togglePlay}>
      <i className='fa fa-pause fa-2x'></i>
    </button>
  )
}

export default Pause
