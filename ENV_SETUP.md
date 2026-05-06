# 환경변수 설정 가이드

## 파일 구조

```
.env.local          ← 로컬 환경변수 (보안, git 제외)
.gitignore          ← 버전 관리 제외 목록
```

## 설정 방법

### 1단계: 토큰 추가

`.env.local` 파일을 열고 다음과 같이 토큰을 추가하세요:

```bash
# GitHub 토큰
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Anthropic API 토큰
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 2단계: 터미널에서 환경변수 로드

```bash
# Bash/Zsh (권장)
source .env.local

# 확인하기
echo $GITHUB_TOKEN
```

### 3단계: 코드에서 사용

**Python:**
```python
import os
from dotenv import load_dotenv

load_dotenv('.env.local')
github_token = os.getenv('GITHUB_TOKEN')
api_key = os.getenv('ANTHROPIC_API_KEY')
```

**Node.js/JavaScript:**
```javascript
require('dotenv').config({ path: '.env.local' });
const githubToken = process.env.GITHUB_TOKEN;
const apiKey = process.env.ANTHROPIC_API_KEY;
```

**Bash:**
```bash
source .env.local
echo "Token: $GITHUB_TOKEN"
```

## 보안 주의사항

⚠️ **중요:**
- `.env.local` 파일은 **절대 커밋하지 마세요**
- `.gitignore`에 이미 추가되어 있습니다
- 토큰을 공개하지 마세요
- 토큰이 유출된 경우 즉시 재생성하세요

## 지원하는 토큰

| 토큰 | 용도 | 발급처 |
|------|------|--------|
| `GITHUB_TOKEN` | GitHub API 호출, 저장소 관리 | https://github.com/settings/tokens |
| `ANTHROPIC_API_KEY` | Claude API 호출 | https://console.anthropic.com |

## 토큰 발급 방법

### GitHub Token
1. https://github.com/settings/tokens 접속
2. "Generate new token" 클릭
3. Scopes: `repo`, `workflow` 체크
4. 생성된 토큰을 `.env.local`에 붙여넣기

### Anthropic API Key
1. https://console.anthropic.com 로그인
2. API Keys 섹션에서 "Create new key" 클릭
3. 생성된 키를 `.env.local`에 붙여넣기

## 문제 해결

**환경변수가 로드되지 않음:**
```bash
# 파일이 현재 디렉토리에 있는지 확인
ls -la .env.local

# 올바른 경로로 로드
source /full/path/to/.env.local
```

**권한 거부 오류:**
```bash
# 파일 권한 변경
chmod 600 .env.local
```

## 참고자료
- [GitHub Token Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
- [Anthropic API Documentation](https://docs.anthropic.com)
