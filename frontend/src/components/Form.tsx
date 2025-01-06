import React, { useState } from 'react';

const Form = () => {
  // États pour chaque champ
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('');
  const [code, setCode] = useState('');

  // Fonction pour gérer l'envoi du formulaire
  const handleAdd = (e) => {
    e.preventDefault();
    // Ajouter la logique que tu veux avec les données, par exemple les afficher dans la console
    console.log({ name, emoji, code });
    
    // Réinitialiser les champs après ajout
    setName('');
    setEmoji('');
    setCode('');
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Emoji: </label>
          <input
            type="text"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Code: </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
