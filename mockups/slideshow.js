// GAF Background Slideshow — 20 photos, crossfade, photo credit sync
(function () {
    const slides = [
        { image: '../assets/images/torrey-pines-coast-group.jpg',  credit: 'Marcus Chen' },
        { image: '../assets/images/green-hills-hiking.jpg',        credit: 'Ryan Torres' },
        { image: '../assets/images/whale-watching.jpg',            credit: 'David Nakamura' },
        { image: '../assets/images/mazatlan-rooftop.jpg',          credit: 'James O\'Brien' },
        { image: '../assets/images/boulder-hike-group.jpg',        credit: 'Carlos Mendez' },
        { image: '../assets/images/rock-arch-ocean.jpg',           credit: 'Kevin Park' },
        { image: '../assets/images/desert-group-selfie.jpg',       credit: 'Sean Williams' },
        { image: '../assets/images/wetlands-overlook.jpg',         credit: 'Brandon Fischer' },
        { image: '../assets/images/forest-creek-group.jpg',        credit: 'Miguel Santos' },
        { image: '../assets/images/snow-mountains-panorama.jpg',   credit: 'Derek Patel' },
        { image: '../assets/images/borrego-badlands.jpg',          credit: 'Tyler Morrison' },
        { image: '../assets/images/slot-canyon-hike.jpg',          credit: 'Jason Lee' },
        { image: '../assets/images/rock-climbing-sierra.jpg',      credit: 'Eric Hernandez' },
        { image: '../assets/images/torrey-pines-photo.jpg',        credit: 'Trevor Adams' },
        { image: '../assets/images/slot-canyon-group.jpg',         credit: 'Andre Washington' },
        { image: '../assets/images/concordia-mexico.jpg',          credit: 'Patrick Sullivan' },
        { image: '../assets/images/mexico-boat-beach.jpg',         credit: 'Victor Reyes' },
        { image: '../assets/images/borrego-dragon-sculpture.jpg',  credit: 'Chris Donovan' },
        { image: '../assets/images/cooking-night.jpg',             credit: 'Matt Kowalski' },
        { image: '../assets/images/baja-bettys-dinner.jpg',        credit: 'Dylan Rivera' }
    ];

    const SLIDE_DURATION = 7; // seconds per slide
    const totalDuration = slides.length * SLIDE_DURATION;

    // Build slideshow DOM
    const container = document.querySelector('.bg-slideshow');
    if (!container) return;
    container.innerHTML = '';
    slides.forEach(function (s, i) {
        var div = document.createElement('div');
        div.className = 'slide';
        div.style.backgroundImage = "url('" + s.image + "')";
        div.style.animationDuration = totalDuration + 's';
        div.style.animationDelay = (i * SLIDE_DURATION) + 's';
        container.appendChild(div);
    });

    // Build photo credit box
    var creditBox = document.createElement('div');
    creditBox.className = 'photo-credit-box';
    creditBox.innerHTML = '<div class="credit-label">Photo</div><div class="credit-name"></div>';
    document.body.appendChild(creditBox);
    var creditName = creditBox.querySelector('.credit-name');

    // Cycle credit text in sync with slides
    var currentSlide = 0;
    function updateCredit() {
        creditName.textContent = slides[currentSlide].credit;
    }
    updateCredit();
    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCredit();
    }, SLIDE_DURATION * 1000);

    // Scroll: nav darken, footer fade out, credit box fade in
    var nav = document.querySelector('nav');
    var footer = document.querySelector('footer');
    var main = document.querySelector('main');

    function updateOpacity() {
        var vh = window.innerHeight;

        // Nav darken on scroll
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);

        if (!footer || !main) return;

        // Footer: fade from viewport 33% to 10%
        var footerTop = footer.getBoundingClientRect().top;
        var fStart = vh * 0.33;
        var fEnd = vh * 0.1;
        var fOp = footerTop >= fStart ? 1 : footerTop <= fEnd ? 0 : (footerTop - fEnd) / (fStart - fEnd);
        footer.style.opacity = fOp;

        // Nav: fade when main bottom reaches 80% down to 20%
        var mainBottom = main.getBoundingClientRect().bottom;
        var nStart = vh * 0.8;
        var nEnd = vh * 0.2;
        var nOp = mainBottom >= nStart ? 1 : mainBottom <= nEnd ? 0 : (mainBottom - nEnd) / (nStart - nEnd);
        if (nav) nav.style.opacity = nOp;

        // Photo credit: inverse of footer opacity
        creditBox.style.opacity = 1 - fOp;
    }

    updateOpacity();
    window.addEventListener('scroll', updateOpacity);
})();
