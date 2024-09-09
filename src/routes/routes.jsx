// src/routes/routes.jsx
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import HotelDetailPage from '../HotelDetailPage'; 


// Lazy loaded components
const HomePage = lazy(() => import('../component/HomePage/HomePage'));
const RoomPage = lazy(() => import('../component/RoomPage/RoomPage'));
const Amenities = lazy(() => import('../component/Amenities/Amenities'));
const Book = lazy(() => import('../component/Book/Book'));
const ContactPage = lazy(() => import('../component/ContactPage/ContactPage'));
const Dashboard = lazy(() => import('../component/DashBoard/DashBoard'));


const AppRoutes = () => {
    return (
        <AppLayout>
            <Suspense fallback={<p>Loading..........</p>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/hotel/:name" element={<HotelDetailPage />} />
                    <Route path="/room" element={<RoomPage />} />
                    <Route path="/book" element={<Book/>} />
                    <Route path="/amenities" element={<Amenities />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Suspense>
        </AppLayout>
    );
};

export default AppRoutes;



