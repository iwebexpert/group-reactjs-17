import React from 'react'
import {nanoid} from 'nanoid'
import {Grid, Paper, Box} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined'
import {Messages} from '../messages'
import {Sender} from '../sender'
import './app.sass'

export class App extends React.Component {
   state = {
      messages: [
         {
               id: nanoid(),
               author: 'robot',
               text: 'Можно ввести новое имя сообщателя и нажать на старое для применения изменений'
         }, {
               id: nanoid(),
               author: 'robot',
               text: 'Можно ввести сообщение и отправить его кнопкой, которая появится справа'
         }
      ],
      robotCanAnswer: true
   }

   componentDidUpdate() {
      const {author} = this.state.messages[this.state.messages.length - 1]
      const {robotCanAnswer} = this.state

      if (author !== 'robot' && robotCanAnswer) {
         setTimeout(() => {
               this.addNewMessage({author: 'robot', text: `Спасибо тебе, ${author}, за информацию`})
               this.setState({robotCanAnswer: true})
         }, 3000)

         this.setState({robotCanAnswer: false})
      }
   }

   addNewMessage = (message) => {
      const {author, text} = message
      this.setState({
         messages: [
               ...this.state.messages, {
                  id: nanoid(),
                  author: author,
                  text: text
               }
         ]
      })
   }

   render() {
      const {messages} = this.state

      return (
         <div className="layout">  
            <div className="header">
               <span>geekMessenger</span>
               <span>{messages[messages.length - 1].author}</span>
            </div>
            <Grid container alignItems="stretch" spacing={2}>
               <Grid item xs={3}>
               <Paper  className="charts" elevation={3}>
                  <List component="nav" aria-label="main mailbox folders">
                     <ListItem button>
                       <ListItemIcon>
                         <ForumOutlinedIcon />
                       </ListItemIcon>
                       <ListItemText primary="Чат1" />
                     </ListItem>
                     <ListItem button>
                       <ListItemIcon>
                         <ForumOutlinedIcon />
                       </ListItemIcon>
                       <ListItemText primary="Чат2" />
                     </ListItem>
                     <ListItem button>
                       <ListItemIcon>
                         <ForumOutlinedIcon />
                       </ListItemIcon>
                       <ListItemText primary="Чат3" />
                     </ListItem>
                  </List>
               </Paper>
               </Grid>
               <Grid item xs={9}>
                  {/* <div className="messenger"> */}
                     <Paper className="messeges"elevation={3}>
                        <Messages messages={messages} />
                     </Paper>
                     <Box component="div" className="sender">
                        <Sender accessToAppState={this.addNewMessage} />
                     </Box>
                  {/* </div> */}
               </Grid>
            </Grid> 
         </div>
      )
   }
}