/**
 * 고성명태㈜ 랜딩페이지 - JavaScript 기능
 * - 언어 전환 기능
 * - 부드러운 스크롤
 * - 폼 유효성 검사
 * - 애니메이션 효과
 */

class MyeongTaeLanding {
    constructor() {
        this.currentLang = 'ko';
        this.translations = {};
        this.init();
    }

    async init() {
        await this.loadLanguageData();
        this.setupEventListeners();
        this.setupScrollAnimations();
        this.setupMobileNavigation();
    }

    // ============================
    // 언어 전환 기능
    // ============================
    async loadLanguageData() {
        try {
            const [koData, enData] = await Promise.all([
                fetch('./lang/ko.json').then(res => res.json()),
                fetch('./lang/en.json').then(res => res.json())
            ]);
            
            this.translations = {
                ko: koData,
                en: enData
            };
            
            // 초기 언어 설정
            this.updatePageContent();
        } catch (error) {
            console.error('언어 파일 로드 실패:', error);
            // 언어 파일이 없어도 페이지가 동작하도록 fallback
        }
    }

    switchLanguage() {
        this.currentLang = this.currentLang === 'ko' ? 'en' : 'ko';
        this.updatePageContent();
        this.updateLanguageButton();
    }

    updatePageContent() {
        const elements = document.querySelectorAll('[data-key]');
        const currentTranslations = this.translations[this.currentLang];
        
        if (!currentTranslations) return;

        elements.forEach(element => {
            const key = element.getAttribute('data-key');
            const translation = this.getNestedValue(currentTranslations, key);
            
            if (translation) {
                element.textContent = translation;
            }
        });

        // placeholder 텍스트 업데이트
        const placeholderElements = document.querySelectorAll('[data-key-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            const translation = this.getNestedValue(currentTranslations, key);
            
            if (translation) {
                element.placeholder = translation;
            }
        });

        // HTML lang 속성 업데이트
        document.documentElement.lang = this.currentLang;
    }

    updateLanguageButton() {
        const langBtn = document.getElementById('lang-btn');
        const currentSpan = langBtn.querySelector('.lang-current');
        
        if (this.currentLang === 'ko') {
            currentSpan.textContent = 'KO';
            langBtn.innerHTML = '<span class="lang-current">KO</span> / EN';
        } else {
            currentSpan.textContent = 'EN';
            langBtn.innerHTML = '<span class="lang-current">EN</span> / KO';
        }
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // ============================
    // 부드러운 스크롤
    // ============================
    smoothScrollTo(targetId) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const navbar = document.getElementById('navbar');
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // ============================
    // 폼 유효성 검사
    // ============================
    validateForm(form) {
        const requiredFields = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        const errors = [];

        // 기존 에러 메시지 제거
        this.clearFormErrors(form);

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                this.showFieldError(field, '이 필드는 필수입니다.');
                errors.push(`${field.name}: 필수 필드`);
            } else {
                // 이메일 유효성 검사
                if (field.type === 'email' && !this.isValidEmail(field.value)) {
                    isValid = false;
                    this.showFieldError(field, '올바른 이메일 주소를 입력해주세요.');
                    errors.push(`${field.name}: 이메일 형식 오류`);
                }
            }
        });

        return { isValid, errors };
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showFieldError(field, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#ff6b6b';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';

        field.style.borderColor = '#ff6b6b';
        field.parentNode.appendChild(errorDiv);
    }

    clearFormErrors(form) {
        const errors = form.querySelectorAll('.field-error');
        errors.forEach(error => error.remove());

        const fields = form.querySelectorAll('input, textarea');
        fields.forEach(field => {
            field.style.borderColor = '';
        });
    }

    // ============================
    // 스크롤 애니메이션
    // ============================
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // fade-in 클래스가 있는 모든 요소 관찰
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // 네비게이션 바 스크롤 효과
        this.setupNavbarScroll();
    }

    setupNavbarScroll() {
        let lastScroll = 0;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            // 스크롤 방향에 따른 네비게이션 바 투명도 조정
            if (currentScroll > 100) {
                navbar.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                navbar.style.background = 'rgba(26, 26, 26, 0.95)';
            }

            lastScroll = currentScroll;
        });
    }

    // ============================
    // 모바일 네비게이션
    // ============================
    setupMobileNavigation() {
        const hamburger = document.getElementById('nav-hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 메뉴 링크 클릭시 모바일 메뉴 닫기
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ============================
    // 이벤트 리스너 설정
    // ============================
    setupEventListeners() {
        // 언어 전환 버튼
        const langBtn = document.getElementById('lang-btn');
        if (langBtn) {
            langBtn.addEventListener('click', () => this.switchLanguage());
        }

        // 네비게이션 링크 스크롤
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.smoothScrollTo(targetId);
            });
        });

        // 폼 제출
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(contactForm);
            });
        }

        // 윈도우 리사이즈 이벤트
        window.addEventListener('resize', () => {
            // 모바일 메뉴가 열린 상태에서 화면이 커지면 메뉴 닫기
            if (window.innerWidth > 768) {
                const navMenu = document.getElementById('nav-menu');
                const hamburger = document.getElementById('nav-hamburger');
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // ============================
    // 폼 제출 처리
    // ============================
    async handleFormSubmit(form) {
        const validation = this.validateForm(form);
        
        if (!validation.isValid) {
            console.log('폼 유효성 검사 실패:', validation.errors);
            return;
        }

        // 제출 버튼 비활성화
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = '전송 중...';

        try {
            // 실제 환경에서는 서버로 데이터 전송
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // 개발 환경에서는 콘솔에 출력
            console.log('폼 데이터:', data);
            
            // 성공 메시지 표시
            this.showSuccessMessage(form);
            form.reset();
            
        } catch (error) {
            console.error('폼 제출 오류:', error);
            this.showErrorMessage(form, '문의 전송 중 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            // 제출 버튼 활성화
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }

    showSuccessMessage(form) {
        const message = document.createElement('div');
        message.className = 'success-message';
        message.textContent = '문의가 성공적으로 전송되었습니다. 빠른 시일 내에 연락드리겠습니다.';
        message.style.cssText = `
            background: #4caf50;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        `;
        
        form.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }

    showErrorMessage(form, text) {
        const message = document.createElement('div');
        message.className = 'error-message';
        message.textContent = text;
        message.style.cssText = `
            background: #f44336;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            text-align: center;
        `;
        
        form.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 5000);
    }
}

// DOM이 로드되면 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MyeongTaeLanding();
});

// 외부에서 접근 가능하도록 전역 변수로 설정 (개발/디버깅용)
window.MyeongTaeLanding = MyeongTaeLanding;