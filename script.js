const navContent = document.querySelector('.nav-content');
const hamburger = document.querySelector('#hamburger');
// Toggle
hamburger.onclick = () => {
  navContent.classList.toggle('active');
};

// wherever click
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navContent.contains(e.target)) {
    navContent.classList.remove('active');
  }
});
