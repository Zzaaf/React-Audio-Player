import React, { useContext } from 'react'
import styles from '../Player/player.module.scss'
import Context from '../../context/context'
import image from '../../icons/next.svg'

function Next(props) {
  const { plusThirty } = useContext(Context)
  return (
    <button className={styles.btn} onClick={plusThirty}>
      <img src={image} alt='' />
    </button>
  );
}

export default Next
