import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styling/subscription.css';
import Reminder from './Reminder';

const SubscriptionForm = () => {
    const [subscription, setSubscription] = useState({
        name: '',
        cost: '',
        paymentMethod: '',
        renewalDate: new Date(),
        createReminder: false,
        reminderDays: [1],
        reminderEmail: '',
    });

    const [reminderChecked, setReminderChecked] = useState(false);

    const handleCheckboxChange = () => {
        setReminderChecked(!reminderChecked);
        setSubscription({ ...subscription, createReminder: !reminderChecked });
    };

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

    const handleDateChange = (date) => {
        setSubscription({ ...subscription, renewalDate: date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can submit the subscription data
        console.log(subscription);
    };

    return (
        <div className="subscription-page-container">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>
                        Subscription Name:
                        <input
                            type="text"
                            name="name"
                            value={subscription.name}
                            onChange={(e) =>
                                setSubscription({ ...subscription, name: e.target.value })
                            }
                        />
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        Cost:
                        <input
                            type="text"
                            name="cost"
                            value={subscription.cost}
                            onChange={(e) =>
                                setSubscription({ ...subscription, cost: e.target.value })
                            }
                        />
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        Payment Method:
                        <input
                            name="paymentMethod"
                            value={subscription.paymentMethod}
                            onChange={(e) =>
                                setSubscription({ ...subscription, paymentMethod: e.target.value })
                            }
                        />
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        Next Charge Date:
                        <DatePicker
                            selected={subscription.renewalDate}
                            onChange={handleDateChange}
                            dateFormat="yyyy-MM-dd"
                        />
                    </label>
                </div>
                <div className="checkbox-container">
                    <label>
                        Create Reminder:
                    </label>
                    <input
                        type="checkbox"
                        checked={reminderChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                {subscription.createReminder && <Reminder subscription={subscription} setSubscription={setSubscription} />}
                < button type="submit">Submit</button>
            </form >
        </div>
    );
};

export default SubscriptionForm;
