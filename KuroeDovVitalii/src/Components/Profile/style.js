import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    profileTitleContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        boxSizing: "border-box",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    regButton: {
        margin: "0 1rem 0 0",
    },
    large: {
        width: theme.spacing(17),
        height: theme.spacing(17),
        margin: "0 auto",
    },
}))

export default useStyles
