// key.js - Quản lý và xoay vòng API Key OpenRouter

const KeyManager = {
    // Danh sách Key do bạn cung cấp
    keys: [
        "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", // Key 1
        "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", // Key 2
        "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"  // Key 3
    ],

    currentIndex: 0,

    // Hàm lấy key hiện tại
    getCurrentKey: function() {
        if (this.keys.length === 0) return "";
        return this.keys[this.currentIndex];
    },

    // Hàm chuyển sang key tiếp theo (Xoay vòng)
    rotateKey: function() {
        if (this.keys.length <= 1) {
            console.warn("Chỉ có 1 key, không thể xoay vòng.");
            return false; // Không còn key khác để đổi
        }
        
        // Tăng index, nếu hết danh sách thì quay về 0
        this.currentIndex = (this.currentIndex + 1) % this.keys.length;
        console.log(`🔄 Đã chuyển sang Key số ${this.currentIndex + 1}`);
        return true; // Đã đổi key thành công
    },

    // Hàm lấy tổng số key để biết giới hạn vòng lặp retry
    getTotalKeys: function() {
        return this.keys.length;
    }
};

// Xuất ra để sử dụng nếu môi trường hỗ trợ module (Optional)
if (typeof module !== 'undefined') {
    module.exports = KeyManager;
}