import React, { useState, useEffect } from 'react';
import './ehr.css';
import { Download, Preview, Close, Printout } from './ehraction';
import axios from 'axios';

// Define the type for a report

function formatTimestamp(timestampStr: string): string {
  const timestamp = Number(timestampStr); // Convert the string timestamp to a number
  const date = new Date(timestamp); // Create a Date object from the timestamp

  const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-based index) and pad with leading zero
  const year = date.getFullYear(); // Get the full year

  return `${day}/${month}/${year}`; // Return in dd, mm, yyyy format
}
function convertIpfsUriToHttp(ipfsUri:any) {
  if (ipfsUri.startsWith('ipfs://')) {
    return ipfsUri.replace('ipfs://', 'https://ayuraksha.infura-ipfs.io/ipfs/');
  }
  return ipfsUri; // Return the original URI if it's not IPFS format
}
export default function Ehr() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [report,setReport]=useState<Report[] | null>(null)
  const [showUploadModel,setUploadModel]=useState(false);
  // Function to handle the preview action
  const handlePreview = (report:any) => {
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

      const fetchReports= async() =>{
        try{
          const response= await axios.get('/api/ehr');
          if(response.data.success){
            setReport(response.data.reports.reverse())
          }
        }catch(e){}
      }
      fetchReports()
 

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Dummy download function (replace with real logic)
  const mimeToExtensionMap: { [key: string]: string } = {
    'application/pdf': '.pdf',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'application/json': '.json',
    'text/plain': '.txt',
    // Add more MIME types and their corresponding extensions as needed
  };
  
  const handleDownload = async (ipfsUri: string) => {
    try {
      const httpUrl = convertIpfsUriToHttp(ipfsUri[4]); // Convert IPFS URI to HTTP
  
      // Fetch the file
      const response = await fetch(httpUrl);
      const blob = await response.blob(); // Get the file as a Blob
      const mimeType = blob.type; // Get the MIME type of the blob
  
      // Determine the file extension based on the MIME type
      const extension = mimeToExtensionMap[mimeType] || ''; // Default to an empty string if MIME type not mapped
      const url = window.URL.createObjectURL(blob); // Create a download link
  
      // Create a temporary anchor element for downloading
      const a = document.createElement('a');
      a.href = url;
  
      // Set the filename dynamically with the correct extension
      a.download = `${ipfsUri[0]}${extension || '.bin'}`; // Fallback to '.bin' if extension is not recognized
      document.body.appendChild(a);
      a.click(); // Trigger the download
      a.remove(); // Clean up the DOM
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };
  const handlePrint = async (ipfsUri: string) => {
    try {
      const httpUrl = convertIpfsUriToHttp(ipfsUri[4]); // Convert IPFS URI to HTTP

      const response = await fetch(httpUrl);
      const blob = await response.blob();
      const mimeType = blob.type;

      const extension = mimeToExtensionMap[mimeType] || '';
      const url = window.URL.createObjectURL(blob);

      // Open the file in a new tab for printing
      const newWindow = window.open(url, '_blank');
      if (newWindow) {
        newWindow.onload = () => {
          newWindow.print(); // Automatically trigger print when the window is loaded
        };
      }
    } catch (error) {
      console.error('Error printing the file:', error);
    }
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
          {(report) && <tbody>
            {report.map((report:any, index) => (
              <tr key={index}>
                <td>{formatTimestamp(report[0])}</td>
                <td>{report[1]}</td>
                <td>{report[2]}</td>
                <td>{report[3]}</td>
                <td>
                  <button className="btn-preview" onClick={() => handlePreview(report)}>
                    <Preview />
                  </button>
                  <button className="btn-download" onClick={() => handleDownload(report)}>
                    <Download />
                  </button>
                  <button className="btn-download" onClick={() => handlePrint(report)}>
                    <Printout />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>}
        </table>
      </div>

      {/* Modal for previewing the report */}
      {isModalOpen && selectedReport && (
        <div className="preview-popup-overlay">
          <div className="preview-popup-content">
            <h2>Preview of {selectedReport[1]} Report</h2>
            <button className="btn-close" onClick={closeModal}>
              <Close/>
            </button>
            <iframe src={`${convertIpfsUriToHttp(selectedReport[4])}`} width='80vw' height='80vh'/>
          </div>
        </div>
      )}
        <button className="upload-report-button" onClick={()=>setUploadModel(true)}>
          Upload Reports
        </button>
       {showUploadModel && <div className='upload-report-cont'>
        <button className="btn-close" onClick={()=>setUploadModel(false)}>
              <Close/>
            </button>
            <input type="text" placeholder='issue' />
            <input type="text" placeholder='doctor name' />
            <input type="text" placeholder='consulted by' />
            <input type='file'/>
            <button>upload report</button>
        </div>}
    </div>
  );
}
