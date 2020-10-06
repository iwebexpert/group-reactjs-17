import React from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {Divider, IconButton, Paper, Box, Badge} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
import AddIcon from '@material-ui/icons/Add'
import './chats.sass'

export class Chats extends React.Component {
   addChatHandler = () => {
      const {parentMethod} = this.props

      const title = prompt('Введите название нового чата: ', 'Новый чат')
      title && parentMethod(title)
   }

   render() {
      const {chats} = this.props

      const chatList = chats.map((item) => {
         return (
            <Link key={item.id} to={`/chat/${item.id}`} className="link">
               <ListItem key={item.id} button selected={this.props.currentChatId == item.id ? true : false}>
                  <ListItemIcon>
                     <Badge badgeContent={item.currentChatMessagesCount} color="primary" overlap="circle">
                        <ForumOutlinedIcon />
                     </Badge>
                  </ListItemIcon>
                     <ListItemText>
                        {item.title}
                     </ListItemText>
               </ListItem>
            </Link>
         )
      })

      return (
         <Paper className="chats-wrapper" elevation={3}>
            <Box className="chats-list">
               <List component="nav" aria-label="chats">
                  {chatList}
               </List>
            </Box>
            <Divider />
            <Box className="add-btn">
               <IconButton
                  onClick={this.addChatHandler}
                  variant="round"
                  color="primary">
                     <AddIcon />
               </IconButton>
            </Box>
         </Paper>
      )
   }
}
