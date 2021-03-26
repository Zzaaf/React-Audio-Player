import React, { useState, useRef } from 'react'
import styles from './player.module.scss'
import Context from '../../context/context'
import Play from '../Play/Play'
import Pause from '../Pause/Pause'
import Prev from '../Prev/Prev'
import Next from '../Next/Next'

function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef()
  const track = 'https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3'

  const togglePlay = () => {
    const audio = audioRef.current

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const minusThirty = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.floor(audio.currentTime - 30);
  }

  const plusThirty = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.floor(audio.currentTime + 30);
  }

  const checkEnded = () => {
    setIsPlaying(false)
  }

  return (
    <Context.Provider value={{ togglePlay, minusThirty, plusThirty }}>
      <div className={styles.wrapper}>
        <figure className={styles.player}>
          <audio src={track} ref={audioRef} onEnded={checkEnded}></audio>

          <div className={styles.check}>
            <Prev />
            {!isPlaying ? <Play /> : <Pause />}
            <Next />
          </div>
        </figure>
      </div>
    </Context.Provider>
  )
}

export default Player
