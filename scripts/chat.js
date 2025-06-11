// Simulated chat data
const conversations = [
    {
        id: 1,
        userId: 2,
        userName: "John Doe",
        userAvatar: null,
        messages: [
            {
                id: 1,
                sender: "user",
                text: "Halo, saya tertarik dengan produk jaket denim Anda. Apakah masih tersedia?",
                time: "10:15"
            },
            {
                id: 2,
                sender: "current",
                text: "Iya, masih tersedia. Ukuran L cocok untuk tinggi 170-175cm.",
                time: "10:18"
            },
            {
                id: 3,
                sender: "user",
                text: "Bagus. Bisa nego harga? Rp 150.000 bagaimana?",
                time: "10:20"
            },
            {
                id: 4,
                sender: "current",
                text: "Maaf, harga sudah final. Tapi saya bisa kasih gratis ongkir.",
                time: "10:22"
            }
        ]
    }
];

// Get conversation by ID
export function getConversation(conversationId) {
    return conversations.find(conv => conv.id === conversationId);
}

// Send a message
export function sendMessage(conversationId, message) {
    return new Promise((resolve) => {
        const conversation = getConversation(conversationId);
        if (!conversation) return resolve(null);
        
        // Add new message
        const newMessage = {
            id: conversation.messages.length + 1,
            sender: "current",
            text: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        
        conversation.messages.push(newMessage);
        
        // Simulate reply after a delay
        setTimeout(() => {
            const replies = [
                "Produk ini masih tersedia",
                "Bisa nego harga sedikit",
                "Pesan saya balas secepatnya",
                "Apakah ada pertanyaan lain?",
                "Produk ready stock"
            ];
            
            const reply = replies[Math.floor(Math.random() * replies.length)];
            
            const replyMessage = {
                id: conversation.messages.length + 1,
                sender: "user",
                text: reply,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            
            conversation.messages.push(replyMessage);
        }, 1000 + Math.random() * 2000);
        
        resolve(newMessage);
    });
}