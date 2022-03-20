import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {getAuthUserData} from "../../redux/auth-reducer";



class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()

    }
    render() {
        return <Header {...this.props}/>
    }
}
mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);