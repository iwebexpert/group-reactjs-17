import React from "react"
import Draggable from "react-draggable"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
    TextField,
    Avatar,
} from "@material-ui/core"

import useStyles from "./style"

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    )
}

export default function Profile(props) {
    const classes = useStyles()
    const { profile, handleNameChange } = props

    const [open, setOpen] = React.useState(false)
    const [firstName, setFirstName] = React.useState(profile.firstName)
    const [email, setEmail] = React.useState(profile.email)
    const [lastName, setLastName] = React.useState(profile.lastName)
    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (firstName.length > 0 || lastName.length > 0) {
                handleConfirm()
            }
        }
    }
    const handleConfirm = () => {
        const data = { firstName, lastName }
        handleNameChange(data)
        handleClose()
    }

    return (
        <div className={classes.regButton}>
            <Avatar
                className="avatar"
                onClick={handleClickOpen}
                src={profile.avatar}
            />
            <Dialog
                open={open}
                fullWidth
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle
                    style={{ cursor: "move" }}
                    id="draggable-dialog-title"
                >
                    <div className={classes.profileTitleContainer}>
                        {profile.firstName} {profile.lastName}
                    </div>
                </DialogTitle>
                <DialogContent>
                    <Avatar
                        className="avatar"
                        className={classes.large}
                        src={profile.avatar}
                    />
                    <DialogContentText>
                        Введите новые данные о пользователе
                    </DialogContentText>
                    <DialogContentText>
                        Возраст : {profile.age}
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        onChange={handleFirstNameChange}
                        value={firstName}
                        onKeyUp={(event) => handleKeyUp(event, firstName)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Фамилия"
                        onChange={handleLastNameChange}
                        value={lastName}
                        onKeyUp={(event) => handleKeyUp(event, lastName)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        type="email"
                        label="Почта"
                        onChange={handleEmailChange}
                        value={email}
                        onKeyUp={(event) => handleKeyUp(event, email)}
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        Потдвердить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
