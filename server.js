const express = require('express');
const app = express();

// Récupérer une liste d'utilisateurs
app.get('/api/users', (req, res) => {
  // Code pour récupérer les utilisateurs depuis la base de données (par exemple, avec une requête SQL)

  const users = [
    { id: 1, name: 'Utilisateur 1' },
    { id: 2, name: 'Utilisateur 2' },
    { id: 3, name: 'Utilisateur 3' }
  ];

  res.json(users);
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
