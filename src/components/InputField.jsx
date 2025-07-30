
import React from 'react';
import styles from '../styles/InputField.module.css'; 

function InputField({ label, value, onChange, type = 'text', name }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name} 
        value={value}
        onChange={onChange}
        className={styles.inputField}
      />
    </div>
  );
}

export default InputField;