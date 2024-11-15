
// Dropdown menu alanı
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const link = item.querySelector('.menu-link');

        // Menüye tıklayınca açılır kapanır
        link.addEventListener('click', function (event) {
            event.preventDefault();
            item.classList.toggle('active');
        });

        // Menünün dışında tıklanınca menüyü kapat
        document.addEventListener('click', function (event) {
            if (!item.contains(event.target) && item.classList.contains('active')) {
                item.classList.remove('active');
            }
        });
    });
});

// Sayfa kaydırma alanı 
document.addEventListener("scroll", function () {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");
    const feature1 = document.querySelector(".screen-feature-1");
    const feature2 = document.querySelector(".screen-feature-2");

    const section1Position = section1.getBoundingClientRect().top;
    const section2Position = section2.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    // section1 ekranda göründüğünde feature1 aktif olur, feature2 pasif olur
    if (section1Position < screenHeight / 2 && section2Position > screenHeight / 2) {
        feature1.classList.add("active");
        feature2.classList.remove("active");
    }
    // section2 ekranda göründüğünde feature2 aktif olur, feature1 pasif olur
    else if (section2Position < screenHeight / 2) {
        feature1.classList.remove("active");
        feature2.classList.add("active");
    }
});

// Cihaz genişliği 480px'in altındaysa mobil özellikleri aktif hale getir
if (window.innerWidth <= 480) {
    // Sayfa kaydırma alanı
    document.addEventListener("scroll", function () {
        const section1 = document.getElementById("section1");
        const section2 = document.getElementById("section2");
        const feature1 = document.querySelector(".screen-feature-1");
        const feature2 = document.querySelector(".screen-feature-2");

        const section1Position = section1.getBoundingClientRect().top;
        const section2Position = section2.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        // section1 ekranda göründüğünde feature1 aktif olur, feature2 pasif olur
        if (section1Position < screenHeight / 2 && section2Position > screenHeight / 2) {
            feature1.classList.add("active");
            feature2.classList.remove("active");
        }
        // section2 ekranda göründüğünde feature2 aktif olur, feature1 pasif olur
        else if (section2Position < screenHeight / 2) {
            feature1.classList.remove("active");
            feature2.classList.add("active");
        }
    });
}


// Carousel tab active alanı
document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Tüm nav-item'lardan 'active' sınıfını kaldır
            navItems.forEach(function (nav) {
                nav.classList.remove('active');
            });

            // Tıklanan öğeye 'active' sınıfını ekle
            this.classList.add('active');
        });
    });
});

// Carousel alanı
document.addEventListener('DOMContentLoaded', function () {
    // Varsayılan olarak reklamlar carouselini başlat
    let reklamlarCarousel = new bootstrap.Carousel(document.getElementById('reklamlarCarousel'));
    reklamlarCarousel.cycle();
    
    // Tüm tab elementlerini dinle
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(function (tab) {
        tab.addEventListener('shown.bs.tab', function (event) {
            let carouselId = event.target.getAttribute('href').replace('#', '') + 'Carousel';
            let carouselElement = document.getElementById(carouselId);
            if (carouselElement) {
                let carousel = new bootstrap.Carousel(carouselElement);
                carousel.cycle();
            }
        });
    });
});

// Sigorta kategori kartları alanı
document.getElementById('show-more').addEventListener('click', function() {
    var moreCompanies = document.querySelectorAll('.row-companies-2');
    var showMoreButton = document.getElementById('show-more');
    var hideMoreButton = document.getElementById('hide-more');
    
    moreCompanies.forEach(function(row) {
        row.style.display = 'flex';
    });
    showMoreButton.style.display = 'none';
    hideMoreButton.style.display = 'inline-block';
});

document.getElementById('hide-more').addEventListener('click', function() {
    var moreCompanies = document.querySelectorAll('.row-companies-2');
    var showMoreButton = document.getElementById('show-more');
    var hideMoreButton = document.getElementById('hide-more');
    
    moreCompanies.forEach(function(row) {
        row.style.display = 'none';
    });
    showMoreButton.style.display = 'inline-block';
    hideMoreButton.style.display = 'none';
});

// FAQ Alanı

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Diğer açık olan tüm cevapları kapat
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('open');
                item.querySelector('.faq-answer').style.display = 'none';
            }
        });
        
        // Şu anki seçilen cevap aç/kapa
        faqItem.classList.toggle('open');
        const answer = faqItem.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});




