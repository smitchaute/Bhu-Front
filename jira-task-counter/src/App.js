// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [assignedCount, setAssignedCount] = useState(0);
  const [unassignedCount, setUnassignedCount] = useState(0);

  useEffect(() => {
    const fetchTaskCounts = async () => {
      try {
        const assignedResponse = await axios.get('https://bhu-front-v24t-git-main-smitchaute.vercel.app/assigned-count');
        setAssignedCount(assignedResponse.data.count);

        const unassignedResponse = await axios.get('https://bhu-front-v24t-git-main-smitchaute.vercel.app/unAssigned-count');
        setUnassignedCount(unassignedResponse.data.count);
      } catch (error) {
        console.error('Error fetching task counts:', error.message);
      }
    };

    fetchTaskCounts();
  }, []);

  return (
    <div className="app-container">
      <h1>Jira Task Counter</h1>
      <div className="task-counts">
        <p>Assigned Tasks: {assignedCount}</p>
        <p>Unassigned Tasks: {unassignedCount}</p>
      </div>
    </div>
  );
};

export default App;
