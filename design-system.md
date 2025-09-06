# 🎨 명태 랜딩페이지 - 디자인 시스템 가이드

> **모든 UI/UX 작업 전에 반드시 참조해야 하는 디자인 시스템 문서**

## 🚨 **필수 준수 사항**
**모든 개발 작업 시 이 디자인 시스템을 먼저 확인하고 진행할 것!**

---

## 🎨 컬러 시스템 (필수)

### **기본 컬러 팔레트**
```css
:root {
    /* 브랜드 컬러 (반드시 사용) */
    --primary: #274060;        /* Indigo Dye - 메인 브랜드 */
    --secondary: #335c81;      /* Lapis Lazuli - 섹션 배경 */
    --accent: #65afff;         /* Argentinian Blue - CTA, 강조 */
    --tertiary: #1b2845;       /* Space Cadet - 다크 배경 */
    --highlight: #5899e2;      /* United Nations Blue - 호버, 액티브 */
    
    /* 배경 컬러 */
    --bg-primary: #1a1a1a;    /* 메인 배경 */
    --bg-secondary: #274060;   /* 섹션 배경 */
    --bg-card: rgba(255, 255, 255, 0.05); /* 카드 배경 */
    
    /* 텍스트 컬러 */
    --text-primary: #FFFFFF;   /* 기본 텍스트 */
    --text-secondary: #CCCCCC; /* 서브 텍스트 */
    --text-muted: #999999;     /* 보조 텍스트 */
}
```

### **컬러 사용 가이드**
- **Primary (#274060)**: 메인 헤딩, 로고, 주요 브랜드 요소
- **Secondary (#335c81)**: 섹션 구분, 카드 배경
- **Accent (#65afff)**: CTA 버튼, 링크, 강조 요소
- **Highlight (#5899e2)**: 호버 상태, 액티브 상태

### **그라데이션 시스템**
```css
/* 헤드라인 그라데이션 */
.gradient-headline {
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* CTA 버튼 그라데이션 */
.gradient-cta {
    background: linear-gradient(90deg, var(--accent) 0%, var(--highlight) 100%);
}

/* 배경 그라데이션 */
.gradient-bg {
    background: linear-gradient(135deg, var(--tertiary) 0%, var(--primary) 100%);
}
```

---

## ✍️ 타이포그래피 시스템

### **폰트 설정 (필수)**
```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
    font-feature-settings: "tnum", "ss01", "ss02";
}
```

### **텍스트 계층 구조**
```css
/* 메인 헤드라인 */
.headline {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
}

/* 섹션 제목 */
.section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.2rem;
}

/* 서브 헤딩 */
.sub-heading {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
}

/* 본문 강조 */
.body-emphasis {
    font-size: clamp(1.1rem, 3vw, 1.3rem);
    font-weight: 600;
    line-height: 1.5;
}

/* 본문 기본 */
.body-text {
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    font-weight: 400;
    line-height: 1.7;
    color: var(--text-secondary);
}

/* 캡션/메타 */
.caption {
    font-size: clamp(0.875rem, 2vw, 0.95rem);
    font-weight: 500;
    color: var(--text-muted);
}
```

---

## 📐 레이아웃 시스템

### **컨테이너 및 그리드**
```css
/* 메인 컨테이너 */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* 반응형 그리드 시스템 */
.grid-auto-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.card-grid {
    display: grid;
    gap: var(--spacing-lg);
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .card-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
    .card-grid { grid-template-columns: repeat(3, 1fr); }
}
```

### **간격 시스템**
```css
:root {
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-xxl: 4rem;
}
```

---

## 🧩 컴포넌트 라이브러리

### **1. CTA 버튼**
```css
.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: var(--gradient-cta);
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(101, 175, 255, 0.3);
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(101, 175, 255, 0.4);
}

.cta-button-secondary {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
}
```

### **2. 카드 컴포넌트**
```css
.card {
    background: var(--bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(101, 175, 255, 0.3);
}

.card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.card-description {
    color: var(--text-secondary);
    line-height: 1.6;
}
```

### **3. 강조 박스**
```css
.highlight-box {
    background: rgba(101, 175, 255, 0.1);
    border: 1px solid rgba(101, 175, 255, 0.3);
    border-radius: 12px;
    padding: 2rem;
    margin: var(--spacing-lg) 0;
    position: relative;
}

.highlight-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-cta);
    border-radius: 12px 12px 0 0;
}
```

---

## 🎭 애니메이션 시스템

### **기본 트랜지션**
```css
* {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### **스크롤 애니메이션**
```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.6s ease;
}

.slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
}
```

### **호버 효과**
```css
.hover-lift {
    transition: transform 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
}

.hover-glow:hover {
    box-shadow: 0 0 20px rgba(101, 175, 255, 0.5);
}
```

---

## 📱 반응형 브레이크포인트

```css
/* Mobile First 접근 */
@media (min-width: 480px) {
    /* 큰 모바일 */
}

@media (min-width: 768px) {
    /* 태블릿 */
}

@media (min-width: 1024px) {
    /* 데스크톱 */
}

@media (min-width: 1200px) {
    /* 큰 데스크톱 */
}
```

---

**🎯 디자인 원칙**: "전문성 + 신뢰감 + 전환 최적화"  
**⚡ 성능 목표**: "3초 이내 로딩 + 95+ Lighthouse 점수"  
**📱 우선순위**: "모바일 First → 데스크톱 확장"