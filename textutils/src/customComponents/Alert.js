import React  from 'react'

function Alert(props) {
    return(
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}</strong> {props.alert.msg}
            </div>
    )
    return(
            props.redAlert && <div className={`alert alert-${props.redAlert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.redAlert.type}</strong> {props.redAlert.msg}
            </div>
    )
}
export default Alert