import React, {Component} from 'react'
import {Header} from '@components/header'
import {Box} from '@material-ui/core'
import {ChatList} from '@components/chatList'
import {blue} from '@material-ui/core/colors'

class Layout extends Component {
  render() {
    const {children} = this.props
    return (
      <>
        <Header />
        <Box
          height="100vh"
          paddingTop="100px"
          boxSizing="border-box"
          overflow="hidden"
          display="flex"
        >
          <Box
            height="100%"
            width="20%"
            bgcolor={blue[300]}
          >
            <ChatList />
          </Box>

          <Box
            height="100%"
            width="80%"
            bgcolor={blue[200]} 
          >
            {children}
          </Box>
          
        </Box>
      </>
    )
  }
}

export {Layout}