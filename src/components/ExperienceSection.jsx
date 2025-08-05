import React from 'react';
import InputField from './InputField';
import styles from '../styles/ExperienceSection.module.css';

function ExperienceSection({ data, isEditing, onFieldChange, onAddEntry, onRemoveEntry }) {
  const handleExperienceInputChange = (e, entryId) => {
    const { name, value } = e.target;
    onFieldChange('experience', name, value, entryId);
  };

  return (
    <div className={styles.experienceSectionContainer}>
      {isEditing ? (
        <div>
          {data.length === 0 && <p className={styles.noEntriesMessage}>No experience entries yet. Click "Add Experience" to add one.</p>}
          {data.map((entry) => (
            <div key={entry.id} className={styles.experienceEntryEdit}>
              <InputField
                label="Company Name"
                name="company"
                value={entry.company}
                onChange={(e) => handleExperienceInputChange(e, entry.id)}
              />
              <InputField
                label="Position Title"
                name="position"
                value={entry.position}
                onChange={(e) => handleExperienceInputChange(e, entry.id)}
              />
              <InputField
                label="Main Responsibilities"
                name="responsibilities"
                value={entry.responsibilities}
                onChange={(e) => handleExperienceInputChange(e, entry.id)}
              />
              <InputField
                label="Start Date"
                name="startDate"
                type="date"
                value={entry.startDate}
                onChange={(e) => handleExperienceInputChange(e, entry.id)}
              />
              <InputField
                label="End Date"
                name="endDate"
                type="date"
                value={entry.endDate}
                onChange={(e) => handleExperienceInputChange(e, entry.id)}
              />
              <button
                onClick={() => onRemoveEntry(entry.id)}
                className={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          ))}
          <button onClick={onAddEntry} className={styles.addButton}>
            Add Experience
          </button>
        </div>
      ) : (
        <div>
          {data.length === 0 ? (
            <p className={styles.noEntriesMessage}>No practical experience added.</p>
          ) : (
            data.map((entry) => (
              <div key={entry.id} className={styles.experienceEntryView}>
                <h3>{entry.position} at {entry.company}</h3>
                <p className={styles.dates}>{entry.startDate} - {entry.endDate || 'Present'}</p>
                <p><strong>Responsibilities:</strong></p>
                <p>{entry.responsibilities}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ExperienceSection;