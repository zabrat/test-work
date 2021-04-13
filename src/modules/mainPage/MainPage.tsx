import React from 'react';
import Login from '../logIn';

const MainPage: React.FC = () => {
    return (
        <>
            <Login/>
        </>
    )
}

export default React.memo(MainPage);
