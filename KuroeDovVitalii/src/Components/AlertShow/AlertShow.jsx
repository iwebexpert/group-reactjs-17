import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { IconButton, Collapse, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '1rem',
    right: '2rem',
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function AlertShow(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.popup.status);
  
  const handleDeleteMessage = () => {
    props.handleDeleteMessage({ id: props.popup.id, isSelect: props.popup.isSelect })
  }

  const DeleteButton = props.popup.isSelect ?
    <IconButton
      aria-label="delete"
      color="inherit"
      size="small"
      onClick={ () => handleDeleteMessage() }
      >
        <DeleteIcon fontSize="inherit" />
    </IconButton> : null

  return (
    <div className={ classes.root }>
      <Collapse in={ props.popup.status }>
        <Alert 
          variant="filled" 
          severity={ props.popup.type === "error" ? "error" : "success" }
          action={
            <div>
              { DeleteButton }

              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  props.hanldeCloseAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          }
        > 
          { props.popup.text }
        </Alert>
      </Collapse>
    </div>
  )
}