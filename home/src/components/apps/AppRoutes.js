import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SmartCalendarHome from './smartcalendar/SmartCalendarHome';
import LoginForm from './smartcalendar/Login';
import Applications from './AppLanding';

// import { AuthProvider } from './smartcalendar/AuthContext';
export default function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<Applications />} />
            <Route path="/SmartCalendar" element={<LoginForm />} />
            <Route path="/SmartCalendar/home" element={<SmartCalendarHome />} />
        </Routes>
    );
}