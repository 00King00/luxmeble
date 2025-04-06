// Language Switcher Functionality
class LanguageSwitcher {
    constructor(defaultLanguage = 'pl') {
        // Try to get the saved language from localStorage
        const savedLanguage = localStorage.getItem('selectedLanguage');
        this.currentLanguage = savedLanguage || defaultLanguage;
        this.translations = {};
        this.elements = document.querySelectorAll('[data-i18n]');
        this.languageSelect = document.getElementById('language-select');
        
        // Initialize
        this.init();
    }
    
    async init() {
        // Set language attributes on the HTML element
        document.documentElement.setAttribute('lang', this.currentLanguage);
        document.documentElement.setAttribute('data-lang', this.currentLanguage);
        
        // Set language select value
        if (this.languageSelect) {
            this.languageSelect.value = this.currentLanguage;
        }
        
        // Load translations for available languages
        await this.loadTranslations('uk');
        await this.loadTranslations('pl');
        
        // Apply translations
        this.updateContent();
        
        // Setup event listener for language selection
        if (this.languageSelect) {
            this.languageSelect.addEventListener('change', (e) => {
                this.changeLanguage(e.target.value);
                // Save the selected language to localStorage
                localStorage.setItem('selectedLanguage', e.target.value);
            });
        }
    }
    
    async loadTranslations(language) {
        // Embed translations directly to avoid CORS issues when using file:// protocol
        const embeddedTranslations = {
            'uk': {
                "page_title": "Преміальні шафи та кухні на замовлення",
                "nav_home": "Головна",
                "nav_about": "Про нас",
                "nav_services": "Послуги",
                "nav_portfolio": "Портфоліо",
                "nav_testimonials": "Відгуки",
                "nav_contact": "Контакти",
                "btn_consultation": "Замовити консультацію",
                "hero_title": "Розкішні меблі для вашого дому",
                "hero_subtitle": "Ми створюємо унікальні кухні та шафи на замовлення, які ідеально пасують до вашого інтер'єру та відповідають вашим потребам.",
                "btn_our_works": "Наші роботи",
                "btn_contact": "Зв'язатися",
                "about_title": "Про нас",
                "about_subtitle": "Більше 15 років ми створюємо преміальні меблі з найкращих матеріалів",
                "about_heading": "Перетворюємо ваші мрії у реальність",
                "about_p1": "LuxMeble — це команда професіоналів з багаторічним досвідом виготовлення преміальних меблів на замовлення. Ми спеціалізуємося на створенні ексклюзивних кухонь та шаф, які поєднують у собі естетику, функціональність та довговічність.",
                "about_p2": "Наша філософія проста — кожен проект має бути унікальним та відображати особистість замовника. Ми не просто виготовляємо меблі, ми створюємо простір, в якому вам буде комфортно та затишно.",
                "about_p3": "Працюємо лише з найякіснішими матеріалами та фурнітурою від провідних європейських виробників, що гарантує довговічність та надійність наших меблів.",
                "why_us_title": "Чому саме ми?",
                "why_us_subtitle": "Переваги співпраці з нашою компанією",
                "feature1_title": "Якість",
                "feature1_text": "Використовуємо лише сертифіковані матеріали та фурнітуру від провідних виробників.",
                "feature2_title": "Індивідуальний підхід",
                "feature2_text": "Кожен проект розробляємо з урахуванням усіх побажань та особливостей приміщення.",
                "feature3_title": "Сучасне обладнання",
                "feature3_text": "Наше виробництво оснащене найсучаснішим обладнанням європейських виробників.",
                "feature4_title": "Точні терміни",
                "feature4_text": "Дотримуємося заздалегідь узгоджених термінів виготовлення та встановлення меблів.",
                "feature5_title": "Гарантія",
                "feature5_text": "Надаємо гарантію 5 років на всі види меблів та безкоштовне обслуговування.",
                "feature6_title": "Конкурентні ціни",
                "feature6_text": "Пропонуємо найкраще співвідношення ціни та якості на ринку меблів.",
                "services_title": "Наші послуги",
                "services_subtitle": "Ми пропонуємо повний цикл створення меблів — від дизайну до встановлення",
                "service1_title": "Кухні на замовлення",
                "service1_text": "Створюємо кухні, які поєднують в собі стиль, функціональність та ергономіку. Індивідуальний підхід до кожного проекту.",
                "service2_title": "Шафи-купе",
                "service2_text": "Функціональні та стильні шафи-купе за індивідуальними розмірами. Максимально використовуємо наявний простір.",
                "service3_title": "Гардеробні кімнати",
                "service3_text": "Проектуємо та виготовляємо зручні гардеробні системи з оптимальним розподілом внутрішнього простору.",
                "service4_title": "3D-проектування",
                "service4_text": "Створюємо детальні 3D-візуалізації майбутніх меблів, щоб ви могли оцінити результат до початку виробництва.",
                "btn_order": "Замовити",
                "counter1_value": "15+",
                "counter1_title": "Років досвіду",
                "counter2_value": "1000+",
                "counter2_title": "Виконаних проектів",
                "counter3_value": "95%",
                "counter3_title": "Задоволених клієнтів",
                "counter4_value": "50+",
                "counter4_title": "Професіоналів у команді",
                "portfolio_title": "Наші роботи",
                "portfolio_subtitle": "Перегляньте наші останні проекти, щоб оцінити якість та стиль наших меблів",
                "filter_all": "Всі проекти",
                "filter_kitchens": "Кухні",
                "filter_wardrobes": "Шафи",
                "filter_cabinets": "Гардеробні",
                "portfolio1_title": "Сучасна кухня",
                "portfolio1_text": "Мінімалістична кухня з фасадами без ручок та інтегрованою технікою.",
                "portfolio2_title": "Класична кухня",
                "portfolio2_text": "Елегантна кухня в класичному стилі з фасадами з натурального дерева.",
                "portfolio3_title": "Шафа-купе для спальні",
                "portfolio3_text": "Просторий гардероб з дзеркальними дверима та функціональним наповненням.",
                "portfolio4_title": "Вбудована шафа",
                "portfolio4_text": "Компактна шафа з оптимальним використанням простору в ніші.",
                "portfolio5_title": "Гардеробна кімната",
                "portfolio5_text": "Просторий гардероб з відкритими полицями та зоною для аксесуарів.",
                "portfolio6_title": "Кухня з островом",
                "portfolio6_text": "Простора кухня з функціональним островом та барною стійкою.",
                "btn_details": "Деталі",
                "testimonials_title": "Відгуки наших клієнтів",
                "testimonials_subtitle": "Думка наших клієнтів — найкраще підтвердження якості нашої роботи",
                "testimonial1_text": "Замовляли кухню в LuxMeble і дуже задоволені результатом. Команда професіоналів від початку до кінця супроводжувала нас в процесі. Дизайнер врахував всі наші побажання, а встановлення пройшло швидко та чисто. Рекомендую всім, хто шукає якісні меблі!",
                "testimonial1_name": "Олена Петренко",
                "testimonial1_city": "Київ",
                "testimonial2_text": "Замовляв меблі для спальні: шафу-купе та комод. Все виконано дуже якісно, встановили швидко та акуратно. Особливо хочу відзначити роботу дизайнера, який допоміг з вибором матеріалів та кольорів. Результат перевершив наші очікування!",
                "testimonial2_name": "Михайло Ковальчук",
                "testimonial2_city": "Львів",
                "testimonial3_text": "Вже втретє замовляємо меблі у LuxMeble. Цього разу це була кухня з островом. Якість матеріалів і роботи на висоті! Компанія дотримується термінів, завжди на зв'язку і готова допомогти з будь-яким питанням. Рекомендую!",
                "testimonial3_name": "Ірина Мельник",
                "testimonial3_city": "Одеса",
                "contact_title": "Зв'яжіться з нами",
                "contact_subtitle": "Готові обговорити ваш проект? Заповніть форму нижче або зв'яжіться з нами за контактами",
                "contact_heading": "Наші контакти",
                "contact_address": "вул. Ванди Рудкивич 96, 37-100 Ланцют",
                "contact_hours": "Пн-Пт: 9:00-18:00, Сб: 10:00-15:00",
                "social_heading": "Соціальні мережі",
                "form_name": "Ваше ім'я",
                "form_email": "Ваш email",
                "form_phone": "Ваш телефон",
                "form_service": "Оберіть послугу",
                "form_kitchens": "Кухні",
                "form_wardrobes": "Шафи-купе",
                "form_cabinets": "Гардеробні",
                "form_other": "Інше",
                "form_message": "Ваше повідомлення",
                "btn_send": "Надіслати",
                "partners_title": "Наші партнери",
                "partners_subtitle": "Співпрацюємо з провідними виробниками меблевої фурнітури та матеріалів",
                "footer_about": "Про LuxMeble",
                "footer_about_text": "Виготовлення преміальних меблів на замовлення з 2008 року. Наша спеціалізація — кухні та шафи найвищої якості.",
                "footer_links": "Швидкі посилання",
                "footer_catalog": "Каталог",
                "footer_catalog_item1": "Кухні",
                "footer_catalog_item2": "Шафи-купе",
                "footer_catalog_item3": "Гардеробні",
                "footer_catalog_item4": "Вітальні",
                "footer_catalog_item5": "Спаль��і",
                "footer_legal": "Правова інформація",
                "footer_legal_item1": "Умови використання",
                "footer_legal_item2": "Політика конфіденційності",
                "footer_legal_item3": "Доставка та оплата",
                "footer_legal_item4": "Гарантія",
                "footer_copyright": "Всі права захищені.",
                "language_selector": "Мова"
            },
            'pl': {
                "page_title": "Szafy i kuchnie premium na zamówienie",
                "nav_home": "Główna",
                "nav_about": "O nas",
                "nav_services": "Usługi",
                "nav_portfolio": "Portfolio",
                "nav_testimonials": "Opinie",
                "nav_contact": "Kontakt",
                "btn_consultation": "Zamów konsultację",
                "hero_title": "Luksusowe meble dla Twojego domu",
                "hero_subtitle": "Tworzymy unikalne kuchnie i szafy na zamówienie, które idealnie pasują do Twojego wnętrza i spełniają Twoje potrzeby.",
                "btn_our_works": "Nasze prace",
                "btn_contact": "Kontakt",
                "about_title": "O nas",
                "about_subtitle": "Od ponad 15 lat tworzymy meble premium z najlepszych materiałów",
                "about_heading": "Zamieniamy Twoje marzenia w rzeczywistość",
                "about_p1": "LuxMeble to zespół profesjonalistów z wieloletnim doświadczeniem w produkcji mebli premium na zamówienie. Specjalizujemy się w tworzeniu ekskluzywnych kuchni i szaf, które łączą estetykę, funkcjonalność i trwałość.",
                "about_p2": "Nasza filozofia jest prosta — każdy projekt powinien być unikalny i odzwierciedlać osobowość klienta. Nie tylko produkujemy meble, tworzymy przestrzeń, w której będziesz czuć się komfortowo i przytulnie.",
                "about_p3": "Pracujemy tylko z najwyższej jakości materiałami i okuciami od wiodących europejskich producentów, co gwarantuje trwałość i niezawodność naszych mebli.",
                "why_us_title": "Dlaczego my?",
                "why_us_subtitle": "Zalety współpracy z naszą firmą",
                "feature1_title": "Jakość",
                "feature1_text": "Używamy tylko certyfikowanych materiałów i okuć od wiodących producentów.",
                "feature2_title": "Indywidualne podejście",
                "feature2_text": "Każdy projekt opracowujemy z uwzględnieniem wszystkich życzeń i cech pomieszczenia.",
                "feature3_title": "Nowoczesny sprzęt",
                "feature3_text": "Nasza produkcja jest wyposażona w najnowocześniejszy sprzęt od europejskich producentów.",
                "feature4_title": "Dokładne terminy",
                "feature4_text": "Przestrzegamy wcześniej uzgodnionych terminów produkcji i montażu mebli.",
                "feature5_title": "Gwarancja",
                "feature5_text": "Udzielamy 5-letniej gwarancji na wszystkie rodzaje mebli i bezpłatny serwis.",
                "feature6_title": "Konkurencyjne ceny",
                "feature6_text": "Oferujemy najlepszy stosunek ceny do jakości na rynku mebli.",
                "services_title": "Nasze usługi",
                "services_subtitle": "Oferujemy pełny cykl tworzenia mebli — od projektu do montażu",
                "service1_title": "Kuchnie na zamówienie",
                "service1_text": "Tworzymy kuchnie, które łączą styl, funkcjonalność i ergonomię. Indywidualne podejście do każdego projektu.",
                "service2_title": "Szafy przesuwne",
                "service2_text": "Funkcjonalne i stylowe szafy przesuwne na wymiar. Maksymalnie wykorzystujemy dostępną przestrzeń.",
                "service3_title": "Garderoby",
                "service3_text": "Projektujemy i produkujemy wygodne systemy garderobiane z optymalnym podziałem przestrzeni wewnętrznej.",
                "service4_title": "Projektowanie 3D",
                "service4_text": "Tworzymy szczegółowe wizualizacje 3D przyszłych mebli, abyś mógł ocenić wynik przed rozpoczęciem produkcji.",
                "btn_order": "Zamów",
                "counter1_value": "15+",
                "counter1_title": "Lat doświadczenia",
                "counter2_value": "1000+",
                "counter2_title": "Zrealizowanych projektów",
                "counter3_value": "95%",
                "counter3_title": "Zadowolonych klientów",
                "counter4_value": "50+",
                "counter4_title": "Profesjonalistów w zespole",
                "portfolio_title": "Nasze prace",
                "portfolio_subtitle": "Zobacz nasze ostatnie projekty, aby ocenić jakość i styl naszych mebli",
                "filter_all": "Wszystkie projekty",
                "filter_kitchens": "Kuchnie",
                "filter_wardrobes": "Szafy",
                "filter_cabinets": "Garderoby",
                "portfolio1_title": "Nowoczesna kuchnia",
                "portfolio1_text": "Minimalistyczna kuchnia z frontami bez uchwytów i zintegrowanymi urządzeniami.",
                "portfolio2_title": "Klasyczna kuchnia",
                "portfolio2_text": "Elegancka kuchnia w stylu klasycznym z frontami z naturalnego drewna.",
                "portfolio3_title": "Szafa przesuwna do sypialni",
                "portfolio3_text": "Przestronna szafa z lustrami i funkcjonalnym wyposażeniem.",
                "portfolio4_title": "Szafa wnękowa",
                "portfolio4_text": "Kompaktowa szafa z optymalnym wykorzystaniem przestrzeni w niszy.",
                "portfolio5_title": "Garderoba",
                "portfolio5_text": "Przestronna garderoba z otwartymi półkami i strefą na akcesoria.",
                "portfolio6_title": "Kuchnia z wyspą",
                "portfolio6_text": "Przestronna kuchnia z funkcjonalną wyspą i barem.",
                "btn_details": "Szczegóły",
                "testimonials_title": "Opinie naszych klientów",
                "testimonials_subtitle": "Opinie naszych klientów to najlepsze potwierdzenie jakości naszej pracy",
                "testimonial1_text": "Zamówiliśmy kuchnię w LuxMeble i jesteśmy bardzo zadowoleni z rezultatu. Zespół profesjonalistów towarzyszył nam w procesie od początku do końca. Projektant uwzględnił wszystkie nasze życzenia, a montaż przebiegł szybko i czysto. Polecam wszystkim, którzy szukają mebli wysokiej jakości!",
                "testimonial1_name": "Elena Petrenko",
                "testimonial1_city": "Kijów",
                "testimonial2_text": "Zamawiałem meble do sypialni: szafę przesuwną i komodę. Wszystko zostało wykonane bardzo dobrze, zamontowane szybko i starannie. Szczególnie chciałbym wyróżnić pracę projektanta, który pomógł w doborze materiałów i kolorów. Wynik przerósł nasze oczekiwania!",
                "testimonial2_name": "Michał Kowalczuk",
                "testimonial2_city": "Lwów",
                "testimonial3_text": "To już trzeci raz, gdy zamawiamy meble w LuxMeble. Tym razem była to kuchnia z wyspą. Jakość materiałów i wykonania jest doskonała! Firma dotrzymuje terminów, zawsze jest w kontakcie i gotowa pomóc w każdej sprawie. Polecam!",
                "testimonial3_name": "Irena Melnik",
                "testimonial3_city": "Odessa",
                "contact_title": "Skontaktuj się z nami",
                "contact_subtitle": "Gotowi omówić Twój projekt? Wypełnij formularz poniżej lub skontaktuj się z nami",
                "contact_heading": "Nasze kontakty",
                "contact_address": "ul. Wandy Rutkiewicz 96, 37-100 Łańcut",
                "contact_hours": "Pon-Pt: 9:00-18:00, Sob: 10:00-15:00",
                "social_heading": "Media społecznościowe",
                "form_name": "Twoje imię",
                "form_email": "Twój email",
                "form_phone": "Twój telefon",
                "form_service": "Wybierz usługę",
                "form_kitchens": "Kuchnie",
                "form_wardrobes": "Szafy przesuwne",
                "form_cabinets": "Garderoby",
                "form_other": "Inne",
                "form_message": "Twoja wiadomość",
                "btn_send": "Wyślij",
                "partners_title": "Nasi partnerzy",
                "partners_subtitle": "Współpracujemy z wiodącymi producentami okuć meblowych i materiałów",
                "footer_about": "O LuxMeble",
                "footer_about_text": "Produkcja mebli premium na zamówienie od 2008 roku. Nasza specjalizacja to kuchnie i szafy najwyższej jakości.",
                "footer_links": "Szybkie linki",
                "footer_catalog": "Katalog",
                "footer_catalog_item1": "Kuchnie",
                "footer_catalog_item2": "Szafy przesuwne",
                "footer_catalog_item3": "Garderoby",
                "footer_catalog_item4": "Salony",
                "footer_catalog_item5": "Sypialnie",
                "footer_legal": "Informacje prawne",
                "footer_legal_item1": "Warunki korzystania",
                "footer_legal_item2": "Polityka prywatności",
                "footer_legal_item3": "Dostawa i płatność",
                "footer_legal_item4": "Gwarancja",
                "footer_copyright": "Wszelkie prawa zastrzeżone.",
                "language_selector": "Język"
            }
        };
        
        try {
            // First try to use embedded translations
            if (embeddedTranslations[language]) {
                this.translations[language] = embeddedTranslations[language];
                return;
            }
            
            // If not available in embedded translations, try to fetch from file
            // This will work when deployed to a server
            const response = await fetch(`./lang-${language}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load translations for ${language}`);
            }
            const data = await response.json();
            this.translations[language] = data;
        } catch (error) {
            console.error(`Error loading translations for ${language}:`, error);
            
            // Fallback to embedded translations if fetch failed
            if (!this.translations[language] && embeddedTranslations[language]) {
                this.translations[language] = embeddedTranslations[language];
            }
        }
    }
    
    changeLanguage(language) {
        if (this.translations[language]) {
            this.currentLanguage = language;
            document.documentElement.setAttribute('lang', language);
            document.documentElement.setAttribute('data-lang', language);
            this.updateContent();
            
            // Dispatch event for other components that might need to react to language change
            const event = new CustomEvent('languageChanged', { detail: { language } });
            document.dispatchEvent(event);
        } else {
            console.error(`Translations for ${language} are not loaded`);
        }
    }
    
    updateContent() {
        if (!this.translations[this.currentLanguage]) {
            console.error(`No translations available for ${this.currentLanguage}`);
            return;
        }
        
        // Update the page title
        const pageTitle = this.translations[this.currentLanguage]["page_title"];
        if (pageTitle) {
            document.getElementById('page-title').textContent = `LuxMeble - ${pageTitle}`;
        }
        
        // Update regular content elements with data-i18n attribute
        this.elements = document.querySelectorAll('[data-i18n]'); // Refresh elements list
        this.elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                // Handle specific element types
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.getAttribute('placeholder')) {
                        element.placeholder = translation;
                    } else {
                        element.value = translation;
                    }
                } else if (element.tagName === 'IMG') {
                    element.alt = translation;

                } else if (element.tagName === 'OPTION') {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            } else {
                console.warn(`No translation found for key: ${key} in language: ${this.currentLanguage}`);
            }
        });
        
        // Update placeholder elements with data-i18n-placeholder attribute
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.translations[this.currentLanguage][key];
            
            if (translation) {
                element.placeholder = translation;
            } else {
                console.warn(`No translation found for placeholder key: ${key} in language: ${this.currentLanguage}`);
            }
        });
    }
}

// Initialize language switcher with default language when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize with the default language
    initializeLanguage('pl');
});

// Function to initialize the language switcher with a specified default language
function initializeLanguage(defaultLanguage = 'pl') {
    window.languageSwitcher = new LanguageSwitcher(defaultLanguage);
    return window.languageSwitcher;
}
