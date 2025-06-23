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
jQuery(window).on("scroll", function () {
  (function ($) {
    headerStyle();
  })(jQuery);
});
