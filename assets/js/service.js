//Hide Loading Box (Preloader)
function handlePreloader() {
  if ($(".loader-wrap").length) {
    $(".loader-wrap").delay(500).fadeOut(500);
  }
}
window.onload = function () {
  handlePreloader();
};
const letters = document.querySelectorAll(
  ".handle-preloader .animation-preloader .txt-loading .letters-loading"
);
letters.forEach((el, index) => {
  const delay = 0.2 * (index + 1); // 0.2s, 0.4s, ...
  el.style.setProperty("--delay", `${delay}s`);
  el.style.setProperty("animation-delay", `${delay}s`);
});
