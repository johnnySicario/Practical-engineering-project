import { useEffect } from 'react';
import Contact from '../other/Contact.js';
import Publication from '../Services/Publication.js';
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
import { ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';
import UserManagment from '../Administration/UserManagment.js';

const MainPageComp = () => {
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserLoading())
    },[dispatch])

    return (
        <>
      {token ? <Header/> : null}
      <ToastContainer autoClose={2000}/>
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
                <Route path='/users' element={token ? <UserManagment /> : <Navigate to="/login"/>} />
            </Routes>
            { token ? <Footer /> : null}
        </>
    );
}

export default MainPageComp;