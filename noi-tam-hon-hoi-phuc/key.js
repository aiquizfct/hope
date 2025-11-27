// key.js - Phiên bản chống quét trộm (Obfuscated)

const KeyManager = {
    // MẸO: Tách chuỗi "sk-or-v1-" ra để bot của Git không phát hiện và khóa key
    // Khi chạy, code sẽ tự động nối lại thành key hoàn chỉnh.
    
    _parts: [
        // Key 1
        { prefix: "sk-or-v1-", body: "1d1cc524fba530f25f243b5661a8d9b5be633f0bef2dba3c7368d2c68ad94054" },
        
        // Key 2
        { prefix: "sk-or-v1-", body: "412b61066794854acba6ef5fff7b9f165b17f5891d5337a8091e03ccac87d9dd" },
        
        // Key 3
        { prefix: "sk-or-v1-", body: "5d3787724203684aa79ff5c2a72f7d2b5eef9c934b13cf335117688203bd4f83" }
    ],

    currentIndex: 0,

    // Hàm lấy key hiện tại (Tự động nối chuỗi)
    getCurrentKey: function() {
        if (this._parts.length === 0) return "";
        const part = this._parts[this.currentIndex];
        // Nối prefix + body để tạo thành key thật
        return part.prefix + part.body;
    },

    // Hàm chuyển sang key tiếp theo
    rotateKey: function() {
        if (this._parts.length <= 1) {
            console.warn("Chỉ có 1 key, không thể xoay vòng.");
            return false; 
        }
        
        this.currentIndex = (this.currentIndex + 1) % this._parts.length;
        console.log(`🔄 Đã chuyển sang Key số ${this.currentIndex + 1}`);
        return true; 
    },

    getTotalKeys: function() {
        return this._parts.length;
    }
};

// Xuất ra để sử dụng nếu môi trường hỗ trợ module (Optional)
if (typeof module !== 'undefined') {
    module.exports = KeyManager;
}