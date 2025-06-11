// Simulated user data
let currentUser = {
    id: 1,
    name: "Budi Santoso",
    email: "budi@example.com",
    bio: "Thrift Lover & Seller",
    avatar: null,
    stats: {
        products: 24,
        favorites: 86,
        rating: 4.8
    }
};

// Check if user is logged in
export function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

// Login function
export function login(email, password) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            if (email === "budi@example.com" && password === "password123") {
                const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjF9.ABC";
                localStorage.setItem('authToken', authToken);
                resolve({
                    success: true,
                    user: currentUser
                });
            } else {
                reject({
                    success: false,
                    message: "Email atau password salah"
                });
            }
        }, 1000);
    });
}

// Logout function
export function logout() {
    localStorage.removeItem('authToken');
    return Promise.resolve({ success: true });
}

// Get current user
export function getCurrentUser() {
    return isLoggedIn() ? currentUser : null;
}

// Update user profile
export function updateProfile(profileData) {
    return new Promise((resolve) => {
        // Simulate API call
        setTimeout(() => {
            currentUser = {
                ...currentUser,
                ...profileData
            };
            
            resolve({
                success: true,
                user: currentUser
            });
        }, 800);
    });
}

// Update user avatar
export function updateAvatar(avatarUrl) {
    return new Promise((resolve) => {
        // Simulate API call
        setTimeout(() => {
            currentUser.avatar = avatarUrl;
            
            resolve({
                success: true,
                avatar: avatarUrl
            });
        }, 800);
    });
}