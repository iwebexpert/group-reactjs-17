import ReactDom from 'react-dom'
import React from 'react'
import {Messenger} from 'components/Messenger'

import './index.scss'

ReactDom.render(
    <>
      <Messenger />
    </>,
    document.getElementById('root')
  )

