// 引入我們寫好的 SCSS
import './scss/styles.scss'

// 引入 Bootstrap 的 JS (包含 Modal, Carousel 等功能)
import * as bootstrap from 'bootstrap'

// 引入 AOS JS 與 CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

// 初始化 AOS
AOS.init({
  duration: 1000, // 動畫持續時間 (毫秒)
  once: false,     
  offset: 100,    // 觸發動畫的偏移量
});

console.log('2026 Future Tech Forum Loaded');

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // 抓取按鈕
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // 改變按鈕文字與顏色
    submitBtn.textContent = '已收到您的回覆';
    submitBtn.classList.remove('btn-primary'); // 移除原本藍色
    submitBtn.classList.add('btn-success');    // 變成綠色
    submitBtn.disabled = true;                 // 鎖住按鈕避免重複按
  });
}
