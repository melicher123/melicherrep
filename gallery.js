const imagePaths = [
    'gallery/lawn1.jpg',
    'gallery/lawn7.jpg',
    'gallery/lawn10.webp',
    'gallery/lawn9.webp',
    'gallery/lawn4.jpg',
    'gallery/lawn6.webp',
    'gallery/lawn5.jpg',
    'gallery/lawn8.jpg',
    'gallery/lawn2.jpeg',
];

const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showNextImages() {
    for (let i = 0; i < galleryItems.length; i++) {
        let nextIndex = (currentIndex + i) % imagePaths.length;
        galleryItems[i].src = imagePaths[nextIndex];
    }
    currentIndex = (currentIndex + 1) % imagePaths.length;
}

setInterval(showNextImages, 3000);

showNextImages();
