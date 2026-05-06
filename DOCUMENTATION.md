# 김비서 대시보드 - 프로젝트 문서

**프로젝트명:** Kim Secretary Dashboard (김비서 대시보드)
**버전:** 1.0.0
**생성일:** 2026-05-06
**배포 URL:** https://test-indol-zeta-93.vercel.app
**GitHub 저장소:** https://github.com/threezero11/test

---

## 📋 프로젝트 개요

프리미엄 글래스모피즘(Glassmorphism) 디자인을 적용한 마케팅팀 대시보드 애플리케이션입니다. 5개의 HTML 페이지로 구성되어 있으며, 순수 HTML/CSS/JavaScript로 구현되었습니다. Vercel에 정적 웹사이트로 배포되어 있습니다.

### 핵심 특징
- ✨ 글래스모피즘 UI (glassmorphism with backdrop-filter blur)
- 🌙 라이트/다크 모드 토글 (localStorage 기반 영속성)
- 📱 반응형 디자인
- 🎯 통합 네비게이션 메뉴 (모든 페이지에 고정)
- 📊 SVG 기반 차트 (외부 라이브러리 없음)
- 🚀 Vercel 정적 배포

---

## 🏗️ 파일 구조

```
프로젝트 루트/
├── dashboard.html          # 메인 대시보드 페이지
├── chart.html              # 매출 분석 차트 페이지
├── diagram.html            # 업무 프로세스 다이어그램
├── report.html             # 웹사이트 분석 리포트
├── meeting-result.html     # 회의록 문서
├── diagram.svg             # 프로세스 플로우 SVG (diagram.html에서 사용)
├── favicon.svg             # 브라우저 탭 아이콘
├── package.json            # Node.js 프로젝트 설정
├── vercel.json             # Vercel 배포 설정
├── build.js                # Vercel 빌드 스크립트
├── .env.local              # 로컬 환경변수 (Git 제외)
├── .gitignore              # Git 무시 파일 목록
├── public/                 # Vercel 배포 폴더 (자동 생성)
└── DOCUMENTATION.md        # 이 파일

.claude/
└── projects/               # Claude 메모리 및 설정
```

---

## 📄 페이지 상세 설명

### 1. **dashboard.html** (메인 대시보드)
- **목적:** 마케팅팀의 핵심 지표 한눈에 보기
- **섹션:**
  - 📝 할일 목록 (우선순위별 색상 코딩: 빨강=긴급, 주황=중요, 초록=보통)
  - 📅 주간 일정 (날짜별 미팅 및 일정)
  - 📊 프로젝트 진행률 (6개 프로젝트, 진행률 표시)
  - 💰 매출 요약 (2개월 누적, 거래 횟수)
- **기술:** CSS Grid 레이아웃, 진행률 바, 체크박스

### 2. **chart.html** (매출 분석)
- **목적:** 판매 데이터 시각화
- **차트:**
  - 📈 라인 차트: 일별 매출 추세 (1월=파란색, 2월=초록색)
  - 📊 가로 막대 차트: 상품별 판매량 비교
- **기술:** SVG path 애니메이션 (stroke-dasharray 사용), 호버 툴팁

### 3. **diagram.html** (업무 프로세스)
- **목적:** 5단계 마케팅 프로세스 흐름 표시
- **단계:** 기획(핑크) → 제작(노랑) → 검토(파랑) → 배포(초록) → 분석(보라)
- **기술:** SVG 기반 다이어그램, 아이콘 및 설명 텍스트
- **참고:** diagram.svg를 HTML로 래핑 (네비게이션 포함)

### 4. **report.html** (웹사이트 분석)
- **목적:** 외부 서비스(SubTrackr) 웹사이트 분석 리포트
- **섹션:**
  - 서비스 개요
  - 사이트 구조 분석
  - 디자인 분석
  - 주요 기능 및 강점/약점
  - 개선 기회
  - KPI 메트릭 (사용자 만족도 85%, 전환율 12% 등)
- **기술:** 카드 레이아웃, 진행률 바, 색상 코딩

### 5. **meeting-result.html** (회의록)
- **목적:** 마케팅팀 회의 내용 기록
- **섹션:**
  - 참석자
  - 지난주 완료 사항
  - 이번주 할일
  - 논의 사항
  - 액션 아이템
  - 다음 회의 일정
- **기술:** 카드 기반 레이아웃, report.html과 동일 스타일

---

## 🎨 디자인 시스템

### 글래스모피즘 특징
```css
/* 기본 글래스 효과 */
backdrop-filter: blur(12px);
background: rgba(255, 255, 255, 0.55);
border: 1px solid rgba(255, 255, 255, 0.75);
box-shadow: 0 8px 32px rgba(100, 80, 200, 0.18);
```

### 테마 시스템
- **라이트 모드:** 밝은 배경, 어두운 텍스트
- **다크 모드:** 어두운 배경, 밝은 텍스트
- **저장 방식:** localStorage의 `theme` 키에 저장
- **CSS 구현:** `:root` CSS 변수 + `[data-theme="dark"]` 선택자

### 색상 팔레트
- 주색: 보라색 (#7c3aed)
- 보조색: 파란색 (#3b82f6)
- 강조색: 주황색 (#f59e0b), 초록색 (#10b981)
- 텍스트: 어두운회색 (#1a1a2e), 밝은회색 (#f5f5f5)

---

## 🔧 기술 스택

### 프론트엔드
- **HTML5:** 구조 마크업
- **CSS3:** 글래스모피즘, 그리드/플렉스 레이아웃, 애니메이션
- **JavaScript (순수):** 테마 토글, SVG 차트, 인터랙션

### 배포
- **Vercel:** 정적 웹사이트 호스팅
- **GitHub:** 코드 저장소 (threezero11/test)
- **Git:** 버전 관리

### 빌드 프로세스
- **build.js:** Node.js 스크립트로 HTML/SVG를 public 폴더로 복사
- **npm run build:** Vercel에서 배포 전 자동 실행

---

## 🚀 배포 설정

### package.json
```json
{
  "name": "kim-secretary-dashboard",
  "version": "1.0.0",
  "scripts": {
    "build": "node build.js"
  }
}
```

### vercel.json (배포 설정)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "cleanUrls": true,
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/",
      "destination": "/dashboard"
    }
  ]
}
```

**설정 해설:**
- `buildCommand`: build.js 실행으로 public 폴더 생성
- `outputDirectory`: public 폴더의 파일을 배포
- `cleanUrls`: /dashboard.html을 /dashboard로 접근 가능
- `trailingSlash`: 끝의 / 제거 (/dashboard/ → /dashboard)
- `rewrites`: 루트(/) 접근 시 /dashboard로 리다이렉트

### URL 접근 방식
- **루트:** https://test-indol-zeta-93.vercel.app → /dashboard로 자동 이동
- **대시보드:** https://test-indol-zeta-93.vercel.app/dashboard
- **차트:** https://test-indol-zeta-93.vercel.app/chart
- **다이어그램:** https://test-indol-zeta-93.vercel.app/diagram
- **리포트:** https://test-indol-zeta-93.vercel.app/report
- **회의록:** https://test-indol-zeta-93.vercel.app/meeting-result

---

## 📝 네비게이션 메뉴

모든 HTML 파일에 고정된 상단 네비게이션 메뉴가 있습니다.

```html
<nav class="navbar">
  <a href="dashboard" class="nav-btn">📊 대시보드</a>
  <a href="chart" class="nav-btn">📈 매출 현황</a>
  <a href="diagram" class="nav-btn">🔄 업무 프로세스</a>
  <a href="report" class="nav-btn">📋 사이트 분석</a>
  <a href="meeting-result" class="nav-btn">📝 회의록</a>
  <button id="theme-toggle">🌙</button>
</nav>
```

**특징:**
- 현재 페이지에 `active` 클래스 자동 적용
- 테마 토글 버튼 포함 (🌙 라이트 ↔ ☀️ 다크)
- 모든 페이지에서 동일한 스타일

---

## 🔐 보안 및 환경변수

### .env.local (Git에서 제외)
```
GITHUB_TOKEN=your_github_token_here
NODE_ENV=development
DEBUG=false
```

**주의사항:**
- `.env.local`은 절대 커밋하지 않음
- `.gitignore`에 `.env.local` 포함됨
- 로컬 개발 시에만 필요

---

## 🔄 Git/GitHub 워크플로우

### 초기 설정
```bash
# GitHub 저장소 클론
git clone git@github.com:threezero11/test.git
cd test

# 로컬 환경변수 설정
echo "GITHUB_TOKEN=..." > .env.local

# 파일 수정 및 커밋
git add .
git commit -m "메시지"

# GitHub에 푸시
git push origin main
```

### 배포 프로세스
1. **로컬 수정:** dashboard.html 등 파일 변경
2. **커밋:** `git commit -m "설명"`
3. **푸시:** `git push origin main`
4. **Vercel 감지:** GitHub 푸시 감지 후 자동 빌드
5. **배포:** 빌드 성공 시 자동 배포 완료
6. **확인:** https://test-indol-zeta-93.vercel.app 에서 확인

---

## 🎯 주요 구현 사항

### 1. 테마 토글 구현
```javascript
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// localStorage에서 저장된 테마 로드
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// 토글 버튼 클릭 시 테마 전환
themeToggle.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon();
});
```

### 2. SVG 차트 애니메이션
- **stroke-dasharray:** 선의 길이를 대시로 표현
- **stroke-dashoffset:** 애니메이션으로 대시 이동
- **CSS 애니메이션:** 0ms에서 duration까지 offset 변경

### 3. 네비게이션 활성 상태
```javascript
// 현재 URL과 링크 href 비교하여 active 클래스 추가
document.querySelectorAll('.nav-btn').forEach(btn => {
  if (btn.getAttribute('href') === currentPage) {
    btn.classList.add('active');
  }
});
```

### 4. 반응형 레이아웃
```css
/* 모바일 우선 접근 */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

/* 태블릿 이상 */
@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

/* 데스크탑 */
@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
```

---

## 🔍 네비게이션 링크 주의사항

**중요:** 모든 HTML 파일의 네비게이션 링크는 `.html` 확장자 없이 작성합니다.

```html
<!-- ❌ 잘못된 방식 -->
<a href="dashboard.html">대시보드</a>

<!-- ✅ 올바른 방식 -->
<a href="dashboard">대시보드</a>
```

**이유:** Vercel의 `cleanUrls: true` 설정으로 `/dashboard`는 자동으로 `/dashboard.html`로 매핑됩니다.

---

## 📊 파일 크기

| 파일 | 크기 |
|------|------|
| dashboard.html | 32KB |
| chart.html | 16KB |
| report.html | 22KB |
| diagram.html | 7KB |
| meeting-result.html | 8.5KB |
| diagram.svg | 4.5KB |
| favicon.svg | <1KB |

---

## ✅ 구현 완료 체크리스트

- [x] 글래스모피즘 대시보드 생성
- [x] 라이트/다크 모드 토글
- [x] localStorage 테마 영속성
- [x] 5개 HTML 페이지 생성
- [x] SVG 차트 구현 (라인 + 막대)
- [x] 프로세스 다이어그램
- [x] 웹사이트 분석 리포트
- [x] 회의록 문서
- [x] 통합 네비게이션 메뉴
- [x] Vercel 배포
- [x] 도메인 접속 설정
- [x] favicon 추가
- [x] Clean URLs 설정
- [x] 루트 경로 리다이렉트

---

## 🚨 트러블슈팅

### 404 에러 (페이지를 찾을 수 없음)
**원인:** 네비게이션 링크에 .html 확장자가 있음
**해결:** 모든 href에서 .html 제거 (예: `href="dashboard"`)

### favicon.ico 404 에러
**원인:** favicon이 없음
**해결:** favicon.svg 생성 후 HTML의 `<head>`에 다음 추가:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### 테마 토글이 안됨
**원인:** JavaScript 오류 또는 DOM 요소 미존재
**해결:** 브라우저 콘솔에서 오류 확인, `#theme-toggle` 버튼 존재 확인

### Vercel 배포가 안됨
**원인:** build.js 오류 또는 outputDirectory 설정 잘못
**확인사항:**
- `npm run build`가 public 폴더 생성하는지 확인
- vercel.json의 outputDirectory가 "public"인지 확인
- GitHub에 모든 파일이 커밋되었는지 확인

---

## 📚 향후 개선 아이디어

### 기능 추가
- [ ] 데이터베이스 연동 (실시간 데이터)
- [ ] 사용자 인증 (로그인)
- [ ] 댓글/피드백 시스템
- [ ] 다국어 지원 (i18n)
- [ ] 인쇄 기능 (PDF 다운로드)

### 성능 개선
- [ ] 이미지 최적화
- [ ] 라자 로딩 (Lazy Loading)
- [ ] 캐싱 전략
- [ ] 번들 크기 최소화

### 디자인 개선
- [ ] 모바일 UI/UX 향상
- [ ] 접근성(Accessibility) 개선
- [ ] 애니메이션 추가
- [ ] 다크 모드 색상 개선

---

## 📞 문제 해결

문제 발생 시 확인사항:

1. **브라우저 콘솔 확인:**
   - F12 → Console 탭에서 에러 메시지 확인

2. **네트워크 탭 확인:**
   - F12 → Network 탭에서 404/500 요청 확인

3. **캐시 초기화:**
   - Ctrl+Shift+Delete (Windows) 또는 Cmd+Shift+Delete (Mac)

4. **GitHub Actions 확인:**
   - GitHub 저장소 → Actions 탭에서 배포 로그 확인

5. **Vercel 대시보드 확인:**
   - https://vercel.com 에서 프로젝트 배포 상태 확인

---

## 📄 라이선스

MIT License

---

**마지막 업데이트:** 2026-05-06
**작성자:** Claude (AI Assistant)
**버전:** 1.0.0
