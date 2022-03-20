import React from 'react';
import s from './Cabinet.module.css'
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/post-reducer";
import Cabinet from "./Cabinet";
import {useMatch} from "react-router";



class CabinetContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId: '21422';
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
    return (
        <div className={s.mainContainer}>
            <Cabinet {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
    );
};
}

const CabinetMatch = (props) => {

    let match = useMatch('/cabinet/:userId/');
    return <CabinetContainer {...props} match={match} />;
}

let mapStateToProps = (state) => ({
    profile: state.postsPage.profile,
    status: state.postsPage.status
})



export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}) (CabinetMatch);