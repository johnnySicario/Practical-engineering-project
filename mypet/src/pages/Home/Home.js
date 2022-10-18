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
import { useDispatch, useSelector } from 'react-redux';
import { getUserLoading } from '../../redux/actions/getAuthActions.js';

const MainPageComp = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserLoading())
    },[dispatch])

    return (
        <>
      {token ? <Header/> : null}
            <Routes>
                <Route path='/' element={token ? <HomePageComp /> : <Navigate to="/login"/> } />
                <Route path='/sign-up' element={token ? <Navigate to="/"/> : <SignUp />} />
                <Route path='/login' element={token ? <Navigate to="/"/> : <LogIn />} />
                <Route path='/contact' element={token ? <Contact /> : <Navigate to="/login"/>} />
                <Route path='/service' element={token ? <TableServices /> : <Navigate to="/login"/>} />
                <Route path='/my-profile' element={token ? <UserProfile /> : <Navigate to="/login"/>} />
                <Route path='/terms' element={token ? <Terms /> : <Navigate to="/login"/>} />
                <Route path='/About' element={token ? <About /> : <Navigate to="/login"/>} />
                <Route path='/FAQs' element={token ? <FAQs /> : <Navigate to="/login"/>} />
                <Route path='/Publication' element={token ? <Publication /> : <Navigate to="/login"/>} />
                <Route path='/AddPublication' element={token ? <AddPublication /> : <Navigate to="/login"/>} />
                <Route path='/PetBreed' element={token ? <PetBreed /> : <Navigate to="/login"/>} />
            </Routes>
            { token ? <Footer /> : null}
        </>
    );
}

export default MainPageComp;