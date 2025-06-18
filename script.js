window.onload = function() {
    const intro1 = document.getElementById('intro1');
    const intro2 = document.getElementById('intro2');
    const gameScreen = document.getElementById('gameScreen');

    intro1.style.display = 'block';
    intro1.classList.add('fade-in');

    setTimeout(() => {
        intro1.style.display = 'none';
        intro2.style.display = 'block';
        intro2.classList.add('fade-in');

        setTimeout(() => {
            intro2.style.display = 'none';
            gameScreen.style.display = 'block';
        }, 2000);
    }, 2000);
};

// 處理點擊熱區
document.querySelectorAll('.hotspot').forEach(item => {
    item.addEventListener('click', () => {
        const desc = item.getAttribute('data-desc');
        const code = item.getAttribute('data-code');
        document.getElementById('popup-desc').innerText = desc;
        document.getElementById('popup-code').innerText = code;
        document.getElementById('popup').style.display = 'block';
    });
});

// 複製優惠碼
document.getElementById('copyBtn').addEventListener('click', () => {
    const codeText = document.getElementById('popup-code').innerText;
    navigator.clipboard.writeText(codeText);
    alert("優惠碼已複製");
});

// 關閉彈窗
document.getElementById('popupClose').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

function exitGame() {
  // 例如跳轉回首頁或關閉遊戲
  alert("你已退出岸岸來潮活動！");
  // 例如：window.location.href = "index.html"; // 可跳轉
}
