// GAF Background Slideshow — 20 photos, crossfade, adventure + photo credit sync
(function () {
    const slides = [
        { image: '../assets/images/green-hills-hiking.jpg',        adventure: 'Green Valley Trail Run',         name: 'Ryan T.',    profile: 'profile-ryan.html' },
        { image: '../assets/images/torrey-pines-coast-group.jpg',  adventure: 'Torrey Pines Coastal Hike',     name: 'Alex M.',    profile: 'profile-alex.html' },
        { image: '../assets/images/whale-watching.jpg',            adventure: 'Whale Watching, La Paz',         name: 'David R.',   profile: 'profile-david.html' },
        { image: '../assets/images/mazatlan-rooftop.jpg',          adventure: 'Mazatlan Rooftop Social',        name: 'Miguel S.',  profile: 'profile-miguel.html' },
        { image: '../assets/images/boulder-hike-group.jpg',        adventure: 'Boulder Field Summit Hike',      name: 'Carlos M.',  profile: 'profile-carlos.html' },
        { image: '../assets/images/rock-arch-ocean.jpg',           adventure: 'Sea Cave Kayak Adventure',       name: 'Kevin P.',   profile: 'profile-kevin.html' },
        { image: '../assets/images/desert-group-selfie.jpg',       adventure: 'Borrego Springs Desert Hike',    name: 'Mark S.',    profile: 'profile-mark.html' },
        { image: '../assets/images/wetlands-overlook.jpg',         adventure: 'Wetlands Nature Walk',           name: 'Chris T.',   profile: 'profile-chris.html' },
        { image: '../assets/images/forest-creek-group.jpg',        adventure: 'Cedar Creek Falls Hike',         name: 'Jason L.',   profile: 'profile-jason.html' },
        { image: '../assets/images/snow-mountains-panorama.jpg',   adventure: 'Mountain Snow Adventure',        name: 'Derek P.',   profile: 'profile-derek.html' },
        { image: '../assets/images/borrego-badlands.jpg',          adventure: 'Badlands Sunrise Hike',          name: 'Tyler M.',   profile: 'profile-tyler.html' },
        { image: '../assets/images/slot-canyon-hike.jpg',          adventure: 'Slot Canyon Exploration',        name: 'Jason L.',   profile: 'profile-jason.html' },
        { image: '../assets/images/rock-climbing-sierra.jpg',      adventure: 'Sierra Rock Climbing',           name: 'Eric H.',    profile: 'profile-eric.html' },
        { image: '../assets/images/torrey-pines-photo.jpg',        adventure: 'Torrey Pines Sunset',            name: 'Alex M.',    profile: 'profile-alex.html' },
        { image: '../assets/images/slot-canyon-group.jpg',         adventure: 'Antelope Canyon Day Trip',       name: 'Jeffrey L.', profile: 'profile-jeffrey.html' },
        { image: '../assets/images/concordia-mexico.jpg',          adventure: 'Concordia Village Tour',         name: 'Miguel S.',  profile: 'profile-miguel.html' },
        { image: '../assets/images/mexico-boat-beach.jpg',         adventure: 'Mexico Beach Boat Day',          name: 'Carlos M.',  profile: 'profile-carlos.html' },
        { image: '../assets/images/borrego-dragon-sculpture.jpg',  adventure: 'Borrego Sculpture Garden',       name: 'Mark S.',    profile: 'profile-mark.html' },
        { image: '../assets/images/cooking-night.jpg',             adventure: 'Cooking Night Social',           name: 'Carlos M.',  profile: 'profile-carlos.html' },
        { image: '../assets/images/baja-bettys-dinner.jpg',        adventure: 'Boys Night Out',                 name: 'David R.',   profile: 'profile-david.html' }
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
    creditBox.innerHTML =
        '<div class="credit-row">' +
            '<span class="credit-label">Photo Credit:</span>' +
            '<a class="credit-name" href="#"></a>' +
        '</div>' +
        '<div class="credit-row">' +
            '<span class="credit-label">Adventure:</span>' +
            '<span class="credit-adventure"></span>' +
        '</div>';
    document.body.appendChild(creditBox);
    var creditName = creditBox.querySelector('.credit-name');
    var creditAdventure = creditBox.querySelector('.credit-adventure');

    // Cycle credit text in sync with slides
    var currentSlide = 0;
    function updateCredit() {
        var s = slides[currentSlide];
        creditName.textContent = s.name;
        creditName.href = s.profile;
        creditAdventure.textContent = s.adventure;
    }
    updateCredit();
    setInterval(function () {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCredit();
    }, SLIDE_DURATION * 1000);

    // Build watermark branding in bg-reveal zone
    var reveal = document.querySelector('.bg-reveal');
    if (reveal) {
        reveal.innerHTML =
            '<div class="reveal-brand">' +
                '<img src="../assets/gaf-logo.webp" alt="" class="reveal-logo">' +
                '<span class="reveal-text">Gay Adventure Friends</span>' +
            '</div>';
    }

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
