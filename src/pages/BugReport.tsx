import React, { useState } from 'react';
import { BugReportCreateDTO } from '../types';
import { useAuth } from '../hooks/useAuth';
import { useLocation } from 'react-router';



const BugReportPage: React.FC = () => {
  const [bugReport, setBugReport] = useState({
    description: '',
  });

  const { user } = useAuth();

  const projectId: string = useLocation().state;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBugReport({ ...bugReport, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bugReportData: BugReportCreateDTO = {
      description: bugReport.description,
      projectId,
      tester: {
        id: user!._id,
        name: user!.name
      }
    }
    console.log(bugReportData);
  };

  return (
    <div>
      <h2>Create Bug Report</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={bugReport.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit Bug Report</button>
      </form>
    </div>
  );
};

export default BugReportPage;
