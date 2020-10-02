import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {
  Container,
  Box,
  Typography
} from '@material-ui/core'
import {nanoid} from 'nanoid'
import {blue} from '@material-ui/core/colors'
import './Header.scss'

class Header extends Component {
  render() {
    const {margin} = this.props
    const links = [
      { name: 'Home', path: '/'},
      { name: 'Chats', path: '/chats'},
      { name: 'About', path: '/about'},
      { name: 'Profile', path: '/profile'},
    ]
    return (
      <Box
        color={blue[400]}
        bgcolor={blue[900]}
        height={100}
        display="flex"
        alignItems="center"
        marginBottom={margin ? "-100px" : 0}
      >
        <Container>
          
          <ul className="header-nav">
            
            {links.map(({ name, path}, index) => (
              <li key={nanoid()}>
                <Link to={path}>
                  <Typography
                    variant="h4"
                  >
                    {name}
                  </Typography>
                </Link>
              </li>
            ))}
            
          </ul>

        </Container>
      </Box>
    )
  }
}

export {Header}
