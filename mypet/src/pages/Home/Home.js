import React, { useEffect } from 'react';
import UserManagment from '../Administration/UserManagment.js';
import Contact from '../other/Contact.js';
import Main from '../Administration/User-management/Main/main.js';
import Publication from '../Services/Publication.js';
import Services from '../Services/Services.js';
import TableServices from '../Services/TableServices.js';
import SignUp from '../connection/SignUp.js';
import LogIn from '../connection/LogIn.js';
import UserProfile from '../profile/UserProfile.js';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/actions/getUsersActions.js';
import HomePageComp from './HomePage.js';

const MainPageComp = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    const usersLoading = useSelector(state => state.users.usersLoading)
    
    console.log('loading users...' , usersLoading);
    console.log('users' , users);

    useEffect(() => {
     dispatch(getUsersAction())  
    },[dispatch])

    return (
        <>
        <Routes>
            <Route path='/' element={<HomePageComp/>}/>
            <Route path='/my-profile' element={<UserProfile/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/Sign-Up' element={<SignUp/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/service' element={<TableServices/>}/>
        </Routes>
        </>
    )
}

export default MainPageComp;