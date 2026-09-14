const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Cho phép cross-origin requests
app.use(express.json()); // Đọc dữ liệu JSON gửi lên từ Frontend

// Dữ liệu mẫu (Giả lập Database)
let items = [
  { id: 1, name: 'Sản phẩm A', price: 100 },
  { id: 2, name: 'Sản phẩm B', price: 200 }
];

// API Routes
// 1. Lấy danh sách
app.get('/api/items', (req, res) => {
  res.json(items);
});

// 2. Thêm mới
app.post('/api/items', (req, res) => {
  const newItem = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Route xử lý nhận đơn hàng từ Landing Page
app.post('/api/orders', (req, res) => {
  const { fullName, phone, address, product, quantity, note } = req.body;

  if (!fullName || !phone || !address) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin bắt buộc!' });
  }

  const newOrder = {
    id: Date.now(),
    fullName,
    phone,
    address,
    product,
    quantity,
    note,
    createdAt: new Date()
  };

  console.log('Đơn hàng mới nhận được:', newOrder);

  // Tại đây bạn có thể lưu newOrder vào CSDL (MongoDB/PostgreSQL) 
  // hoặc gửi thông báo qua Telegram Bot / Email.

  return res.status(201).json({
    message: 'Đặt hàng thành công!',
    order: newOrder
  });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server Backend đang chạy tại http://localhost:${PORT}`);
});