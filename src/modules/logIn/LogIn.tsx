import React, { useState } from 'react';

interface IProps {
    signInRequest: Function
}

const Login: React.FC<IProps> = props => {

    const { signInRequest } = props
    
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const getInputValue = (event: any) => {
        const { name, value} = event.target;
        setUserData(preValue => {
            return {
                ...preValue,
                [name]: value
            }
        });
    }

    const onSignIn = (event: any) => {
        event.preventDefault();
        signInRequest(userData);
        setUserData({
            username: '',
            password: ''
        })
    }

    return (
        <form onSubmit={onSignIn}>
            <p>
                Login
            </p>
            <input
                name='username'
                onChange={getInputValue}
                value={userData.username}
            />
            <p>
                Password
            </p>
            <input 
                value={userData.password}
                type="password"
                name="password"
                onChange={getInputValue}
            />
            <button type="submit">
                Login
            </button>
        </form>
    );
};

export default React.memo(Login);
