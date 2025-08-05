import React from 'react';
import InputField from './InputField';
import styles from '../styles/GeneralInfo.module.css';

function GeneralInfo({ data, isEditing, onFieldChange }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onFieldChange(name, value);
  };

  return (
    <div className={styles.generalInfoContainer}>
      {isEditing ? (
        <div className={styles.formContainer}>
          <InputField
            label="Full Name"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={data.email}
            onChange={handleInputChange}
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <div className={styles.infoDisplay}>
          <p><strong>Name:</strong> {data.name}</p>
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;