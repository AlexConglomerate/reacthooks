import React from 'react';

const withFunctions = (Component) => (props) => {
    const onLogin = () => localStorage.setItem("auth", 'token')
    const onLogOut = () => localStorage.removeItem("auth")
    const isAuth = localStorage.getItem('auth')

    return (
        <Component isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut}/>
    );
}

export default withFunctions;