import React from "react";
import './styling/PrototypesLanding.css';

export default function PrototypesLanding() {
    return (
        <div className="prototypes-container">
            <h2>Prototypes</h2>
            <div className="buttons-container">
                <button onClick={() => window.location.href = '/prototypes/SubscriptionForm'}>Subscription Manager</button>

                {/* Add more buttons here for additional prototypes */}
            </div>
            {/* Add more buttons here for additional prototypes */}
        </div>
    );
}
