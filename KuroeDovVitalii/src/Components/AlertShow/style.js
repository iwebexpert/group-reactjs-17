import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        bottom: "1rem",
        right: "2rem",
        width: "60%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}))

export default useStyles
