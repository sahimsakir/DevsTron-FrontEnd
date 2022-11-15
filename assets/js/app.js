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

var blog_box = document.querySelector(".blog-box");
var pageUl = document.querySelector(".page-linkup");
var itemShow = document.querySelector("#itemperpage");
var tr = blog_box.querySelectorAll("tr");
var emptyBox = [];
var index = 1;
var itemPerPage = 8;

for (let i = 0; i < tr.length; i++) { emptyBox.push(tr[i]); }

itemShow.onchange = giveTrPerPage;
function giveTrPerPage() {
    itemPerPage = Number(this.value);
    // console.log(itemPerPage);
    displayPage(itemPerPage);
    pageGenerator(itemPerPage);
    getpagElement(itemPerPage);
}

function displayPage(limit) {
    blog_box.innerHTML = '';
    for (let i = 0; i < limit; i++) {
        blog_box.appendChild(emptyBox[i]);
    }
    const pageNum = pageUl.querySelectorAll('.list');
    pageNum.forEach(n => n.remove());
}
displayPage(itemPerPage);

function pageGenerator(getem) {
    const num_of_tr = emptyBox.length;
    if (num_of_tr <= getem) {
        pageUl.style.display = 'none';
    } else {
        pageUl.style.display = 'flex';
        const num_Of_Page = Math.ceil(num_of_tr / getem);
        for (i = 1; i <= num_Of_Page; i++) {
            const li = document.createElement('li'); li.className = 'list';
            const a = document.createElement('a'); a.href = '#'; a.innerText = i;
            a.setAttribute('data-page', i);
            li.appendChild(a);
            pageUl.insertBefore(li, pageUl.querySelector('.next'));
        }
    }
}
pageGenerator(itemPerPage);
let pageLink = pageUl.querySelectorAll("a");
let lastPage = pageLink.length - 2;

function pageRunner(page, items, lastPage, active) {
    for (button of page) {
        button.onclick = e => {
            const page_num = e.target.getAttribute('data-page');
            const page_mover = e.target.getAttribute('id');
            if (page_num != null) {
                index = page_num;

            } else {
                if (page_mover === "next") {
                    index++;
                    if (index >= lastPage) {
                        index = lastPage;
                    }
                } else {
                    index--;
                    if (index <= 1) {
                        index = 1;
                    }
                }
            }
            pageMaker(index, items, active);
        }
    }

}
var pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
pageRunner(pageLink, itemPerPage, lastPage, pageLi);

function getpagElement(val) {
    let pagelink = pageUl.querySelectorAll("a");
    let lastpage = pagelink.length - 2;
    let pageli = pageUl.querySelectorAll('.list');
    pageli[0].classList.add("active");
    pageRunner(pagelink, val, lastpage, pageli);

}



function pageMaker(index, item_per_page, activePage) {
    const start = item_per_page * index;
    const end = start + item_per_page;
    const current_page = emptyBox.slice((start - item_per_page), (end - item_per_page));
    blog_box.innerHTML = "";
    for (let j = 0; j < current_page.length; j++) {
        let item = current_page[j];
        blog_box.appendChild(item);
    }
    Array.from(activePage).forEach((e) => { e.classList.remove("active"); });
    activePage[index - 1].classList.add("active");
}