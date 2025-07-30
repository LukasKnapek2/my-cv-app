import React, { useState } from "react";
import InputField from "./InputField.jsx";
import styles from "../styles/GeneralInfo.module.css";
export default function GeneralInfo() {
  const [personData, setPersonData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(true);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.generalInfoContainer}>
      <h2>General Information</h2>
      {isEditing ? (
        <div>
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={personData.name}
            onChange={handleChange}
            />
          <InputField
            label="E-Mail"
            name="email"
            type="e-mail"
            value={personData.email}
            onChange={handleChange}
            />
          <InputField
            label="Phone"
            name="phone"
            type="phone"
            value={personData.phone}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {personData.name}
          </p>
          <p>
            <strong>Email:</strong> {personData.email}
          </p>
          <p>
            <strong>Phone:</strong> {personData.phone}
          </p>
        </div>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </div>
  );
}
