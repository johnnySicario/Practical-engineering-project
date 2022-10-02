import React from 'react';
import LogIn from '../connection/LogIn';
import Terms from '../other/Terms';
import UserProfile from '../profile/UserProfile';
import BusinessPage from '../Services/BusinessPage';

function Home(props) {
    return (
        <div>
            home
            {/* <LogIn></LogIn> */}
            {/* <BusinessPage/> */}
            <UserProfile />
        </div>
    );
}

export default Home;