import React, { useEffect, useState } from 'react';
import UserManagment from '../Administration/UserManagment.js';
import Contact from '../other/Contact.js';
import Main from '../Administration/User-management/Main/main.js';
import Publication from '../Services/Publication.js';
import Services from '../Services/Services.js';
import TableServices from '../Services/TableServices.js';
import SignUp from '../connection/SignUp.js';
import { Route, Routes } from 'react-router-dom';
import HomePageComp from './HomePage.js';
import LogIn from '../connection/LogIn.js';
import UserProfile from '../profile/UserProfile.js';
import Terms from '../other/Terms.js';
import Header from '../site/Header.js';
import Footer from '../site/Footer.js';
import About from '../other/About';
import FAQs from '../other/FAQs';
import AddPublication from '../Services/AddPublication.js';
import PetBreed from '../Services/PetBreed';
import useToken from '../../utils/useToken';

const MainPageComp = () => {
    const { token, setToken } = useToken();

    if (!token) {
        return <LogIn setTokenCheck={setToken} />
    }

    return (
        <>
      <Header/>
            <Routes>
                <Route path='/' element={<HomePageComp />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<TableServices />} />
                <Route path='/my-profile' element={<UserProfile />} />
                <Route path='/terms' element={<Terms />} />
                <Route path='/About' element={<About />} />
                <Route path='/HomePage' element={<HomePageComp />} />
                <Route path='/FAQs' element={<FAQs />} />
                <Route path='/Publication' element={<Publication />} />
                <Route path='/AddPublication' element={<AddPublication />} />
                <Route path='/PetBreed' element={<PetBreed />} />
            </Routes>
            <Footer />
        </>
    );
}

export default MainPageComp;