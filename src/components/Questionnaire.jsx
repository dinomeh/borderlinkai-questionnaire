import React, { useState } from 'react';
import './Questionnaire.css';
import { ArrowRight, ArrowLeft, CheckCircle, Save } from 'lucide-react';

const sections = [
  {
    id: 1,
    title: 'Identify Time Leaks',
    subtitle: 'The "Low-Hanging Fruit" Check',
    questions: [
      {
        id: 's1q1',
        text: 'Administrative Heavy Lifting: How much of your team\'s day is spent on "busy work" (data entry, scheduling, filing, summarizing meetings)?',
        options: [
          { text: '<1 hour a day, we have streamlined the work using AI', points: 3 },
          { text: 'Between 1 - 4 hours a day', points: 2 },
          { text: '>4 hours a day', points: 1 }
        ]
      },
      {
        id: 's1q2',
        text: 'Inbox Overload: How many hours a day do key staff spend drafting repetitive emails (client inquiries, follow-ups, or internal updates)?',
        options: [
          { text: '<1 hour a day, much of this is done using templated or AI', points: 3 },
          { text: 'Between 1 - 4 hours a day', points: 2 },
          { text: '>4 four hours a day', points: 1 }
        ]
      },
      {
        id: 's1q3',
        text: 'The "Meeting Tax": How many hours per week does your leadership team spend in meetings?',
        options: [
          { text: '<3 hours a week', points: 3 },
          { text: 'Between 3 - 5 hours a week', points: 2 },
          { text: '>5 hours a week', points: 1 }
        ]
      },
      {
        id: 's1q4',
        text: 'Knowledge Retrieval: How long does it take a new employee to find a specific policy, past contract, or technical procedure in your internal files?',
        options: [
          { text: 'Very quickly, all data is well organised and easy to access', points: 3 },
          { text: 'After some navigation, the new employee would find their way', points: 2 },
          { text: 'They would need to ask another employee how to find the correct information', points: 1 }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Communication',
    subtitle: 'The "Growth Engine" Check',
    questions: [
      {
        id: 's2q1',
        text: 'Stakeholder engagement: How do you update customers/stakeholders on shipment status?',
        options: [
          { text: 'An AI agent monitors the carrier API and pushes real-time updates to the client dashboard', points: 3 },
          { text: 'We send manual status updates at key milestones (shipped, arrived).', points: 2 },
          { text: 'We wait for them to ask, then check a carrier website and email them back.', points: 1 }
        ]
      },
      {
        id: 's2q2',
        text: 'Supplier Engagement: How do you handle supplier inquiries (RFQs and Pro-Formas)?',
        options: [
          { text: 'AI drafts the RFQ or response based on current inventory needs and supplier history', points: 3 },
          { text: 'We use "Copy & Paste" templates but still have to fill in the variables', points: 2 },
          { text: 'Each email is drafted from scratch by a staff member', points: 1 }
        ]
      },
      {
        id: 's2q3',
        text: 'Customer Response Time: What is your average lead response time?',
        options: [
          { text: 'Instant, we have automated responses using an AI agent and only step in when needed', points: 3 },
          { text: 'We respond within 24 hours of a lead being generated', points: 2 },
          { text: 'We get around to it when we can, usually more than 24 hours later', points: 1 }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Operations & Data',
    subtitle: 'The "Scalability" Check',
    questions: [
      {
        id: 's3q1',
        text: 'Software Stack: Do your top 3 tools used daily (e.g., Excel, Salesforce, Slack) "talk" to each other automatically?',
        options: [
          { text: 'Yes, we have linked all our key tools to transfer data seamlessly', points: 3 },
          { text: 'Some tools have integrated with another, but mostly not automated', points: 2 },
          { text: 'Not at all – all data is manually moved from one application to another when needed', points: 1 }
        ]
      },
      {
        id: 's3q2',
        text: 'Contract/Document Review: Does an employee have to read every page of every incoming document to find key dates, prices, or clauses?',
        options: [
          { text: 'No, we have integrated an AI platform to summarise and deliver the key message', points: 3 },
          { text: 'Sometimes we use AI to summarise documents for a quicker process', points: 2 },
          { text: 'Yes, all documents are read by an employee to understand what is involved', points: 1 }
        ]
      },
      {
        id: 's3q3',
        text: 'Data Processing: How are your Commercial Invoices and Packing Lists processed?',
        options: [
          { text: 'Data is extracted via AI and synced to our systems with 95%+ accuracy', points: 3 },
          { text: 'We use basic OCR (Optical Character Recognition), but a human still has to fix 50% of the data', points: 2 },
          { text: 'A staff member types data from PDFs into our ERP/Spreadsheet', points: 1 }
        ]
      },
      {
        id: 's3q4',
        text: 'HS Classification: How do you manage HS Code (Harmonized System) classification?',
        options: [
          { text: 'Our system suggests HS codes based on product descriptions and historical data', points: 3 },
          { text: 'We use an online search tool for every individual item', points: 2 },
          { text: 'By memory, manually search a PDF or rely on the supplier\'s code', points: 1 }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Risk Culture',
    subtitle: 'The "Safety" Check',
    questions: [
      {
        id: 's4q1',
        text: 'Shadow AI: Are your employees currently using ChatGPT or Claude on their personal accounts for work?',
        options: [
          { text: 'No', points: 3 },
          { text: 'They shouldn’t be, we have a policy they can’t upload company data into personal AI accounts', points: 2 },
          { text: 'I don’t know, maybe, probably', points: 1 }
        ]
      },
      {
        id: 's4q2',
        text: 'Data Security: Do you have a formal policy on what company data can and cannot be entered into public AI models?',
        options: [
          { text: 'Yes', points: 3 },
          { text: 'Sort of', points: 2 },
          { text: 'No', points: 1 }
        ]
      },
      {
        id: 's4q3',
        text: 'Internal Auditing: How do you audit your shipments for "Discrepancy Risks"?',
        options: [
          { text: 'AI cross-references the Invoice vs. Packing List vs. Bill of Lading to flag errors before they hit the customs broker', points: 3 },
          { text: 'A human looks at the paperwork right before the customs filing', points: 2 },
          { text: 'We do randomised checks and hope the rest are correct', points: 1 }
        ]
      },
      {
        id: 's4q4',
        text: 'Data Storage: Where are your shipping documents stored for compliance?',
        options: [
          { text: 'AI-indexed cloud storage where we can ask, "Show me all invoices for Solar Panels from 2023"', points: 3 },
          { text: 'All in one place (Dropbox/Drive), but searching for specific data inside them is hard', points: 2 },
          { text: 'Folders on desktops, paper files, and buried in email threads', points: 1 }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Global & Geopolitical Risks',
    subtitle: 'The "Volatility" Check',
    questions: [
      {
        id: 's5q1',
        text: 'Tariff Volatility: How do you stay updated on Tariff changes or Trade Regulations?',
        options: [
          { text: 'We have a "Trade Pulse" AI that monitors regulatory changes and flags impacted SKUs', points: 3 },
          { text: 'We read trade journals and try to update our internal lists manually', points: 2 },
          { text: 'We wait until a broker tells us a shipment is flagged', points: 1 }
        ]
      },
      {
        id: 's5q2',
        text: 'Currency Exposure: What is the typical annual value paid/received in non-AUD currencies?',
        options: [
          { text: 'Less than $1 million', points: 3 },
          { text: 'Between $1 million and $10 million', points: 2 },
          { text: 'Greater than $10 million', points: 1 }
        ]
      },
      {
        id: 's5q3',
        text: 'Currency Risk Management: How do you manage currency market volatility?',
        options: [
          { text: 'Non-AUD currency risk is hedged via a specialist non-bank provider', points: 3 },
          { text: 'Non-AUD currency risk is hedged, however, it is done with our transactional bank', points: 2 },
          { text: 'The non-AUD currency risk is not managed; payments/receipts are dealt at the market/spot rate', points: 1 }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Corporate Image',
    subtitle: 'The "Brand" Check',
    questions: [
      {
        id: 's6q1',
        text: 'Content Bottlenecks: Which best describes your status for posting more on social media/newsletters?',
        options: [
          { text: 'We regularly have content creation automated using AI platforms', points: 3 },
          { text: 'We develop manual content to post/send ad-hoc or semi-regularly', points: 2 },
          { text: 'We don’t have time to engage with more content on social media/newsletters', points: 1 }
        ]
      },
      {
        id: 's6q2',
        text: 'Brand Consistency: If three different employees individually wrote a LinkedIn post for the company today, which would be most accurate?',
        options: [
          { text: 'All three would be very consistent and on point for our brand', points: 3 },
          { text: 'There would be some consistency', points: 2 },
          { text: 'Unfortunately, the post would likely not be very consistent between the three', points: 1 }
        ]
      }
    ]
  }
];

const totalSteps = sections.length + 1; // +1 for Contact Details

const Questionnaire = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    companyName: '',
    position: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleOptionSelect = (questionId, optionIndex, points) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: {
        optionIndex,
        points
      }
    }));
    setErrors(false);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactDetails(prev => ({ ...prev, [name]: value }));
    setErrors(false);
  };

  const validateCurrentStep = () => {
    if (currentStep <= sections.length) {
      const currentSection = sections[currentStep - 1];
      const allAnswered = currentSection.questions.every(q => answers[q.id]);
      if (!allAnswered) setErrors(true);
      return allAnswered;
    } else {
      const { firstName, companyName, position, email, phone } = contactDetails;
      const allFilled = firstName && companyName && position && email && phone;
      if (!allFilled) setErrors(true);
      return allFilled;
    }
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateTotalScore = () => {
    return Object.values(answers).reduce((sum, answer) => sum + answer.points, 0);
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    
    setIsSubmitting(true);

    const totalScore = calculateTotalScore();
    const maxScore = sections.reduce((acc, section) => acc + (section.questions.length * 3), 0);
    
    // Map answers logically for email reading
    let formattedAnswers = '';
    sections.forEach((sec, sIndex) => {
      formattedAnswers += '\n--- ' + sec.title + ' ---\n';
      sec.questions.forEach((q, qIndex) => {
        const answerData = answers[q.id];
        if (answerData) {
          const selectedText = q.options[answerData.optionIndex].text;
          formattedAnswers += 'Q' + (qIndex + 1) + ': ' + q.text + '\n';
          formattedAnswers += 'A: ' + selectedText + ' (' + answerData.points + ' pts)\n\n';
        }
      });
    });

    const payload = {
      name: contactDetails.firstName,
      email: contactDetails.email, // Sends confirmation reply headers properly
      _subject: 'New Lead: ' + contactDetails.companyName + ' | Score: ' + totalScore + '/' + maxScore,
      Total_Score: totalScore + ' / ' + maxScore,
      Contact_Info: 'Name: ' + contactDetails.firstName + '\nCompany: ' + contactDetails.companyName + '\nPosition: ' + contactDetails.position + '\nPhone: ' + contactDetails.phone + '\nEmail: ' + contactDetails.email,
      Responses: formattedAnswers
    };

    try {
      // Send data to FormSubmit.co
      const response = await fetch('https://formsubmit.co/ajax/admin@borderlinkai.com.au', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('An error occurred submitting the questionnaire. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="questionnaire-container success-container">
        <div className="success-card glass-panel flex-center" style={{ flexDirection: 'column', padding: '4rem 2rem', textAlign: 'center' }}>
          <CheckCircle size={64} className="text-gradient" style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }} />
          <h2 className="heading-2">Thank You!</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '400px' }}>
            Your details have been successfully submitted. We are analyzing your responses and will be in touch with your personalized process automation report shortly.
          </p>
        </div>
      </div>
    );
  }

  const isContactStep = currentStep === totalSteps;
  const currentSection = !isContactStep ? sections[currentStep - 1] : null;

  return (
    <div className="questionnaire-container">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-header">
          <span className="step-indicator">Step {currentStep} of {totalSteps}</span>
          <span className="completion-perc">{Math.round(((currentStep - 1) / totalSteps) * 100)}%</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentStep - 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="glass-panel questionnaire-card">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="heading-2 text-gradient">
            {isContactStep ? 'Contact Details' : currentSection.title}
          </h2>
          {currentSection && <p className="section-subtitle">{currentSection.subtitle}</p>}
        </div>

        {/* Questions Body */}
        <div className="section-body">
          {!isContactStep ? (
            <div className="questions-wrapper">
              {currentSection.questions.map((q, qIndex) => (
                <div key={q.id} className="question-item">
                  <h3 className="question-text">
                    <span className="question-number">{qIndex + 1}.</span> {q.text} <span className="required-asterisk">*</span>
                  </h3>
                  <div className="options-container">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = answers[q.id]?.optionIndex === optIndex;
                      return (
                        <div 
                          key={optIndex} 
                          className={`option-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleOptionSelect(q.id, optIndex, opt.points)}
                        >
                          <div className="radio-circle">
                            {isSelected && <div className="radio-inner" />}
                          </div>
                          <span className="option-text">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="contact-form-wrapper">
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Please provide your contact details to receive your customized report. All fields are required. <span className="required-asterisk">*</span>
              </p>
              
              <div className="form-grid">
                <div className="input-group">
                  <label>First name <span className="required-asterisk">*</span></label>
                  <input type="text" name="firstName" value={contactDetails.firstName} onChange={handleContactChange} placeholder="e.g. Jane" />
                </div>
                <div className="input-group">
                  <label>Company name <span className="required-asterisk">*</span></label>
                  <input type="text" name="companyName" value={contactDetails.companyName} onChange={handleContactChange} placeholder="e.g. Acme Corp" />
                </div>
                <div className="input-group">
                  <label>Position <span className="required-asterisk">*</span></label>
                  <input type="text" name="position" value={contactDetails.position} onChange={handleContactChange} placeholder="e.g. Operations Manager" />
                </div>
                <div className="input-group">
                  <label>Email <span className="required-asterisk">*</span></label>
                  <input type="email" name="email" value={contactDetails.email} onChange={handleContactChange} placeholder="jane@example.com" />
                </div>
                <div className="input-group full-width">
                  <label>Phone <span className="required-asterisk">*</span></label>
                  <input type="tel" name="phone" value={contactDetails.phone} onChange={handleContactChange} placeholder="+61 400 000 000" />
                </div>
              </div>
            </div>
          )}

          {errors && (
            <div className="error-message">
              Please answer all questions before proceeding.
            </div>
          )}
        </div>

        {/* Navigation Footer */}
        <div className="navigation-footer">
          <button 
            className="btn btn-secondary" 
            onClick={handleBack} 
            disabled={currentStep === 1 || isSubmitting}
            style={{ visibility: currentStep === 1 ? 'hidden' : 'visible' }}
          >
            <ArrowLeft size={18} />
            Back
          </button>
          
          {!isContactStep ? (
            <button className="btn btn-primary" onClick={handleNext}>
              Next Step
              <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn btn-primary pulse-btn" onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Assessment'}
              <Save size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
