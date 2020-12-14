import React from "react"
import Alert from "@material-ui/lab/Alert"
import { IconButton, Collapse } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import CloseIcon from "@material-ui/icons/Close"
import useStyles from "./style"

export default function AlertShow(props) {
    const classes = useStyles()
    const { popup, deleteMessage, closeAlert } = props
    const [open, setOpen] = React.useState(popup.status)

    const handleDeleteMessage = () => {
        deleteMessage({
            id: popup.id,
            isSelect: popup.isSelect,
        })
    }

    const DeleteButton = popup.isSelect ? (
        <IconButton
            aria-label="delete"
            color="inherit"
            size="small"
            onClick={handleDeleteMessage}
        >
            <DeleteIcon fontSize="inherit" />
        </IconButton>
    ) : null

    return (
        <div className={classes.root}>
            <Collapse in={popup.status}>
                <Alert
                    variant="filled"
                    severity={popup.type === "error" ? "error" : "success"}
                    action={
                        <div>
                            {DeleteButton}

                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    closeAlert(false)
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </div>
                    }
                >
                    {popup.text}
                </Alert>
            </Collapse>
        </div>
    )
}
