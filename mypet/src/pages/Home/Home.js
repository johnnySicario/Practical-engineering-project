import React, { useEffect, useState } from 'react';
import UserManagment from '../Administration/UserManagment.js';
import Contact from '../other/Contact.js';
import Main from '../Administration/User-management/Main/main.js';
import Publication from '../Services/Publication.js';
import Services from '../Services/Services.js';
import TableServices from '../Services/TableServices.js';
import SignUp from '../connection/SignUp.js';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { getUserLoading } from '../../redux/actions/getUsersActions.js';

const MainPageComp = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.users.token)

    console.log(token);
    useEffect(() => {
        dispatch(getUserLoading())
    },[dispatch])

    return (
        <>
      { token ? <Header/> : null}
            <Routes>
                <Route path='/' element={token ? <HomePageComp /> : <Navigate to="/login"/>} />
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
            { token ? <Footer /> : null}
        </>
    );
}

export default MainPageComp;