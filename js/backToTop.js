function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


window.onscroll = function () {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.documentElement.scrollTop > 1000) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};
