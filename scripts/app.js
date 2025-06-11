// DOM Elements
const pages = {
    home: document.getElementById('home-page'),
    search: document.getElementById('search-page'),
    sell: document.getElementById('sell-page'),
    favorite: document.getElementById('favorite-page'),
    profile: document.getElementById('profile-page'),
    product: document.getElementById('product-page'),
    chat: document.getElementById('chat-page'),
    tracking: document.getElementById('tracking-page'),
    editProfile: document.getElementById('edit-profile-page'),
    live: document.getElementById('live-page'),
    livePlayer: document.getElementById('live-player')
};

const navItems = document.querySelectorAll('.nav-item');
const backButtons = document.querySelectorAll('.back-btn');
const productCards = document.querySelectorAll('.product-card');
const favoriteButtons = document.querySelectorAll('.favorite-button');
const profileBtn = document.getElementById('profile-btn');
const chatSellerBtn = document.getElementById('chat-seller-btn');
const trackOrderBtn = document.getElementById('track-order-btn');
const logoutButton = document.querySelector('.logout-button');
const editProfileBtn = document.getElementById('edit-profile-btn');
const liveItems = document.querySelectorAll('.live-item');
const startLiveBtn = document.getElementById('start-live-btn');
const closePlayerBtn = document.getElementById('close-player-btn');

// Initialize app
function initApp() {
    // Set home as active page
    switchPage('home');
    
    // Navigation event listeners
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = item.getAttribute('data-page');
            switchPage(pageId);
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    // Back button functionality
    backButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            history.back();
        });
    });
    
    // Product detail
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-button')) {
                const productId = card.dataset.id;
                showProductDetail(productId);
if (detailImage) {
  detailImage.style.backgroundImage = `url('../images/products/${productData.image}')`;
}
        });
    });
    
    // Toggle favorite
    favoriteButtons.forEach(button => {
        button.addEventListener('click', toggleFavorite);
    });
    
    // Open profile
    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('profile');
        });
    }
    
    // Open chat from product
    if (chatSellerBtn) {
        chatSellerBtn.addEventListener('click', () => {
            switchPage('chat');
        });
    }
    
    // Track order
    if (trackOrderBtn) {
        trackOrderBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('tracking');
        });
    }
    
    // Logout
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
    
    // Edit profile
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', () => {
            switchPage('editProfile');
        });
    }
    
    // Live streaming
    if (liveItems) {
        liveItems.forEach(item => {
            item.addEventListener('click', () => {
                switchPage('livePlayer');
            });
        });
    }
    
    // Start live stream
    if (startLiveBtn) {
        startLiveBtn.addEventListener('click', startLiveStream);
    }
    
    // Close player
    if (closePlayerBtn) {
        closePlayerBtn.addEventListener('click', () => {
            switchPage('sell');
        });
    }
    
    // Avatar upload
    const avatarUpload = document.getElementById('avatar-upload');
    if (avatarUpload) {
        avatarUpload.addEventListener('change', handleAvatarUpload);
    }
    
    // Initialize chat
    initChat();
}

// Switch between pages
function switchPage(pageId) {
    // Hide all pages
    Object.values(pages).forEach(page => {
        if (page) page.classList.remove('active');
    });
    
    // Show requested page
    if (pages[pageId]) {
        pages[pageId].classList.add('active');
        
        // Add to history
        window.history.pushState({ page: pageId }, '', `#${pageId}`);
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Handle back/forward navigation
window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
        switchPage(e.state.page);
    } else {
        switchPage('home');
    }
});

// Toggle favorite product
function toggleFavorite() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        this.classList.add('active');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        this.classList.remove('active');
    }
}

// Show product detail
function showProductDetail(productId) {
    // In a real app, you would fetch product data from an API
    const productData = {
        id: productId,
        title: "Jaket Denim Vintage Cowboy Style",
        price: 175000,
        originalPrice: 250000,
        discount: 30,
        description: "Jaket denim vintage dengan model cowboy style. Bahan denim tebal dan berkualitas. Kondisi masih sangat bagus, hanya dipakai beberapa kali. Cocok untuk gaya kasual maupun semi formal.",
        condition: "Bekas (Bagus)",
        weight: "0.8 kg",
        category: "Pakaian",
        seller: {
            name: "Budi Santoso",
            rating: 4.8
        }
    };
    
    // Update product detail page
    const detailImage = document.getElementById('product-detail-image');
    const detailTitle = document.getElementById('product-detail-title');
    const detailPrice = document.getElementById('product-detail-price');
    const detailDesc = document.getElementById('product-detail-description');
    const condition = document.getElementById('product-condition');
    const weight = document.getElementById('product-weight');
    const category = document.getElementById('product-category');
    const sellerName = document.getElementById('seller-name');
    const sellerRating = document.getElementById('seller-rating');
    
    if (detailImage) detailImage.style.backgroundImage = "url('https://via.placeholder.com/600x400')";
    if (detailTitle) detailTitle.textContent = productData.title;
    if (detailPrice) {
        if (productData.originalPrice) {
            detailPrice.innerHTML = `<span class="product-original-price">Rp ${productData.originalPrice.toLocaleString('id-ID')}</span> Rp ${productData.price.toLocaleString('id-ID')}`;
        } else {
            detailPrice.textContent = `Rp ${productData.price.toLocaleString('id-ID')}`;
        }
    }
    if (detailDesc) detailDesc.textContent = productData.description;
    if (condition) condition.textContent = productData.condition;
    if (weight) weight.textContent = productData.weight;
    if (category) category.textContent = productData.category;
    if (sellerName) sellerName.textContent = productData.seller.name;
    if (sellerRating) sellerRating.textContent = productData.seller.rating;
    
    // Switch to product page
    switchPage('product');
}

// Logout function
function logout() {
    // In a real app, you would clear authentication tokens
    localStorage.removeItem('authToken');
    alert('Anda telah logout');
    switchPage('home');
}

// Handle avatar upload
function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const avatarPreview = document.getElementById('avatar-preview');
            if (avatarPreview) {
                avatarPreview.style.backgroundImage = `url(${event.target.result})`;
            }
        };
        reader.readAsDataURL(file);
    }
}

// Start live stream
function startLiveStream() {
    // In a real app, this would initialize the camera and streaming
    switchPage('livePlayer');
}

// Initialize chat
function initChat() {
    const chatSend = document.getElementById('chat-send');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (chatSend && chatInput && chatMessages) {
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Send chat message
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    const message = chatInput.value.trim();
    if (message) {
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `
            ${message}
            <span class="message-time">${time}</span>
        `;
        
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Simulate reply after a delay
        setTimeout(simulateReply, 1000 + Math.random() * 2000);
    }
}

// Simulate a reply from the seller
function simulateReply() {
    const chatMessages = document.getElementById('chat-messages');
    const replies = [
        "Produk ini masih tersedia",
        "Bisa nego harga sedikit",
        "Pesan saya balas secepatnya",
        "Apakah ada pertanyaan lain?",
        "Produk ready stock"
    ];
    
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const messageElement = document.createElement('div');
    messageElement.className = 'message received';
    messageElement.innerHTML = `
        ${reply}
        <span class="message-time">${time}</span>
    `;
    
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
