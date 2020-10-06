import React from 'react';
import {connect} from 'react-redux';
import {profilesLoadAction} from '../actions/profiles';

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profilesLoadAction();
    }
    render(){
        const {profile} = this.props;
        console.log(this.props);
        const ProfileData = profile.map((item) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>Login: {item.title}</p>
                <p>{item.text}</p>
            </div>
        ));
        return(
            <div>
                {ProfileData}
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    const profile = state.profile.entries;
    return{
        profile,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profilesLoadAction: () => dispatch(profilesLoadAction()),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass); 