// App.js

import React from 'react';
import Contact from './Contact.jsx'; // Importer le composant Contact depuis Contact.jsx
import './Contact.css'; // Importer les styles CSS pour Contact

function App() {
  return (
    <div className="App">
      <h1>Mon application de messagerie</h1>
      <Contact />
    </div>
  );
}

export default App;
