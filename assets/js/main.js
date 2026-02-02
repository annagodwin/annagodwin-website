// Main JavaScript for Anna Godwin's website

// Navigation scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    nav.classList.add('nav-scrolled');
  } else {
    nav.classList.remove('nav-scrolled');
  }

  lastScroll = currentScroll;
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxText = document.getElementById('lightbox-text');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

let galleryItems = [];
let currentIndex = 0;

function initGallery() {
  galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });
}

function openLightbox(index) {
  if (!lightbox) return;

  currentIndex = index;
  updateLightboxContent();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightboxContent() {
  const item = galleryItems[currentIndex];
  if (!item) return;

  const img = item.querySelector('img');
  const title = item.dataset.title || '';
  const description = item.dataset.description || '';

  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightboxTitle.textContent = title;
  lightboxText.textContent = description;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateLightboxContent();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateLightboxContent();
}

// Event listeners for lightbox
if (lightbox) {
  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', prevImage);
  lightboxNext?.addEventListener('click', nextImage);

  // Close on backdrop click
  lightbox.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      case 'ArrowRight':
        nextImage();
        break;
    }
  });
}

// Initialize gallery on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.gallery-item')) {
    initGallery();
  }
});

// Mobile menu toggle (if needed in future)
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}
