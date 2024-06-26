// Contact.jsx

import React from 'react';
import './Contact.css'; // Importer les styles CSS pour Contact

function Contact() {
  // Exemple de données statiques pour le contact
  const contactData = {
    name: 'Arya Stark',
    profileImage: '',
    isConnected: true,
  };

  const statusColorClass = contactData.isConnected ? 'status-green' : 'status-red';

  return (
    <div className="contact">
      <img src={contactData.profileImage} alt="Profile" />
      <div className="info">
        <h3>{contactData.name}</h3>
        <div className={`status ${statusColorClass}`}></div>
        <p>{contactData.isConnected ? 'Connecté' : 'Déconnecté'}</p>
      </div>
    </div>
  );
}

export default Contact;
