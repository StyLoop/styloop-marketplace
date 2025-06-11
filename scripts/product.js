// Simulated product data
const products = [
    {
        id: 1,
        title: "Jaket Denim Vintage Cowboy Style",
        price: 175000,
        originalPrice: 250000,
        discount: 30,
        rating: 4.0,
        reviews: 24,
        description: "Jaket denim vintage dengan model cowboy style. Bahan denim tebal dan berkualitas. Kondisi masih sangat bagus, hanya dipakai beberapa kali. Cocok untuk gaya kasual maupun semi formal.",
        condition: "Bekas (Bagus)",
        weight: "0.8 kg",
        category: "Pakaian",
        seller: {
            id: 2,
            name: "Budi Santoso",
            rating: 4.8
        },
        images: [
            "https://via.placeholder.com/600x400?text=Jaket+Denim"
        ],
        isFavorite: false
    },
    {
        id: 2,
        title: "Sepatu Sneakers Branded Original",
        price: 350000,
        originalPrice: null,
        discount: 0,
        rating: 4.5,
        reviews: 42,
        description: "Sepatu sneakers branded original, kondisi 90% baru. Sol masih bagus dan tidak aus. Cocok untuk sehari-hari.",
        condition: "Bekas (Sangat Bagus)",
        weight: "0.9 kg",
        category: "Sepatu",
        seller: {
            id: 3,
            name: "Siti Rahayu",
            rating: 4.9
        },
        images: [
            "https://via.placeholder.com/600x400?text=Sneakers+Branded"
        ],
        isFavorite: true
    },
    {
        id: 3,
        title: "Tas Ransel Unisex Minimalis",
        price: 100000,
        originalPrice: 200000,
        discount: 50,
        rating: 5.0,
        reviews: 68,
        description: "Tas ransel unisex dengan desain minimalis. Bahan kanvas tebal, kondisi masih sangat bagus.",
        condition: "Bekas (Sangat Bagus)",
        weight: "0.7 kg",
        category: "Tas",
        seller: {
            id: 4,
            name: "Andi Wijaya",
            rating: 4.7
        },
        images: [
            "https://via.placeholder.com/600x400?text=Tas+Ransel"
        ],
        isFavorite: false
    }
];

// Get all products
export function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...products]);
        }, 800);
    });
}

// Get product by ID
export function getProductById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p.id === parseInt(id));
            resolve(product ? {...product} : null);
        }, 500);
    });
}

// Toggle favorite status
export function toggleFavorite(productId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(p => p.id === productId);
            if (product) {
                product.isFavorite = !product.isFavorite;
                resolve({
                    success: true,
                    isFavorite: product.isFavorite
                });
            } else {
                resolve({
                    success: false,
                    message: "Produk tidak ditemukan"
                });
            }
        }, 300);
    });
}