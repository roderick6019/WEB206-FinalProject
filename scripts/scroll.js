window.onscroll = function() {
    checkScroll()
};

var navbar = document.getElementsByClassName("nav");
var sticky = navbar.offsetTop;

function checkScroll() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } 
    else {
        navbar.classList.remove("sticky");
    }
}