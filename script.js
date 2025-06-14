const gotop = document.querySelector('.gotop');
gotop.addEventListener('click',function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function changeLanguage(language) {
  document.querySelectorAll('[data-' + language + ']').forEach(function(element) {
    element.textContent = element.getAttribute('data-' + language);
  });
}

document.addEventListener("DOMContentLoaded", function() {
  changeLanguage('en');
});

// theme
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// ตรวจสอบธีมที่บันทึกไว้
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  themeIcon.src = 'sun-icon.png'; // ไอคอนพระอาทิตย์ (สว่าง)
} else {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeIcon.src = 'moon-icon.png'; // ไอคอนพระจันทร์ (มืด)
}

// ฟังก์ชันเปลี่ยนธีม
themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.body.classList.toggle('dark', !isLight);

  if (isLight) {
    localStorage.setItem('theme', 'light');
    themeIcon.src = 'sun-icon.png'; 
  } else {
    localStorage.setItem('theme', 'dark');
    themeIcon.src = 'moon-icon.png'; 
  }

  // เปลี่ยนข้อความและพื้นหลังของสีหลังจากคลิกปุ่มเปลี่ยนธีม
  changeThemeColors();
});

// เปลี่ยนข้อความและพื้นหลังตามธีม
function changeThemeColors() {
  const elements = document.querySelectorAll('.color > button'); // เลือกแต่ละ div ที่อยู่ภายใน .color
  elements.forEach(function(element) {
    if (document.body.classList.contains('light')) {
      // สำหรับธีมสว่าง
      element.style.color = element.getAttribute('data-dark'); // เปลี่ยนสีข้อความให้เป็น dark สีของข้อความในธีมสว่าง
      element.style.backgroundColor = element.getAttribute('data-light-bg'); // เปลี่ยนพื้นหลัง
      element.textContent = element.getAttribute('data-light'); // เปลี่ยนข้อความให้ตรงกับโค้ดสีในธีมสว่าง
    } else {
      // สำหรับธีมมืด
      element.style.color = element.getAttribute('data-light'); // เปลี่ยนสีข้อความให้เป็น light สีของข้อความในธีมมืด
      element.style.backgroundColor = element.getAttribute('data-dark-bg'); // เปลี่ยนพื้นหลัง
      element.textContent = element.getAttribute('data-dark'); // เปลี่ยนข้อความให้ตรงกับโค้ดสีในธีมมืด
    }
  });
}

// เรียกใช้เมื่อโหลดหน้า
changeThemeColors();

// copy
function copyColorCode(element) {
  const colorCode = element.textContent.trim();
  console.log("Color to copy:", colorCode);

  navigator.clipboard.writeText(colorCode)
    .then(() => {
      console.log("Copied");
      element.classList.add('active');
      
      setTimeout(() => {
        element.classList.remove('active');
      }, 100);
});
}


