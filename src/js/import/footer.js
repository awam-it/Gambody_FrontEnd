function footerLinks() {
    var element = document.getElementById("j_footer-links-block");
    element.classList.toggle("footer__quicklinks-block-active");
    var element = document.getElementById("j_footer-links");
    element.classList.toggle("footer__quicklinks-active");
}
document.getElementById("j_footer-links").onclick = function() {footerLinks()};
