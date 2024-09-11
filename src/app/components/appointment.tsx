import './appointment.css';
import './appointmentStatus';
import AppointmentStatus from './appointmentStatus';
export default function Appointment() {
    const appointments = [
        { id: 1, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: `Pending` },
        { id: 2, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 3, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 4, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 5, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 6, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 7, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 8, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 9, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 10, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 11, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
        { id: 12, visitType: 'New Symptoms', clinician: 'Dr. Chandra', provider: 'Cris Velaskez', location: 'City Hospital', date: '02/06/2024', duration: '40 min', comments: '-', insurance: 'Check', status: 'Pending' },
    ];
    return (
        <div className="appointment-main-cont">
            <div className="Appointment-heading-cont">
                <h1 className="Appointment-heading">Appointment</h1>
                <button className="Apply-Appointment-button">Apply Appointment</button>
            </div>
            <div className="Appointments-list-cont">
                <table>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Visit Type</th>
                            <th>Clinician</th>
                            <th>Provider</th>
                            <th>Location</th>
                            <th>Date</th>
                            <th>Duration</th>
                            <th>Comments</th>
                            <th>Insurance</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.visitType}</td>
                                <td>{appointment.clinician}</td>
                                <td>{appointment.provider}</td>
                                <td>{appointment.location}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.duration}</td>
                                <td>{appointment.comments}</td>
                                <td>{appointment.insurance}</td>
                                <td className="status"><AppointmentStatus/>{appointment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}