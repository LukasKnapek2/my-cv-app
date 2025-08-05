import React, { useState } from 'react';
import CVSection from './components/CVSection';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import './styles/App.css';

function App() {
  const [cvData, setCvData] = useState({
    general: { name: '', email: '', phone: '' },
    education: [],
    experience: [],
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleCvDataChange = (section, field, value, id = null) => {
    setCvData(prevCvData => {
      if (section === 'general') {
        return {
          ...prevCvData,
          general: {
            ...prevCvData.general,
            [field]: value
          }
        };
      } else if (section === 'education') {
        return {
          ...prevCvData,
          education: prevCvData.education.map(item =>
            item.id === id ? { ...item, [field]: value } : item
          )
        };
      } else if (section === 'experience') {
        return {
          ...prevCvData,
          experience: prevCvData.experience.map(item =>
            item.id === id ? { ...item, [field]: value } : item
          )
        };
      }
      return prevCvData;
    });
  };

  const addEducationEntry = () => {
    setCvData(prevCvData => ({
      ...prevCvData,
      education: [...prevCvData.education, { id: Date.now(), school: '', title: '', date: '' }]
    }));
  };

  const removeEducationEntry = (id) => {
    setCvData(prevCvData => ({
      ...prevCvData,
      education: prevCvData.education.filter(item => item.id !== id)
    }));
  };

  const addExperienceEntry = () => {
    setCvData(prevCvData => ({
      ...prevCvData,
      experience: [...prevCvData.experience, { id: Date.now(), company: '', position: '', responsibilities: '', startDate: '', endDate: '' }]
    }));
  };

  const removeExperienceEntry = (id) => {
    setCvData(prevCvData => ({
      ...prevCvData,
      experience: prevCvData.experience.filter(item => item.id !== id)
    }));
  };

  const handleOverallSubmit = () => {
    setIsEditing(false);
  };

  const handleOverallEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="app-container">
    <div className="cv-app-container">
      <div className="header">
        <h1>My Comprehensive CV</h1>
        <div className="overall-buttons">
          {isEditing ? (
            <button onClick={handleOverallSubmit} className="submit-button">Submit CV</button>
          ) : (
            <button onClick={handleOverallEdit} className="edit-button">Edit CV</button>
          )}
        </div>
      </div>

      <CVSection title="General Information">
        <GeneralInfo
          data={cvData.general}
          isEditing={isEditing}
          onFieldChange={(field, value) => handleCvDataChange('general', field, value)}
        />
      </CVSection>

      <CVSection title="Educational Experience">
        <EducationSection
          data={cvData.education}
          isEditing={isEditing}
          onFieldChange={handleCvDataChange}
          onAddEntry={addEducationEntry}
          onRemoveEntry={removeEducationEntry}
        />
      </CVSection>

      <CVSection title="Practical Experience">
        <ExperienceSection
          data={cvData.experience}
          isEditing={isEditing}
          onFieldChange={handleCvDataChange}
          onAddEntry={addExperienceEntry}
          onRemoveEntry={removeExperienceEntry}
        />
      </CVSection>
    </div>
    </div>
  );
}

export default App;