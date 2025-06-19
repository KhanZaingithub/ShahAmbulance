//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($(".loader-wrap").length) {
    $(".loader-wrap").delay(500).fadeOut(500);
  }
}
const letters = document.querySelectorAll(
  ".handle-preloader .animation-preloader .txt-loading .letters-loading"
);
console.log(letters[0]);
letters.forEach((el, index) => {
  const delay = 0.2 * (index + 1); // 0.2s, 0.4s, ...
  el.style.setProperty("--delay", `${delay}s`);
  el.style.setProperty("animation-delay", `${delay}s`);
});

// Header fixed JS and Scroll to Top
function headerStyle() {
  if ($(".main-header").length) {
    var windowpos = $(window).scrollTop();
    var siteHeader = $(".main-header");
    var scrollLink = $(".scroll-top");
    if (windowpos >= 200) {
      siteHeader.addClass("fixed-header");
      scrollLink.fadeIn(300);
    } else {
      siteHeader.removeClass("fixed-header");
      scrollLink.fadeOut(300);
    }
  }
}
headerStyle();
