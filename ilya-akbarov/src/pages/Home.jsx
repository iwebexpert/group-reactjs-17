import React from 'react'
import {Container, Typography} from '@material-ui/core'
import {DefaultLayout} from '@components/layout'

const Home = () => {
  return (
    <DefaultLayout>
      <Typography
        variant="h1"
        align="center"
      >
        Home Page
        </Typography>
    </DefaultLayout>
  )
}

export default Home