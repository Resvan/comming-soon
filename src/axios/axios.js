import axios from "axios";

const instance = axios.create({
    baseURL: 'https://gnana-prakasam.onrender.com',
    // baseURL: 'http://localhost:3000',
    timeout: 10000, // Timeout in milliseconds
    headers: {
        'Content-Type': 'application/json', // Default content type
        'Authorization': 'Bearer your_access_token', // Example Authorization header
    },
    // You can add more custom configurations as needed
});

export default instance;
