import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@material-ui/core' 

class Header extends Component {
    render(){
        const title = this.props.title
        return(
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" >
                        {this.props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header