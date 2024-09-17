'use client';
import React, { useState } from 'react';
import './style.css'; 
import '@fontsource/poppins';

type FeedbackType = {
  name: string;
  gender: string;
  age: number;
  patientId: number;
  reason: string;
  trustRating: string;
};

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState<FeedbackType>({
    name: '',
    gender: '',
    age: 0,
    patientId: 0,
    reason: '',
    trustRating: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

      const data = await response.json();
      console.log(data);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <main className='feedback-main'>
      <h1 className="feedback-heading-one">Doctor Feedback Form</h1>
      <p className="feedback-heading-two">Please leave your feedback survey below</p>
      <div className='feedback-box'>
        <form className='feedback-form' onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor='name'></label>
          <input 
            type='text' 
            id='name' 
            name='name' 
            placeholder='Enter your name' 
            value={feedback.name} 
            onChange={handleInputChange} 
            required 
            className='feedback-input'
          /><br />

          {/* Gender */}
          <label htmlFor='gender'></label>
          <input 
            type='text' 
            id='gender' 
            name='gender' 
            placeholder='Enter your gender' 
            value={feedback.gender}
            onChange={handleInputChange} 
            required  
            className='feedback-input'
          /><br />

          {/* Age */}
          <label htmlFor='age'></label>
          <input 
            type='number' 
            id='age' 
            name='age' 
            min='0' 
            placeholder='Enter your age' 
            value={feedback.age}
            onChange={handleInputChange} 
            required  
            className='feedback-input'
          /><br />

          {/* Patient ID */}
          <label htmlFor='patientId'></label>
          <input 
            type='text' 
            id='patientId' 
            name='patientId' 
            placeholder='Enter your patient ID' 
            value={feedback.patientId.toString()} 
            onChange={handleInputChange} 
            required  
            className='feedback-input'
          /><br />

          {/* Reason for Visiting */}
          <p className="feedback-reason">The reason you went to the doctor:</p>
          <div className='feedback-left-align'>
            <label>
              <input 
                type='radio' 
                name='reason' 
                value='advice' 
                checked={feedback.reason === 'advice'}
                onChange={handleInputChange} 
                required 
                className='feedback-radio'
              /> To seek the doctor's advice
            </label><br />
            <label>
              <input 
                type='radio' 
                name='reason' 
                value='treatment'
                checked={feedback.reason === 'treatment'} 
                onChange={handleInputChange} 
                required 
                className='feedback-radio'
              /> To get treatment
            </label><br />
            <label>
              <input 
                type='radio' 
                name='reason' 
                value='checkup'
                checked={feedback.reason === 'checkup'}
                onChange={handleInputChange} 
                required 
                className='feedback-radio'
              /> For routine check-up
            </label><br />
            <label>
              <input 
                type='radio' 
                name='reason' 
                value='others' 
                checked={feedback.reason === 'others'}
                onChange={handleInputChange} 
                required 
                className='feedback-radio'
              /> Others
            </label><br />
          </div>

          {/* Trust Rating */}
          <div className='rating-container'>
            <h2>Rating Survey</h2>
            <p>1. How would you rate the level of trust that you feel?</p>
            <input 
              type='text' 
              name='trustRating' 
              placeholder='Enter trust rating' 
              value={feedback.trustRating}
              onChange={handleInputChange} 
              required  
              className='feedback-input'
            />
          </div>

          {/* Submit Button */}
          <br />
          <button type='submit' className="feedback-submit_button"><h2>Submit Feedback</h2></button>
        </form>
        {submitted && <p>Thank you for your feedback!</p>}
      </div>
    </main>
  );
};

export default Feedback;
