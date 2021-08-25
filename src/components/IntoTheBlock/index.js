import React, { useState } from 'react'
import Widget from './Widget'
import './IntoTheBlock.css'
import { useDarkModeManager } from '../../contexts/LocalStorage'

const IntoTheBlock = ({ pairAddress }) => {
  const [nightMode] = useDarkModeManager()
  const [notSupported, setNotSupported] = useState(false)

  return (
    <div className={nightMode ? 'night-mode' : ''}>
      {notSupported ? (
        <div className="not-supported">Pair not supported</div>
      ) : (
        <Widget pairAddress={pairAddress} nightMode={nightMode} onPairNotSupported={setNotSupported} />
      )}
    </div>
  )
}

export default IntoTheBlock
