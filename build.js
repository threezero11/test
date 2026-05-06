const fs = require('fs');
const path = require('path');

// public 디렉토리 생성
if (!fs.existsSync('public')) {
  fs.mkdirSync('public', { recursive: true });
}

// 복사할 파일 목록
const files = [
  'dashboard.html',
  'chart.html',
  'diagram.html',
  'diagram.svg',
  'favicon.svg',
  'meeting-result.html',
  'report.html'
];

// 파일 복사
files.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(__dirname, 'public', file);

  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file}`);
  }
});

console.log('✓ Build completed successfully');
