import React from 'react';
import {connect} from 'react-redux';
import {profileLoadAction, profileUpdateAction} from "../actions/profiles";
import {Profile} from "../components/Profile/";

class ProfileContainerClass extends React.Component {
    componentDidMount(){
        this.props.profileLoadAction();
    }
    handleUpdateProfile = (profile) => {
        this.props.profileUpdateAction(profile);
    }
    handleProfileReload = () => {
        this.props.profileLoadAction();
    }
    render(){
       
        // const ProfileData = profile.map((item) => (
        //     <div key={item.id}>
        //         <h1>{item.name}</h1>
        //         <p>Login: {item.title}</p>
        //         <p>{item.text}</p>
        //     </div>
        // ));
        // return(
        //     <div>
        //         {ProfileData}
        //     </div>
        // );
        const {profile, isLoading, isError} = this.props;
        return (
            <Profile
                profile={profile}
                handleUpdateProfile={this.handleUpdateProfile}
                isLoading={isLoading}
                isError={isError}
                handleProfileReload={this.handleProfileReload}
            />
        );
    }
}
function mapStateToProps(state){
    const {profile} = state;
    return{
        profile: profile.data,
        isLoading: profile.loading,
        isError: profile.error,
    };
}

function mapDispatchToProps(dispatch){
    return {
        profileLoadAction: () => dispatch(profileLoadAction()),
        profileUpdateAction: (profile) => dispatch(profileUpdateAction(profile)),
    };
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass); 