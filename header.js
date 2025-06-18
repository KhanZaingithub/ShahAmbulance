//Hide Loading Box (Preloader)
// function handlePreloader() {
//   if ($(".loader-wrap").length) {
//     $(".loader-wrap").delay(1000).fadeOut(500);
//   }
// }

// if ($(".preloader-close").length) {
//   $(".preloader-close").on("click", function () {
//     $(".loader-wrap").delay(200).fadeOut(500);
//   });
// }
const letters = document.querySelectorAll(
  ".handle-preloader .animation-preloader .txt-loading .letters-loading"
);
console.log(letters[0]);
letters.forEach((el, index) => {
  const delay = 0.2 * (index + 1); // 0.2s, 0.4s, ...
  el.style.setProperty("--delay", `${delay}s`);
  el.style.setProperty("animation-delay", `${delay}s`);
});
