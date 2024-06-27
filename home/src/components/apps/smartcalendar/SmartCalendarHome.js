import React, { useState } from "react";
// import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './styling/calendar.css';

export default function SmartCalendarHome() {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState(null);
    const [showReport, setShowReport] = useState(false);

    const handleDeleteDuplicates = () => {
        // Logic for handling delete_duplicates
        // call api: http://127.0.0.1:5000/events/delete_duplicates
        // POST: no AUTH.
        //https://p8mjzdkjq8.execute-api.us-east-1.amazonaws.com/Dev
        fetch("https://brjc7ejohk.execute-api.us-east-1.amazonaws.com/dev/events/delete_duplicates", {
            method: 'POST'
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to delete duplicates');
            })
            .then(data => {
                console.log("Events deleted:", data);
            })
            .catch(error => {
                console.error('Error deleting duplicates:', error);
            });
    }

    const handleFetchReport = () => {
        // Logic for handling fetch_report
        // console.log("Fetch report logic goes here");
        // call api: http://127.0.0.1:5000/events/report
        console.log("Fetching report...");
        // GET
        fetch("https://brjc7ejohk.execute-api.us-east-1.amazonaws.com/dev/events/report")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to fetch report');
            })
            .then(data => {
                // Return format: { "May 31 - Jun 06": 39.0, "Jun 07 - Jun 13": 30.0, ... }
                setReportData(data); // Store the fetched report data in state
                setShowReport(true); // Show the report
            })
            .catch(error => {
                console.error('Error fetching report:', error);
            });
    }

    const handleToggleReport = () => {
        setShowReport(!showReport); // Toggle showReport state
    }

    return (
        <main className="smart-calendar-container">
            <h2>SmartCalendar Home Page</h2>
            <button onClick={handleDeleteDuplicates}>Delete Duplicates</button>
            <button onClick={showReport ? handleToggleReport : handleFetchReport}>
                {showReport ? "Hide Report" : "Show Report"}
            </button>
            {reportData && showReport && (
                <table className="report-table">
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(reportData).map(([week, hours]) => (
                            <tr key={week}>
                                <td>{week}</td>
                                <td>{hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </main>
    );
}
