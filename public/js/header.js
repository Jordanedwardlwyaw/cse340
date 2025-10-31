// Simple sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if(window.scrollY > 50) {
        header.style.backgroundColor = '#111';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = '#222';
        header.style.boxShadow = 'none';
    }
});
