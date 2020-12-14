import { connect } from "react-redux"
import AlertShow from "components/AlertShow/AlertShow"
import { alertCloseAction } from "actions/alerts"

const mapStateToProps = (store) => {
    const { popup } = store.alert
    return { popup }
}

const mapDispatchToProps = {
    closeAlert: alertCloseAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertShow)
