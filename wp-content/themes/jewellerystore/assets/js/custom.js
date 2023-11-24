(function ($) {
  /* --------- Wrap block ---------- */

  $(window).on("load resize ready", function () { });

  /*document ready*/
  $(document).ready(function () {
    const header = document.querySelector(".main__header");
    const hamburger = document.querySelector(".hamburger");
    const mainNav = document.querySelector(".main__nav");
    const main = document.querySelector(".main");
    const overlay = document.querySelector(".nav-overlay");
    const body = document.body;

    window.addEventListener("scroll", function (event) {
      if (window.scrollY > 10) {
        header.classList.add("sticky");

        main.classList.add("sticky");
      } else {
        header.classList.remove("sticky");

        main.classList.remove("sticky");
      }
    });
    hamburger.addEventListener("click", function (e) {
      header.classList.toggle("show");
      hamburger.classList.toggle("show");
      mainNav.classList.toggle("show");
      $(".mega__menu").removeClass("active");
      $(".sub__menu__inner").removeClass("active");
      $(".sub__menu").removeClass("active");
    });
    overlay.addEventListener("click", function (e) {
      hamburger.classList.remove("show");
      mainNav.classList.remove("show");
      $(".mega__menu").removeClass("active");
      header.classList.remove("show");
      $(".sub__menu__inner").removeClass("active");
      $(".sub__menu").removeClass("active");
    });

    $(".menu-item-has-children  > a").on("click", function (e) {
      e.preventDefault();
      $(this).parents(".menu-item-has-children").toggleClass("active__link");
    });

    $(document).mouseup(function (e) {
      e.preventDefault();
      var div = $(".sub__menu, .menu-item-has-children.active__link  > a");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".menu-item-has-children").removeClass("active__link");
      }
    });

    $(".main__header .main__menu > li > .sub__menu").each(function () {
      $(this).prepend(`<div class="sub__menu__back back">Back</div>`);
    });

    $(".main__header .main__menu > li > .sub__menu .sub__menu").each(
      function () {
        $(this).prepend(`<div class="sub__menu__back2 back">Back</div>`);
      }
    );

    $(".main__header .main__menu > li > .sub__menu .hot_active > a").each(
      function () {
        $(this).append(`<span class="menu__label menu__label__hot">Hot</span>`);
      }
    );

    $(".main__header .main__menu > li > .sub__menu .project_active > a").each(
      function () {
        $(this).append(
          `<span class="menu__label menu__label__projects">Projects</span>`
        );
      }
    );

    $(".main__header .main__menu > li").each(function () {
      if (!$(this).children(".sub__menu").length > 0) {
        $(this).addClass("sub__menu__empty");
      }
    });

    $(".menu-item-has-children > .menu__arrow__lvl0").click(function (e) {
      e.preventDefault();
      $(this)
        .parents(".menu-item-has-children")
        .find(" > .sub__menu")
        .addClass("active");
    });

    $(".sub__menu__back").click(function (e) {
      e.preventDefault();
      $(this)
        .parents(".menu-item-has-children")
        .find(" > .sub__menu")
        .removeClass("active");
    });

    $(".menu__arrow__lvl1").click(function (e) {
      e.preventDefault();
      $(this).parents(".menu-item").find(" > .sub__menu").addClass("active2");
    });

    $(".sub__menu__back2").click(function (e) {
      e.preventDefault();
      $(this)
        .parents(".menu-item")
        .find(" > .sub__menu")
        .removeClass("active2");
    });

    /* -------- quantity ------------- */

    $(".quantity_inner .bt_minus").click(function () {
      let $input = $(this).parent().find(".quantity");
      let count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
    });

    $(".quantity_inner .bt_plus").click(function () {
      let $input = $(this).parent().find(".quantity");
      let count = parseInt($input.val()) + 1;
      count =
        count > parseInt($input.data("max-count"))
          ? parseInt($input.data("max-count"))
          : count;
      $input.val(parseInt(count));
    });

    $(".quantity_inner .quantity").bind(
      "change keyup input click",
      function () {
        if (this.value.match(/[^0-9]/g)) {
          this.value = this.value.replace(/[^0-9]/g, "");
        }
        if (this.value == "") {
          this.value = 1;
        }
        if (this.value > parseInt($(this).data("max-count"))) {
          this.value = parseInt($(this).data("max-count"));
        }
      }
    );

    function comes(el) {
      if (el.classList.contains("true")) {
        el.classList.remove("true");
      } else {
        el.classList.add("true");
      }
    }

    /* ---------- modal ---------- */

    const anchors = document.querySelectorAll(".modal__open");
    const popupLinks = document.querySelectorAll(".modal__window");
    if (popupLinks.length > 0) {
      for (let anchor of anchors) {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          $(".modal__window").stop().removeClass("modal-show");
          const blockID = anchor.getAttribute("href");
          $(blockID).stop().addClass("modal-show");
          if (blockID === "#search__modal") {
            $(".main__header").stop().addClass("search-show");
          }
          if (blockID === "#shopping__cart") {
            $(".cart__btn").stop().addClass("cart__active");
          }
        });
      }

      $(".modal__window_close, .modal__window__overlay").on(
        "click",
        function () {
          $(".modal__window").stop().removeClass("modal-show");
          $(".main__header").stop().removeClass("search-show");
          $(".cart__btn").stop().removeClass("cart__active");
        }
      );
    }

    /* ---- player ----- */

    const player = new Plyr("video");

    // Expose player so it can be used from the console
    window.player = player;

    /* ---------- global search ---------- */

    $(".search__results_box form input").on("input", function () {
      if ($(this).val().length > 0) {
        $(".global__search_form").stop().addClass("not-empty");
        let form = document.getElementById("form");
        let button = document.getElementById("reset__btn");
        button.addEventListener("click", function () {
          form.reset();
          $(".global__search_form").stop().removeClass("not-empty");
        });
      } else {
        $(".global__search_form").stop().removeClass("not-empty");
      }
    });
    /* --------- search ajax------------ */
    var searchInput = $("#search");
    var form = $("#form");
    var resetBtn = $("#reset__btn");
    var resultsBox = $(".search__results_box_inner_bottom");

    searchInput.on("keyup", function () {
      var search = searchInput.val();

      $.ajax({
        type: "GET",
        url: true_obj.ajax_url,
        data: {
          action: "my_search",
          search: search,
        },
        success: function (response) {
          resultsBox.html(response);
        },
      });
    });

    resetBtn.on("click", function () {
      searchInput.val("");
      resultsBox.html("");
    });

    /* ------  cart ---------- */

    $(".add__cart").on("click", function (e) {
      e.preventDefault();
      var ajaxAddToCartButton = $(this)
        .closest(".product__item")
        .find(".ajax_add_to_cart");
      ajaxAddToCartButton.click();
    });

    $(".add_to_cart_button").on("click", function (e) {
      e.preventDefault();

      var product_id = $(this).data("product_id");
      var quantity = 1;

      $.ajax({
        type: "POST",
        url: wc_add_to_cart_params.ajax_url,
        data: {
          action: "update_cart_quantity",
          product_id: product_id,
          quantity: quantity,
        },
        success: function (response) {
          var productItem = $(
            '.add_to_cart_button[data-product_id="' + product_id + '"]'
          ).closest(".product__item");
          productItem.find(".qty_cart").html(response.cart_quantity);
          $(".qty_cart").html(response.cart_quantity);
          $(".price__total").html(response.cart_total);
          $(".subtotal__price").html(response.cart_total);
          $(".modal__window_content__footer").css("display", "block");
        },
      });
    });
    $(document).on(
      "added_to_cart",
      function (event, fragments, cart_hash, button) {
        $.ajax({
          type: "POST",
          url: wc_add_to_cart_params.ajax_url,
          data: {
            action: "update_mini_cart",
          },
          success: function (response) {
            var parsedResponse = JSON.parse(response);
            $("#shopping__cart .modal__window__wrapper").html(
              parsedResponse.fragments[".modal__window_content"]
            );
            $(".modal__window_content__footer").css("display", "block");
          },
        });
      }
    );

    /* --------- product__remove ------------ */

    $(document).on("click", ".product__remove", function (e) {
      e.preventDefault();
      var productId = $(this).data("product-id");
      $.ajax({
        type: "POST",
        url: wc_add_to_cart_params.ajax_url,
        data: {
          action: "remove_product_from_cart",
          product_id: productId,
        },
        success: function (response) {
          var data = JSON.parse(response);
          var cart_quantity = data.cart_quantity;
          var cart_total = data.cart_total;
          $("#shopping__cart .modal__window__wrapper").html(
            data.fragments[".modal__window_content"]
          );
          $(".qty_cart").html(cart_quantity);
          $(".price__total").html(cart_total);


          if ($(".modal__window_content").hasClass('empty__cart')) {
            $(".modal__window_content__footer").css("display", "none");
          } else {
            $(".modal__window_content__footer").css("display", "block");
          }
        },
      });
    });


    /* --------- product Update ------------ */

    $(document).on("click change", ".quantity__btn", function (e) {
      e.preventDefault();

      var button = $(this);
      var productRow = button.closest(".product__item");
      var productId = productRow.find(".product__remove").data("product-id");
      var quantityInput = productRow.find(".product__count");
      var newQuantity = parseInt(quantityInput.val());
      var action = button.hasClass("bt_minus") ? "minus" : "plus";

      // Call the function to update the cart item quantity
      updateCartItemQuantity(productId, newQuantity, action);
    });

    // Add a change event listener for the quantity input field
    $(document).on("change", ".product__count", function () {
      var input = $(this);
      var productId = input.data("product-id");
      var newQuantity = parseInt(input.val());

      // Call the function to update the cart item quantity
      updateCartItemQuantity(productId, newQuantity, "change");
    });

    function updateCartItemQuantity(productId, newQuantity, action) {
      $.ajax({
        type: "POST",
        url: wc_add_to_cart_params.ajax_url,
        data: {
          action: "update_cart_item_quantity",
          product_id: productId,
          quantity: newQuantity,
          update_action: action,
        },
        success: function (response) {
          var data = JSON.parse(response);
          var cart_quantity = data.cart_quantity;
          var cart_total = data.cart_total;

          $("#shopping__cart .modal__window__wrapper").html(
            data.fragments[".modal__window_content"]
          );
          $(".qty_cart").html(cart_quantity);
          $(".price__total").html(cart_total);
          if ($(".modal__window_content").hasClass('empty__cart')) {
            $(".modal__window_content__footer").css("display", "none");
          } else {
            $(".modal__window_content__footer").css("display", "block");
          }
        },
      });
    }

    /* --------- swiper ------------ */

    $(".products__slider").each(function () {
      $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        arrows: true,
        fade: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 600,
            settings: {
              dots: false,
              slidesToShow: 1,
            },
          },
        ],
      });
    });
    $(".blog__slider").each(function () {
      $(this).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        dots: false,
        arrows: true,
        fade: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              dots: false,
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 600,
            settings: {
              dots: false,
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  });
  /*window load*/
  $(window).on("load", function () { });

  $(".free__shipping__progres").each(function (e) {
    var progressLine =
      $(this)
        .parents(".modal__window_content__footer")
        .find(".subtotal__price")
        .text()
        .trim()
        .replace(/[^+\d]/g, "") /
      ($(this)
        .parents(".modal__window_content__footer")
        .find(".required__price")
        .text()
        .trim()
        .replace(/[^+\d]/g, "") /
        100);

    $(this)
      .find(".progress__line")
      .css({
        width: `${progressLine}%`,
      });
  });

  $(document).ajaxStop(function () {
    $(".free__shipping__progres").each(function (e) {
      var progressLine =
        $(this)
          .parents(".modal__window_content__footer")
          .find(".subtotal__price")
          .text()
          .trim()
          .replace(/[^+\d]/g, "") /
        ($(this)
          .parents(".modal__window_content__footer")
          .find(".required__price")
          .text()
          .trim()
          .replace(/[^+\d]/g, "") /
          100);

      $(this)
        .find(".progress__line")
        .css({
          width: `${progressLine}%`,
        });
    });
  });
  $(".modal__window_close, .modal__window__overlay").on("click", function (e) {
    e.preventDefault();
    $(".modal__window").stop().removeClass("modal-show");
    $(".cart__btn").stop().removeClass("cart__active");
  });

  $(document).ajaxStop(function () {
    $(".modal__window_close, .modal__window__overlay").on(
      "click",
      function (e) {
        e.preventDefault();
        $(".modal__window").stop().removeClass("modal-show");
        $(".cart__btn").stop().removeClass("cart__active");
      }
    );
  });
})(jQuery);
