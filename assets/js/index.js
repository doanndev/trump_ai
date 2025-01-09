// Lấy các phần tử
const menuToggle = document.getElementById('menu-toggle');
const closeBtnNavbar = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlayNavbar = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');


menuToggle.addEventListener('click', () => {
    sidebar.style.bottom = '-40%';
    overlay.style.display = 'block';
});

closeBtnNavbar.addEventListener('click', () => {
    sidebar.style.bottom = '-150%';
    overlayNavbar.style.display = 'none';
});

overlayNavbar.addEventListener('click', () => {
    sidebar.style.bottom = '-150%';
    overlayNavbar.style.display = 'none';
});


sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});



function openSocial(url) {
    window.open(url, '_blank');
}

const telegramHref = document.getElementById('telegram-href');
const twitterHref = document.getElementById('x-href');

telegramHref.addEventListener('click', () => {
    openSocial('https://t.me/');
});

twitterHref.addEventListener('click', () => {
    openSocial('https://twitter.com');
});

const goToTopButton = document.getElementById("goToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { 
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
});

goToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});