// Simulated order data
const orders = [
    {
        id: "STY-20230715-001",
        date: "15 Juli 2023",
        status: "dikirim",
        items: [
            {
                id: 1,
                name: "Jaket Denim Vintage Cowboy Style",
                price: 175000,
                quantity: 1,
                image: "https://via.placeholder.com/100x100?text=Jaket+Denim"
            }
        ],
        total: 175000,
        shipping: {
            method: "JNE Reguler",
            cost: 15000,
            trackingNumber: "1234567890123",
            estimatedDelivery: "18 Juli 2023"
        },
        payment: {
            method: "Gopay",
            status: "berhasil"
        },
        address: {
            name: "Budi Santoso",
            phone: "081234567890",
            address: "Jl. Merdeka No. 123, Jakarta Pusat 10110"
        },
        tracking: [
            { status: "dipesan", date: "15 Juli 2023 10:15", active: true },
            { status: "diproses", date: "15 Juli 2023 12:30", active: true },
            { status: "dikirim", date: "16 Juli 2023 09:45", active: true },
            { status: "diterima", date: null, active: false }
        ]
    }
];

// Get order by ID
export function getOrder(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const order = orders.find(o => o.id === orderId);
            resolve(order ? {...order} : null);
        }, 500);
    });
}

// Get all orders for current user
export function getUserOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([...orders]);
        }, 800);
    });
}