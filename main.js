const toggleBtn = document.querySelector('.toggle')
const navbarLinks = document.querySelector('.navbar-links')

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})