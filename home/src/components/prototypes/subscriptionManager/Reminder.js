import React from 'react';
import './styling/subscription.css';

const Reminder = ({ subscription, setSubscription }) => {
    const handleReminderDaysChange = (day) => {
        const isDaySelected = subscription.reminderDays.includes(day);
        if (isDaySelected) {
            const updatedDays = subscription.reminderDays.filter((d) => d !== day);
            setSubscription({ ...subscription, reminderDays: updatedDays });
        } else {
            const updatedDays = [...subscription.reminderDays, day];
            setSubscription({ ...subscription, reminderDays: updatedDays });
        }
    };

    const handleCheckboxChange = () => {
        setSubscription({ ...subscription, createReminder: !subscription.createReminder });
    };

    return (
        <div className="reminder-days-container">
            <p>Select Reminder Days:</p>
            <div className="reminder-days-boxes">
                {[7, 5, 3, 1].map((day) => (
                    <span
                        key={day}
                        className={`reminder-box ${subscription.reminderDays.includes(day) ? 'green' : 'red'}`}
                        onClick={() => handleReminderDaysChange(day)}
                    >
                        {day} days
                    </span>
                ))}
            </div>
        </div>

    );
};

export default Reminder;
