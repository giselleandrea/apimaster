import axios from 'axios';

/*  EJERCICIO 1 
Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
más populares del usuario "google".
 */

const GIT_API_URL = 'https://api.github.com';
const USER = 'google';

async function getRepos() {
    try {
        const response = await axios.get(`${GIT_API_URL}/users/${USER}/repos`, {
            params: {
                sort: 'stars', // Los mas populares
                per_page: 10   // muestra los primeros 10
            }
        });

        const repositories = response.data;
        repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
        return repositories.slice(0, 10);
    } catch (error) {
        console.error(`Error al mostrar repositorios: ${error.message}`);
        return [];
    }
};

export default {
    getRepos
};