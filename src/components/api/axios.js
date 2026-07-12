import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Attache le token JWT à chaque requête
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Si le token est expiré (401), essaie de le rafraîchir
apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh_token');

            if (refreshToken) {
                try {
                    const { data } = await axios.post(`${API_URL}/refresh`, {
                        refresh: refreshToken,
                    });
                    localStorage.setItem('access_token', data.access);
                    originalRequest.headers['Authorization'] = `Bearer ${data.access}`;
                    return apiClient(originalRequest);
                } catch {
                    // Refresh échoué → déconnexion
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login';
                }
            } else {
                localStorage.removeItem('access_token');
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;
