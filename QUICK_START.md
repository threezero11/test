# 🚀 빠른 시작 가이드

이 문서는 기존 프로젝트를 기반으로 새로운 요구사항을 빠르게 구현할 때 사용합니다.

---

## 📋 새로운 페이지 추가하기

### 1단계: HTML 파일 생성

```bash
# 템플릿 복사
cp dashboard.html new-page.html
```

### 2단계: 내용 수정

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>새로운 페이지 제목</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <style>
    /* 기본 CSS 스타일은 dashboard.html에서 복사 */
    /* 페이지별 커스텀 스타일 추가 */
  </style>
</head>
<body>
  <!-- 네비게이션 메뉴 (필수) -->
  <nav class="navbar">
    <a href="dashboard" class="nav-btn">📊 대시보드</a>
    <a href="new-page" class="nav-btn active">📄 새 페이지</a>
    <!-- 다른 링크들 -->
    <button id="theme-toggle">🌙</button>
  </nav>

  <!-- 메인 콘텐츠 -->
  <div class="container">
    <!-- 여기에 내용 추가 -->
  </div>

  <script>
    // dashboard.html의 JavaScript 섹션 전체 복사
  </script>
</body>
</html>
```

### 3단계: 네비게이션 업데이트

**모든 HTML 파일에서** 새 링크 추가:

```html
<a href="new-page" class="nav-btn">📄 새 페이지</a>
```

### 4단계: 배포

```bash
# 파일 추가
git add new-page.html

# 커밋
git commit -m "Add: 새로운 페이지 추가"

# GitHub에 푸시 (자동으로 Vercel 배포)
git push origin main
```

---

## 🎨 디자인 커스터마이징

### 색상 변경

**dashboard.html의 CSS 변수 섹션 수정:**

```css
:root {
  --bg-grad-a: #ffffff;
  --bg-grad-b: #ffffff;
  --primary-color: #7c3aed;    /* 변경 */
  --secondary-color: #3b82f6;  /* 변경 */
}

[data-theme="dark"] {
  --bg-grad-a: #0f0f1e;
  --bg-grad-b: #1a1a2e;
  --text-primary: #f5f5f5;
}
```

### 레이아웃 변경

**Grid 레이아웃:**

```css
.container {
  display: grid;
  grid-template-columns: 1fr;        /* 모바일: 1열 */
  gap: 20px;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;  /* 태블릿: 2열 */
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;  /* PC: 3열 */
  }
}
```

---

## 📊 차트 추가하기

### SVG 라인 차트 템플릿

```html
<svg viewBox="0 0 600 300" class="chart-svg">
  <!-- 격자 -->
  <g class="grid">
    <line x1="50" y1="250" x2="550" y2="250" stroke="#e0e0e0" />
    <line x1="50" y1="50" x2="50" y2="250" stroke="#e0e0e0" />
  </g>
  
  <!-- 데이터 라인 -->
  <polyline points="50,200 100,180 150,160 200,140 250,120" 
            class="chart-line"
            style="stroke: #7c3aed; fill: none; stroke-width: 2;" />
  
  <!-- 라벨 -->
  <text x="50" y="270" text-anchor="middle">1월</text>
</svg>
```

---

## 💾 자주 사용하는 코드 스니펫

### 테마 토글 (모든 페이지에 필수)

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // 저장된 테마 로드
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeIcon();

  // 테마 전환
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const theme = html.getAttribute('data-theme');
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }
});
```

### 현재 페이지 활성화

```javascript
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'dashboard';
  document.querySelectorAll('.nav-btn').forEach(btn => {
    const href = btn.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'dashboard')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNav);
```

### 카드 컴포넌트

```html
<div class="card">
  <div class="card-title">
    <span class="icon">📊</span>
    제목
  </div>
  <div class="card-content">
    <!-- 내용 -->
  </div>
</div>
```

```css
.card {
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(100, 80, 200, 0.18);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(100, 80, 200, 0.25);
}
```

---

## 🔧 자주 하는 작업

### 1. 네비게이션 링크 추가

모든 HTML 파일의 navbar에 추가:

```html
<a href="page-name" class="nav-btn">📄 페이지명</a>
```

**⚠️ 주의:** `.html` 확장자 사용 금지

### 2. favicon 변경

1. `favicon.svg` 수정 또는 교체
2. 모든 HTML의 `<head>`에 다음 포함:
   ```html
   <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
   ```

### 3. 페이지 제목 변경

```html
<title>새로운 제목</title>
```

### 4. 배포 후 확인

```bash
# 로컬 확인 (수동)
# - 각 HTML 파일을 브라우저에서 열기
# - 네비게이션 링크 클릭 확인
# - 테마 토글 확인

# 온라인 확인
# https://test-indol-zeta-93.vercel.app
```

---

## 📝 가이드별 체크리스트

### ✅ 새 페이지 추가할 때

- [ ] HTML 파일 생성 또는 복사
- [ ] `<title>` 변경
- [ ] 네비게이션 메뉴 업데이트 (현재 파일 + 다른 파일들)
- [ ] 콘텐츠 작성
- [ ] favicon 링크 확인
- [ ] JavaScript 테마 토글 포함
- [ ] build.js에 새 파일 추가 (선택사항)
- [ ] Git 커밋 및 푸시
- [ ] Vercel 배포 확인

### ✅ 디자인 수정할 때

- [ ] 색상 CSS 변수 변경
- [ ] 레이아웃 미디어쿼리 수정
- [ ] 글래스모피즘 효과 조정
- [ ] 모든 페이지에서 테스트
- [ ] 라이트/다크 모드 모두 확인
- [ ] Git 커밋: `"Update: 디자인 수정 내용"`

### ✅ 데이터 업데이트할 때

- [ ] HTML 파일의 텍스트/숫자 수정
- [ ] SVG 차트 데이터 포인트 변경 (필요시)
- [ ] 날짜/일정 업데이트
- [ ] Git 커밋: `"Update: 데이터 업데이트"`
- [ ] GitHub 푸시

---

## 🐛 일반적인 문제 해결

### 링크가 작동 안 함
```
❌ href="dashboard.html"
✅ href="dashboard"
```

### 테마 토글이 안 움직임
- 브라우저 콘솔 확인 (F12)
- `#theme-toggle` 버튼 존재 확인
- JavaScript 코드 복사 확인

### 배포 후 변경사항이 안 보임
```bash
# Vercel 캐시 초기화
# 1. Vercel 대시보드에서 Deployments 확인
# 2. 최신 배포의 로그 확인
# 3. 브라우저 캐시 초기화 (Ctrl+Shift+Delete)
```

### 모바일에서 레이아웃이 깨짐
- 반응형 CSS 확인
- `@media (max-width: 768px)` 스타일 확인
- viewport 메타 태그 확인:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

---

## 📚 참고 자료

- **CSS 글래스모피즘:** backdrop-filter 속성
- **SVG 차트:** path 요소, stroke-dasharray 애니메이션
- **localStorage:** 클라이언트 저장소
- **Vercel Clean URLs:** cleanUrls 설정
- **Git 기초:** 커밋, 푸시, 브랜치

---

## 🎯 다음 단계

새로운 아이디어가 있을 때:

1. **이 문서 검토** - 원하는 작업이 이미 설명되어 있는지 확인
2. **DOCUMENTATION.md 참고** - 프로젝트 구조 이해
3. **요구사항 정리** - "뭘 추가/수정할 건지" 명확히 하기
4. **Claude에 요청** - "새 페이지 추가해줘" 또는 "디자인 수정해줘" 등

---

**작성:** 2026-05-06
**버전:** 1.0.0
