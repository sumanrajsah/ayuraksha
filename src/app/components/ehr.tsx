import React, { useState, useEffect } from 'react';
import './ehr.css';
import { Download, Preview, Close, Printout } from './ehraction';

// Define the type for a report
interface Report {
  date: string;
  issue: string;
  doctor: string;
  consultedBy: string;
  file: string;
}

const reports: Report[] = [
  {
    date: '09/08/2024',
    issue: 'Headache',
    doctor: 'Dr. A. Smith',
    consultedBy: 'John Doe',
    file: 'headache_report.pdf', // Example file for preview
  },
  {
    date: '09/07/2024',
    issue: 'Fever',
    doctor: 'Dr. B. Jones',
    consultedBy: 'Jane Doe',
    file: 'fever_report.pdf',
  },
  {
    date: '09/06/2024',
    issue: 'Back Pain',
    doctor: 'Dr. C. Brown',
    consultedBy: 'Mark White',
    file: 'backpain_report.pdf',
  },
];

export default function Ehr() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  // Function to handle the preview action
  const handlePreview = (report: Report) => {
    setSelectedReport(report);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedReport(null);
  };

  // Add an event listener for the Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Dummy download function (replace with real logic)
  const handleDownload = (report: Report) => {
    alert(`Downloading report for: ${report.issue}`);
  };

  return (
    <div className="ehr-main-cont">
      <div className="ehr-heading-cont">
        <h1 className="ehr-heading">EHR (Electronic Health Record)</h1>
      </div>

      <div className="ehr-list-cont">
        <table className="ehr-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Issue/Consult For</th>
              <th>Doctor Name</th>
              <th>Consulted By</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.date}</td>
                <td>{report.issue}</td>
                <td>{report.doctor}</td>
                <td>{report.consultedBy}</td>
                <td>
                  <button className="btn-preview" onClick={() => handlePreview(report)}>
                    <Preview />
                  </button>
                  <button className="btn-download" onClick={() => handleDownload(report)}>
                    <Download />
                  </button>
                  <button className="btn-download" onClick={() => handleDownload(report)}>
                    <Printout />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for previewing the report */}
      {isModalOpen && selectedReport && (
        <div className="preview-popup-overlay">
          <div className="preview-popup-content">
            <h2>Preview of {selectedReport.issue} Report</h2>
            <button className="btn-close" onClick={closeModal}>
              <Close/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
