import React from 'react'
import './CategoryBar.css';
const categories = [
    'Tất cả', 'Âm nhạc', 'Danh sách kết hợp', 'Trò chơi', 'Tin tức',
    'Nhạc Hip-hop', 'Trực tiếp', 'Đọc rap', 'Trò chơi hành động phiêu lưu',
    'Mới tải lên gần đây', 'Đã xem', 'Đề xuất mới'
  ];
  
export default function CategoryBar() {
  return (
    <div>
          <div className="category-bar">
      {categories.map((category, index) => (
        <button key={index} className="category-button">{category}</button>
      ))}
    </div>
    </div>
  )
}
