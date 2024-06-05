import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import SmartCalendarHome from './smartcalendar/SmartCalendarHome';
// import LoginForm from './smartcalendar/Login';
// import { AuthProvider } from './smartcalendar/AuthContext';
// import Reminder from './subscriptionManager/Reminder';
import SubscriptionForm from './subscriptionManager/Subscription';
import PrototypesLanding from './PrototypeHome';
export default function PrototypeRoutes() {
    return (
        <Routes>
            <Route path="" element={<PrototypesLanding />} />
            <Route path="/SubscriptionForm" element={<SubscriptionForm />} />
            {/* <Route path="applications/SmartCalendar/home" element={<SmartCalendarHome />} /> */}
        </Routes>
    );
}