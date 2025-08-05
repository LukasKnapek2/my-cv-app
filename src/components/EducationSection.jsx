import React from 'react';
import InputField from './InputField';
import styles from '../styles/EducationSection.module.css';

function EducationSection({ data, isEditing, onFieldChange, onAddEntry, onRemoveEntry }) {
  const handleEducationInputChange = (e, entryId) => {
    const { name, value } = e.target;
    onFieldChange('education', name, value, entryId);
  };

  return (
    <div className={styles.educationSectionContainer}>
      {isEditing ? (
        <div>
          {data.length === 0 && <p className={styles.noEntriesMessage}>No education entries yet. Click "Add Education" to add one.</p>}
          {data.map((entry) => (
            <div key={entry.id} className={styles.educationEntryEdit}>
              <InputField
                label="School Name"
                name="school"
                value={entry.school}
                onChange={(e) => handleEducationInputChange(e, entry.id)}
              />
              <InputField
                label="Title of Study"
                name="title"
                value={entry.title}
                onChange={(e) => handleEducationInputChange(e, entry.id)}
              />
              <InputField
                label="Date of Study"
                name="date"
                type="date"
                value={entry.date}
                onChange={(e) => handleEducationInputChange(e, entry.id)}
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
            Add Education
          </button>
        </div>
      ) : (
        <div>
          {data.length === 0 ? (
            <p className={styles.noEntriesMessage}>No education added.</p>
          ) : (
            data.map((entry) => (
              <div key={entry.id} className={styles.educationEntryView}>
                <h3>{entry.school}</h3>
                <p><strong>Title:</strong> {entry.title}</p>
                <p><strong>Date:</strong> {entry.date}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default EducationSection;