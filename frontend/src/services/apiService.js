
const API_URL = 'http://127.0.0.1:8000';

// Log in!
export function login(username, password) {
    return fetch("http://127.0.0.1:8000/login_view/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),

    })
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('401: Invalid login credentials');
                } else {
                    throw new Error('Login failed with status: ' + response.status);
                }
            }
            return response.json();
        });
}

export function logout() {
    return fetch("http://127.0.0.1:8000/logout_view/", {
        method: 'POST',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('403: Logout failed');
            }
            return response.ok;
        })
        .catch(error => {
            console.error('Logout error:', error);
        });
}