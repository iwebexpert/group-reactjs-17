import React, {Component} from 'react'
import {Container, Box, } from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {blue, purple, pink} from '@material-ui/core/colors'

class Header extends Component {
  state = {}
  render() {
    return (
      <Box
        color={blue[400]}
        bgcolor={blue[900]}
        height={100}
        marginBottom="-100px"
        display="flex"
        alignItems="center"
      >
        <Container>

          <Typography
            variant="h2"
            align="center"
          >
            Messenger
          </Typography>

        </Container>
      </Box>
    )
  }
}

export {Header}