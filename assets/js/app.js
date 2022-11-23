(function ($) {
    'use strict';
    $(document).ready(function () {
        // lightcase activation//
        $('a[data-rel^=lightcase]').lightcase();

        //menu top fixed start for mobile menu & desktop menu
        var fixed_top = $(".bg-white");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 10) {
                fixed_top.addClass("menu-fixed animated fadeInDown");
                fixed_top.removeClass("slideInUp");
                $('body').addClass("body-padding");
            } else {
                fixed_top.removeClass("menu-fixed fadeInDown");
                fixed_top.addClass("slideInUp");
                $('body').removeClass("body-padding");
            }
        });

        // Click event to scroll bar start
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 200) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top start
        $('.scrollToTop').on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 700);
            return false;
        });

        // search & cart option
        $(document).on('click', '.search-cart .search a, .search-close', function () {
            $(".search-area").toggleClass("open");
        });

        // menu icon releted
        $(".main-menu>li>.submenu, .mega-menu").parent("li").children("a").addClass("dd-icon-down");
        $(".m-menu>li>.m-submenu").parent("li").children("a").addClass("dd-icon-down");
        $(".main-menu>li>.submenu .submenu").parent("li").children("a").addClass("dd-icon-right");
        $(".m-menu>li>.m-submenu .m-submenu").parent("li").children("a").addClass("dd-icon-down");
        $(".shop-menu>li .shop-submenu").parent("li").children("a").addClass("dd-icon-down");


        // mobile menu responsive
        $(document).on('click', '.header-bar', function () {
            $(".header-bar").toggleClass("close");
            $(".menu").toggleClass("open");
        });

        //mobile drodown menu display
        $('.mobile-menu-area .m-menu li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(1000, "swing");
            } else {
                element.addClass('open');
                element.children('ul').slideDown(1000, "swing");
                element.siblings('li').children('ul').slideUp(1000, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(1000, "swing");
            }
        });


        // drop down menu width overflow problem fix
        $('ul').parent().on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({ left: newpos });
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // portfolio slider activetion
        var swiper = new Swiper('.portfolio-container', {
            slidesPerView: 2,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 2,
                }
            }
        });

        // Testimonial slide activetion
        var swiper = new Swiper('.testimonial-slider', {
            spaceBetween: 300,
            navigation: {
                nextEl: '.testi-next',
                prevEl: '.testi-prev',
            },
            pagination: {
                el: '.testi-pagination',
                clickable: true,
            },
            speed: 500,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
            loop: true,
        });

        // Clients slider activetion
        var swiper = new Swiper('.clients-container', {
            autoplay: true,
            navigation: {
                nextEl: '.client-button-next',
                prevEl: '.client-button-prev',
            },
        });

        //sponser slider activation
        var swiper = new Swiper('.sponsor-container', {
            slidesPerView: 6,
            speed: 1000,
            autoplay: 1000,
            autoplay: true,
            loop: true,
            freeMode: true,
            breakpoints: {
                1024: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 4,
                },
                576: {
                    slidesPerView: 3,
                },
                425: {
                    slidesPerView: 2,
                }
            }
        });


        //product slider activetion start
        $(window).on("scroll", function () {
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                slidesPerView: 5,
                freeMode: true,
                autoplay: true,
                loop: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                breakpoints: {
                    1100: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    576: {
                        slidesPerView: 6,
                    },
                    575: {
                        slidesPerView: 6,
                    },
                    425: {
                        slidesPerView: 4,
                    },
                    375: {
                        slidesPerView: 4,
                    },
                    320: {
                        slidesPerView: 3,
                    },
                }
            });
            var galleryTop = new Swiper('.gallery-top', {
                autoplay: true,
                loop: true,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.product-button-next',
                    prevEl: '.product-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs
                }
            });
        });
        //product slider activetion end


        //image loaded hear//
        $('.container').imagesLoaded(function () {
            $('.portfolio-menu').on('click', '.button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', '.button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: 1
                }
            })
        });


        //counterup
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // multy count down - start
        $('.countdown-list').each(function () {
            $('[data-countdown]').each(function () {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function (event) {
                    var $this = $(this).html(event.strftime('' +
                        '<li class="timer-item days"><strong>%D</strong><small>days</small></li>' +
                        '<li class="timer-item hours"><strong>%H</strong><small>hours</small></li>' +
                        '<li class="timer-item mins"><strong>%M</strong><small>mins</small></li>' +
                        '<li class="timer-item sec"><strong>%S</strong><small>sec</small></li>'));
                });
            });
        });

        // product view mode change js
        $(function () {
            $('.product-view-mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop-product-wrap');
                var viewMode = $(this).data('target');
                $('.product-view-mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('grid list').addClass(viewMode);
            });
        });


        // model option start here
        $(function () {
            $('.view-modal').on('click', function () {
                $('.modal').addClass('show');
            });
            $('.close').on('click', function () {
                $('.modal').removeClass('show');
            });
        });

        //shop-widget drodown menu display
        $(function () {
            $('.shop-widget .shop-menu li a').on('click', function (e) {
                var element = $(this).parent('li');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('li').removeClass('open');
                    element.find('ul').slideUp(1000, "swing");
                } else {
                    element.addClass('open');
                    element.children('ul').slideDown(1000, "swing");
                    element.siblings('li').children('ul').slideUp(1000, "swing");
                    element.siblings('li').removeClass('open');
                    element.siblings('li').find('li').removeClass('open');
                    element.siblings('li').find('ul').slideUp(1000, "swing");
                }
            });
        });

        // shop cart + - start here
        $(function () {
            var CartPlusMinus = $('.cart-plus-minus');
            CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
            CartPlusMinus.append('<div class="inc qtybutton">+</div>');
            $(".qtybutton").on("click", function () {
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();
                if ($button.text() === "+") {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    // Don't allow decrementing below zero
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 1;
                    }
                }
                $button.parent().find("input").val(newVal);
            });
        });

        //Review Tabs
        $('ul.review-nav').on('click', 'li', function (e) {
            e.preventDefault();
            var reviewContent = $('.review-content');
            var viewRev = $(this).data('target');
            $('ul.review-nav li').removeClass('active');
            $(this).addClass('active');
            reviewContent.removeClass('review-content-show description-show').addClass(viewRev);
        });

        // sticky-widget
        $(function () {
            $('.sticky-widget').theiaStickySidebar();
        });

        // wow animation
        new WOW().init();
        if ($(window).width() <= 991) {
            $(".wow").removeClass("wow");
        }
    });
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })
})(jQuery)

$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function () {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function () {
        return true;
    })

});

function checkCurrent(id) {
    var checkBox = "#" + id;
    var testArray = id.substring(0, id.length - 8);
    var labelEndDate = testArray + "end_date";
    var lastDate = "#" + testArray + "end_date";
    var check_current = document.querySelector(checkBox);
    var end_date = document.querySelector(lastDate);
    var end_date_label = document.querySelector('[for=' + labelEndDate + ']')

    if (check_current.checked == true) {
        end_date_label.style.opacity = "0";
        end_date.style.opacity = "0";
    } else {
        end_date_label.style.opacity = "1";
        end_date.style.opacity = "1";
    }
}