// Select the "Show More" button, hidden products, and the collection section
const showMoreBtn = document.querySelector('.show-more-btn');
const hiddenItems = document.querySelectorAll('.hidden');
const collectionSection = document.querySelector('.collection-section');
let isShowingMore = false; // Track whether we are showing more or less

// Smooth scroll function
function smoothScrollTo(element, duration) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animationScroll(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  }

  // Ease function for smooth scroll (ease-in-out)
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animationScroll);
}

// Event listener for the "Show More" button
showMoreBtn.addEventListener('click', () => {
  // Smooth scroll to the collection section
  smoothScrollTo(collectionSection, 1000); // Scroll duration of 1 second

  // After scroll completes, toggle the hidden items
  setTimeout(() => {
    hiddenItems.forEach(item => {
      if (isShowingMore) {
        item.classList.add('hidden'); // Add the "hidden" class to hide items
      } else {
        item.classList.remove('hidden'); // Remove the "hidden" class to show items
      }
    });

    // Update the button text accordingly
    showMoreBtn.textContent = isShowingMore ? 'Pokaż więcej' : 'Pokaż mniej'; // Switch text

    // Toggle the flag
    isShowingMore = !isShowingMore;
  }, 1000); // Delay toggle to sync with scrolling
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});

// Add this to your existing JavaScript
window.addEventListener('scroll', function() {
  var backToTop = document.getElementById('back-to-top');
  if (window.pageYOffset > 100) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});