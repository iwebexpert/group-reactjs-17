import React from 'react'
import {Header} from '@components/header'
import {Container} from '@material-ui/core'

const DefaultLayout = ({children}) => {
  return ( 
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
   )
}
 
export {DefaultLayout}