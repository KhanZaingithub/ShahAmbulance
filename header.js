(function ($) {
  /*=============================================
    =       Menu sticky & Scroll to top          =
    =============================================*/
  var $body = $("body");

  $(window).on("scroll", function () {
    if ($(".header-area").length) {
      var windowpos = $(window).scrollTop();
      var siteHeader = $(".header-area");
      var scrollLink = $(".scroll-to-top");

      if (windowpos >= 200) {
        siteHeader.addClass("fixed-header");
        scrollLink.fadeIn(300);
      } else {
        siteHeader.removeClass("fixed-header");
        scrollLink.fadeOut(300);
      }
    }
  });

  /*----------  Scroll to top  ----------*/
  function scrollToTop() {
    var $scrollUp = $("#scroll-top"),
      $lastScrollTop = 0,
      $window = $(window);

    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 200) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });

    $scrollUp.on("click", function (evt) {
      $("html, body").animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*=========================================
    =            One page nav active          =
    ===========================================*/

  // var top_offset = $('.navigation-menu--onepage').height() - 60;
  // $('.navigation-menu--onepage ul').onePageNav({
  //     currentClass: 'active',
  //     scrollOffset: top_offset,
  // });

  // var top_offset_mobile = $('.header-area').height();
  // $('.offcanvas-navigation--onepage ul').onePageNav({
  //     currentClass: 'active',
  //     scrollOffset: top_offset_mobile,
  // });

  /*==========================================
    =            mobile menu active            =
    ============================================*/

  $(".mobile-menu-trigger").each(function (index) {
    $(this).on("click", function () {
      $(".mobile-menu-overlay").eq(index).addClass("active");
      $("body").addClass("no-overflow");
    });
  });

  $(".mobile-menu-close-trigger").each(function (index) {
    $(this).on("click", function () {
      $(".mobile-menu-overlay").eq(index).removeClass("active");
      $("body").removeClass("no-overflow");
    });
  });

  $(".offcanvas-navigation--onepage ul li a").on("click", function () {
    $("#mobile-menu-overlay").removeClass("active");
    $body.removeClass("no-overflow");
  });

  /*Close When Click Outside*/
  // $body.on('click', function(e){
  //     var $target = e.target;
  //     if (!$($target).is('.mobile-menu-overlay__inner') && !$($target).parents().is('.mobile-menu-overlay__inner') && !$($target).is('#mobile-menu-trigger') && !$($target).is('#mobile-menu-trigger i')){
  //         $("#mobile-menu-overlay").removeClass("active");
  //         $body.removeClass('no-overflow');
  //     }
  //     if (!$($target).is('.search-overlay__inner') && !$($target).parents().is('.search-overlay__inner') && !$($target).is('#search-overlay-trigger') && !$($target).is('#search-overlay-trigger i')){
  //         $("#search-overlay").removeClass("active");
  //         $body.removeClass('no-overflow');
  //     }
  // });

  /*=============================================
    =            offcanvas mobile menu            =
    =============================================*/
  var $offCanvasNav = $(".offcanvas-navigation"),
    $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

  /*Add Toggle Button With Off Canvas Sub Menu*/
  $offCanvasNavSubMenu
    .parent()
    .prepend('<span class="menu-expand"><i></i></span>');

  /*Close Off Canvas Sub Menu*/
  $offCanvasNavSubMenu.slideUp();

  /*Category Sub Menu Toggle*/
  $offCanvasNav.on("click", "li a, li .menu-expand", function (e) {
    var $this = $(this);
    if (
      $this
        .parent()
        .attr("class")
        .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
      ($this.attr("href") === "#" || $this.hasClass("menu-expand"))
    ) {
      e.preventDefault();
      if ($this.siblings("ul:visible").length) {
        $this.parent("li").removeClass("active");
        $this.siblings("ul").slideUp();
      } else {
        $this.parent("li").addClass("active");
        $this
          .closest("li")
          .siblings("li")
          .removeClass("active")
          .find("li")
          .removeClass("active");
        $this.closest("li").siblings("li").find("ul:visible").slideUp();
        $this.siblings("ul").slideDown();
      }
    }
  });

  const currentPath = window.location.pathname.split("/").pop(); // get filename only (e.g., 'about-us.html')
  const menuItems = document.querySelectorAll("nav a");
  console.log(menuItems);

  menuItems.forEach((item) => {
    const href = item.getAttribute("href");

    // Skip empty or hash-only links
    if (!href || href === "#") return;

    const itemPath = href.split("/").pop(); // get just the file name from href

    // Match current file or treat as prefix match (e.g., subpages)
    if (
      currentPath === itemPath ||
      currentPath.startsWith(itemPath + "?") ||
      currentPath.startsWith(itemPath + "#")
    ) {
      item.classList.add("current");

      // Highlight parent <li>
      let parentLi = item.closest("li");
      while (parentLi) {
        parentLi.classList.add("current");
        parentLi = parentLi.parentElement.closest("li");
      }
    } else {
      item.classList.remove("current");
      const parentLi = item.closest("li");
      if (parentLi) parentLi.classList.remove("current");
    }
  });
})(jQuery);
