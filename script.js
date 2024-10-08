document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainMenu = document.getElementById('mainMenu');

    menuToggle.addEventListener('click', function() {
        mainMenu.classList.toggle('hidden');
    });

    const slides = [
        { 
            title: 'আন্তর্জাতিক সাংস্কৃতিক দিবস ২০২৩', 
            subtitle: 'উপলক্ষে ৮-১৪ ডিসেম্বর', 
            content: 'সাংস্কৃতিক অভিযান',
            image: '/assets/img/b-1.jpg'
        },
        { 
            title: 'ইসলামী শিক্ষা সপ্তাহ', 
            subtitle: '১-৭ নভেম্বর', 
            content: 'জ্ঞান বিতরণ কর্মসূচি',
            image: '/assets/img/b-2.jpg'
        },
        { 
            title: 'সদস্য সম্মেলন ২০২৩', 
            subtitle: '২৫-২৭ ডিসেম্বর', 
            content: 'একত্রিত হওয়ার আহ্বান',
            image: '/assets/img/b-3.jpg'
        },
    ];

    const news = [
        { title: 'বাংলাদেশ ইসলামী ছাত্র শিবিরের ৫৪ তম প্রতিষ্ঠা বার্ষিকীতে সভাপতির বাণী', date: 'বুধবার, ২৭ সেপ্টেম্বর, ২০২৩' },
        { title: 'অর্থনৈতিক বিকাশ তথা বিশ্বের সর্বোচ্চ প্রবৃদ্ধির দেশের তালিকায় বাংলাদেশ', date: 'বুধবার, ২৭ সেপ্টেম্বর, ২০২৩' },
        { title: 'ইসলামী আন্দোলনের অগ্রগতি: একটি পর্যালোচনা', date: 'শুক্রবার, ২৯ সেপ্টেম্বর, ২০২৩' },
        { title: 'শিক্ষার্থীদের জন্য নতুন স্কলারশিপ প্রোগ্রাম ঘোষণা', date: 'শনিবার, ৩০ সেপ্টেম্বর, ২০২৩' },
    ];

    const photoGallery = [
        { image: '/assets/img/photo_gallery/Artboard 1-100.jpg', title: 'ছবি ১' },
        { image: '/assets/img/photo_gallery/Artboard 2-100.jpg', title: 'ছবি ২' },
        { image: '/assets/img/photo_gallery/Artboard 3-100.jpg', title: 'ছবি 3' },
        { image: '/assets/img/photo_gallery/Artboard 4-100.jpg', title: 'ছবি 4' },
        { image: '/assets/img/photo_gallery/Artboard 5-100.jpg', title: 'ছবি 5' },
        { image: '/assets/img/photo_gallery/Artboard 6-100.jpg', title: 'ছবি 6' },
        { image: '/assets/img/photo_gallery/Artboard 7-100.jpg', title: 'ছবি 7' },
        { image: '/assets/img/photo_gallery/Artboard 8-100.jpg', title: 'ছবি 8' },
        { image: '/assets/img/photo_gallery/Artboard 9-100.jpg', title: 'ছবি 9' },
        { image: '/assets/img/photo_gallery/Artboard 10-100.jpg', title: 'ছবি 10' },
        { image: '/assets/img/photo_gallery/Artboard 11-100.jpg', title: 'ছবি 11' },
        { image: '/assets/img/photo_gallery/Artboard 12-100.jpg', title: 'ছবি 12' },
        { image: '/assets/img/photo_gallery/Artboard 13-100.jpg', title: 'ছবি 13' },
        { image: '/assets/img/photo_gallery/Artboard 14-100.jpg', title: 'ছবি 14' },
        { image: '/assets/img/photo_gallery/Artboard 15-100.jpg', title: 'ছবি 15' },
        { image: '/assets/img/photo_gallery/Artboard 15-100.jpg', title: 'ছবি 16' },
        { image: '/assets/img/photo_gallery/Artboard 17-100.jpg', title: 'ছবি 17' },
        { image: '/assets/img/photo_gallery/Artboard 18-100.jpg', title: 'ছবি 18' },
        { image: '/assets/img/photo_gallery/Artboard 19-100.jpg', title: 'ছবি 19' },
        { image: '/assets/img/photo_gallery/Artboard 20-100.jpg', title: 'ছবি 20' },
    ];

    const videoGallery = [
        { id: '2gqsGP__zVE', title: 'তরুণ যুবক এসো শিবিরের প্রতিষ্ঠাবার্ষিকীর গান Tarun Jubak Eso Founding Anniversary Song' },
        { id: 'rLt6Imqc88Q', title: 'ভিডিও ২' },
        { id: 'RkpzBTB4e_8', title: 'ভিডিও ৩' },
        { id: 'el9k-qkRc7k', title: 'ভিডিও ৩' },
    ];

    // Initialize slider
    const slider = document.getElementById('slider');
    const sliderDots = document.getElementById('sliderDots');
    let currentSlide = 0;

    function renderSlider() {
        slider.innerHTML = '';
        sliderDots.innerHTML = '';
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`;
            slideElement.style.backgroundImage = `url(${slide.image})`;
            slideElement.style.backgroundSize = 'cover';
            slideElement.style.backgroundPosition = 'center';
            slideElement.innerHTML = `
                <div class="bg-black bg-opacity-50 p-4 rounded">
                    <h2 class="text-2xl font-bold text-white">${slide.title}</h2>
                    <p class="text-white">${slide.subtitle}</p>
                    <p class="text-3xl font-bold text-green-300 mt-2">${slide.content}</p>
                </div>
            `;
            slider.appendChild(slideElement);

            const dot = document.createElement('button');
            dot.className = `w-3 h-3 rounded-full mx-1 transition-colors ${index === currentSlide ? 'bg-green-500' : 'bg-gray-300'}`;
            dot.addEventListener('click', () => {
                currentSlide = index;
                renderSlider();
            });
            sliderDots.appendChild(dot);
        });
    }

    renderSlider();

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        renderSlider();
    }, 5000);

    // Render news
    const newsList = document.getElementById('newsList');
    news.forEach(item => {
        const newsItem = document.createElement('div');
        newsItem.className = 'mb-6 pb-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors rounded p-2';
        newsItem.innerHTML = `
            <h3 class="font-semibold text-lg text-gray-700 hover:text-green-600 transition-colors">${item.title}</h3>
            <p class="text-sm text-gray-500 mt-2">${item.date}</p>
        `;
        newsList.appendChild(newsItem);
    });

    // Initialize photo gallery
    const photoGalleryElement = document.getElementById('photoGallery');
    let currentPhotoSlide = 0;

    function renderPhotoGallery() {
        photoGalleryElement.innerHTML = '';
        for (let i = 0; i < Math.ceil(photoGallery.length / 4); i++) {
            const slideElement = document.createElement('div');
            slideElement.className = 'w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4';
            photoGallery.slice(i * 4, i * 4 + 4).forEach(photo => {
                const photoElement = document.createElement('div');
                photoElement.className = 'bg-gray-200 rounded-lg overflow-hidden';
                photoElement.innerHTML = `
                    <img src="${photo.image}" alt="${photo.title}" class="object-cover w-full h-full">
                    <p class="mt-2 text-center text-gray-700">${photo.title}</p>
                `;
                slideElement.appendChild(photoElement);
            });
            photoGalleryElement.appendChild(slideElement);
        }
        photoGalleryElement.style.transform = `translateX(-${currentPhotoSlide * 100}%)`;
    }

    renderPhotoGallery();

    document.getElementById('prevPhoto').addEventListener('click', () => {
        currentPhotoSlide = (currentPhotoSlide - 1 + Math.ceil(photoGallery.length / 4)) % Math.ceil(photoGallery.length / 4);
        renderPhotoGallery();
    });

    document.getElementById('nextPhoto').addEventListener('click', () => {
        currentPhotoSlide = (currentPhotoSlide + 1) % Math.ceil(photoGallery.length / 4);
        renderPhotoGallery();
    });

    // Initialize video gallery
    const videoGalleryElement = document.getElementById('videoGallery');
    let currentVideoSlide = 0;

    function renderVideoGallery() {
        videoGalleryElement.innerHTML = '';
        for (let i = 0; i < Math.ceil(videoGallery.length / 4); i++) {
            const slideElement = document.createElement('div');
            slideElement.className = 'w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-4';
            videoGallery.slice(i * 4, i * 4 + 4).forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.className = 'bg-gray-200 overflow-hidden relative';
                videoElement.innerHTML = `
                    <iframe
                        width="100%"
                        height="300"
                        src="https://www.youtube.com/embed/${video.id}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                `;
                slideElement.appendChild(videoElement);
            });
            videoGalleryElement.appendChild(slideElement);
        }
        videoGalleryElement.style.transform = `translateX(-${currentVideoSlide * 100}%)`;
    }

    renderVideoGallery();

    document.getElementById('prevVideo').addEventListener('click', () => {
        currentVideoSlide = (currentVideoSlide - 1 + Math.ceil(videoGallery.length / 4)) % Math.ceil(videoGallery.length / 4);
        renderVideoGallery();
    });

    document.getElementById('nextVideo').addEventListener('click', () => {
        currentVideoSlide = (currentVideoSlide + 1) % Math.ceil(videoGallery.length / 4);
        renderVideoGallery();
    });
});





// Banner Slider
const slider = document.getElementById('slider-container');
const slides = slider.children;
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
let currentSlide = 0;
let autoplayInterval;
let isPlaying = true;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function toggleAutoplay() {
    if (isPlaying) {
        clearInterval(autoplayInterval);
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    } else {
        autoplayInterval = setInterval(nextSlide, 5000);
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    }
    isPlaying = !isPlaying;
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
playPauseBtn.addEventListener('click', toggleAutoplay);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

autoplayInterval = setInterval(nextSlide, 9000);