const fetch = require('node-fetch');
const fs = require('fs');

// URL de l'API Pandascore
const apiUrl = 'https://api.pandascore.co/tournaments/15027/standings';
const apiToken = 'MwU9umGcUGmoNQLEzgIgU7w2rhYscfoNLCSY9UHidenvcXAwXUI';  // Remplace par ton token d'API

// Fonction pour récupérer les données de l'API
async function fetchData() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });
    const data = await response.json();
    
    // Sauvegarder les données dans un fichier JSON
    fs.writeFileSync('./ranking.json', JSON.stringify(data, null, 2));
    console.log('Données mises à jour avec succès');
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
}

// Appeler la fonction pour récupérer et sauvegarder les données
fetchData();
