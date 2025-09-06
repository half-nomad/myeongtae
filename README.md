# 고성명태㈜ 랜딩페이지

고성명태㈜의 B2B 바이어 대상 2개국어(한국어/영어) 랜딩페이지입니다.

## 🚀 프로젝트 개요

- **프로젝트명**: 고성명태㈜ 랜딩페이지
- **타입**: B2B 랜딩페이지
- **기술스택**: HTML5, CSS3, Vanilla JavaScript
- **언어**: 한국어/영어 지원
- **개발방법론**: 컴포넌트 기반, 모바일 우선

## 📁 프로젝트 구조

```
myeongtae/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css           # 스타일시트 (디자인 시스템 기반)
├── js/
│   └── main.js             # JavaScript 기능
├── lang/
│   ├── ko.json             # 한국어 번역
│   └── en.json             # 영어 번역
├── assets/
│   └── images/             # 이미지 리소스
├── plan.md                 # 개발 계획서
├── prd.md                  # 제품 기획서
├── design-system.md        # 디자인 시스템
└── claude.md               # Claude Code 설정
```

## 🛠️ 기능

### ✅ 완성된 기능
- **다국어 지원**: 한국어/영어 실시간 전환
- **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- **부드러운 스크롤**: 네비게이션 클릭시 섹션 이동
- **폼 유효성 검사**: 클라이언트 사이드 검증
- **모바일 네비게이션**: 햄버거 메뉴
- **스크롤 애니메이션**: IntersectionObserver 활용

### 📄 페이지 구성
1. **히어로 섹션**: 메인 메시지 및 CTA
2. **차별점 섹션**: 3가지 핵심 경쟁력
3. **기술 섹션**: 3단계 제조 공정
4. **제품 섹션**: 주요 제품 라인업 (황태포, 황태채, 코다리)
5. **인증 섹션**: 신뢰도 구축 요소
6. **CTA 섹션**: 문의 양식
7. **푸터**: 회사 정보

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #274060 (메인 브랜드)
- **Secondary**: #335c81 (섹션 배경)
- **Accent**: #65afff (CTA, 강조)
- **Background**: #1a1a1a (메인 배경)

### 특징
- **그라데이션 시스템** 적용
- **CSS 변수** 활용으로 일관성 유지
- **모바일 우선** 반응형 디자인
- **컴포넌트 기반** 스타일링

## 🚀 개발 서버 실행

### 방법 1: VS Code Live Server (권장)
1. VS Code에서 프로젝트 열기
2. Live Server 확장 프로그램 설치
3. `index.html` 우클릭 → "Open with Live Server"

### 방법 2: Python HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2  
python -m SimpleHTTPServer 8000
```

### 방법 3: Node.js http-server
```bash
npx http-server . -p 8000
```

## 📱 테스트 가이드

### 브라우저 호환성
- ✅ Chrome (최신)
- ✅ Safari (최신)  
- ✅ Firefox (최신)
- ✅ Edge (최신)

### 반응형 테스트
- **모바일**: 320px ~ 767px
- **태블릿**: 768px ~ 1023px
- **데스크톱**: 1024px 이상

### 기능 테스트 체크리스트
- [ ] 언어 전환 (KO ↔ EN)
- [ ] 네비게이션 스크롤
- [ ] 모바일 햄버거 메뉴
- [ ] 폼 유효성 검사
- [ ] 폼 제출 (콘솔 확인)
- [ ] 호버 애니메이션
- [ ] 스크롤 애니메이션

## 🔧 커스터마이징

### 콘텐츠 수정
- **텍스트**: `lang/ko.json`, `lang/en.json` 파일 편집
- **이미지**: `assets/images/` 폴더에 이미지 추가
- **색상**: `css/style.css`의 `:root` 변수 수정

### 새로운 섹션 추가
1. `index.html`에 HTML 구조 추가
2. `css/style.css`에 스타일 추가
3. `lang/` 파일에 번역 추가
4. 필요시 `js/main.js`에 기능 추가

## 📋 배포 가이드

### GitHub Pages
1. GitHub 저장소에 코드 푸시
2. Settings → Pages → Source: Deploy from a branch
3. Branch: main 선택

### Netlify  
1. Netlify에 저장소 연결
2. Build settings: 빌드 명령 없음 (정적 사이트)
3. Publish directory: `/` (루트)

### Vercel
1. Vercel에 프로젝트 import
2. Framework Preset: Other
3. 자동 배포

## 🐛 알려진 이슈

- 이미지 파일이 없어도 레이아웃이 깨지지 않도록 플레이스홀더 처리됨
- 언어 파일 로드 실패시 페이지는 정상 동작 (기본 한국어 표시)

## 📞 문의

프로젝트 관련 문의사항은 이슈 등록 또는 다음으로 연락주세요.

---

**개발 완료일**: 2024년  
**버전**: 1.0.0  
**라이센스**: Private