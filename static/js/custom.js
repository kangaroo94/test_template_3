var fired = false;
window.addEventListener('scroll', loadWithDelay, false);

function loadWithDelay() {
    if (fired === false) {
        fired = true;

        setTimeout(() => {
            findVideos();

            ScrollTop();

            btnUpPosition.initialize();

            // zoom
            $('.js-fancy').fancybox({
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {},
                    overlay: {
                        locked: false
                    }
                }
            });
        }, 100);
    }
}

$(document).ready(function () {
    setTimeout(function () {
        // slider
        if ($('.js-slots-slider').length) {
            $('.js-slots-slider').on('init', function () {
                $(this).removeClass('u-fix-display');
            }).slick({
                lazyLoad: 'ondemand',
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                mobileFirst: true,
                variableWidth: false,
                appendArrows: '.js-slots-box-arrows',
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        }

        if ($('.js-news-slider').length) {
            $('.js-news-slider').on('init', function () {
                $(this).removeClass('u-fix-display');
            }).slick({
                lazyLoad: 'ondemand',
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                mobileFirst: true,
                variableWidth: false,
                appendArrows: '.js-news-box-arrows',
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        }

        if ($('.js-bonuses-slider').length) {
            $('.js-bonuses-slider').on('init', function () {
                $(this).removeClass('u-fix-display');
            }).slick({
                lazyLoad: 'ondemand',
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                mobileFirst: true,
                variableWidth: false,
                appendArrows: '.js-bonuses-box-arrows',
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        }

        if ($('.js-screenshots-slider').length) {
            $('.js-screenshots-slider').on('init', function () {
                $(this).removeClass('u-fix-display');
            }).slick({
                lazyLoad: 'ondemand',
                dots: true,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 5000,
                mobileFirst: true,
                variableWidth: false,
                appendArrows: '.js-screenshots-arrows',
                responsive: [{
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 1023,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 1365,
                    settings: {
                        dots: false,
                        slidesToShow: 4
                    }
                }]
            });
        }

        // Form validate call
        $('.wpcf7-form').validate(validateParams);
        $('#commentform').validate(validateParams);
    }, 2000);

    $('body').AddClassAnimation();

    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 50) {
            $('.js-header').addClass('is-scroll');
        } else {
            $('.js-header').removeClass('is-scroll');
        }
    });

    // contents
    $('.js-to-item').on('click', function () {
        scrollToItem($(this));
    });

    // for menu modal
    $(document).on('show.bs.modal', '.js-modal-main', function () {
        $('html').addClass('modal-noscroll');
        $('.js-menu-btn').addClass('is-open');
        $('.js-close-btn').removeClass('not-active');
    });
    $(document).on('hidden.bs.modal', '.js-modal-main', function () {
        $('html').removeClass('modal-noscroll');
        $('.js-menu-btn').removeClass('is-open');
        $('.js-close-btn').addClass('not-active');
    });
    $(document).on('show.bs.modal', '.js-modal-full', function () {
        $('html').addClass('modal-noscroll-full');
    });
    $(document).on('hidden.bs.modal', '.js-modal-full', function () {
        $('html').removeClass('modal-noscroll-full');
    });

    $('.modal').on('show.bs.modal', function () {
        var docHeight = $(document).height(),
            windowHeight = $(window).height(),
            docWidth = $(document).outerWidth(),
            windowWidth = $(window).outerWidth(),
            widthScroll = windowWidth - docWidth;

        if (docHeight > windowHeight) {
            // fix-scroll
            $('body').css('paddingRight', widthScroll);
        } else {
            $('body').css('paddingRight', '0');
        }
    });

    $('.modal').on('hidden.bs.modal', function () {
        $('body').css('paddingRight', '0');
    });

    // header dropdown on hover (desktop)
    $('.js-header .js-header-drop-btn').on('mouseenter focus', function (event) {
        if (window.innerWidth >= 1440) {
            $(this).parent().addClass('open');
            $(this).parent().siblings().removeClass('open');
            $(this).siblings().removeClass('open');
            event.stopPropagation();
            event.preventDefault();
        }
    });

    // prevent dropdown from hiding on blur or click inside of it
    $(document).on('click', '.dropdown-menu', function (event) {
        event.stopPropagation();
    });

    // Header menu hide
    headerMenuHide.initialize();

    // scroll
    $('.js-vertical-scroll').mCustomScrollbar({
        axis: 'y',
        passive: true
    });

    // Accordion collapse
    var $accordion = $('#accordion');
    $accordion.on('show.bs.collapse', '.collapse', function () {
        $accordion.find('.collapse.in').collapse('hide');
    });

    // contents
    $(window).on('load resize orientationchange', function () {
        // Btn-up position nearby footer
        setTimeout(function () {
            btnFixedPosition.initialize();
            $(window).scroll();
        }, 200);

        checkWidth();
    });

    $('.js-contents-title').on('click', function (e) {
        $('.js-contents-title').removeClass('arrow-rotate');
    });
});

function checkWidth() {
    var windowWidth = $('body').innerWidth();

    if (windowWidth > 1366) {
        $('.js-collapse-contents').addClass('in');
        $('.js-contents-title').addClass('arrow-rotate');
    } else {
        $('.js-collapse-contents').removeClass('in');
        $('.js-contents-title').removeClass('arrow-rotate');
    }
}

// Add animation
(function ($) {
    var addClassAnimation = {
        elementAnim: '.js-animate',
        classAnim: 'is-animated'
    };

    addClassAnimation.add = function (element) {
        var $self = this;
        var element = this.elementAnim;
        var addClass = this.classAnim;

        $(element).each(function () {
            var $this = $(this);

            var offsetEl = $this.offset();

            if (offsetEl.top <= $(document).scrollTop() + $(window).height() / 1) {
                $this.addClass(addClass);
            }
        });
    };

    $.fn.AddClassAnimation = function (options) {
        if (options && typeof options === 'object') {
            $.extend(addClassAnimation, options);
        }

        var $this = $(this);

        addClassAnimation.add($this);

        $(window).on('scroll', function () {
            addClassAnimation.add($this);
        });

        return this;
    };
})(jQuery);

// Header menu hide
var headerMenuHide = (function ($) {
    var initialized = 0;

    var defaults = {
        targetSelector: '.js-header .dropdown-menu',
        parentOpenClass: 'open',
    };

    var settings = $.extend({}, defaults, {} || {});

    var initialize = function (params) {
        if (initialized) {
            return;
        }
        initialized = 1;

        settings = $.extend({}, defaults, params || {});

        var hoverTimeout;

        $('.js-header .dropdown-menu, .js-header-drop-btn').each(function () {
            var id = $(this).attr('aria-labelledby') || '#' + $(this).attr('id');
            $(this).hover(function () {
                clearTimeout(hoverTimeout);
            }, function () {
                var $self = $(this);

                if (window.innerWidth >= 1440 && (!btnIsHovered(id) || !ariaIsHovered(id))) {
                    hoverTimeout = setTimeout(function () {
                        $self.parent().removeClass('open');
                    }, 500);
                }
            });
        });
    };

    var btnIsHovered = function (id) {
        return $(id + ':hover').length > 0;
    };

    var ariaIsHovered = function (id) {
        return $("[aria-labelledby='#" + id + "']:hover").length > 0;
    };

    return {
        initialize: initialize,
    };
})(jQuery);

// validate contacts
var validateParams = {
    rules: {
        author: 'required',
        subject: 'required',
        comment: {
            required: true,
            minlength: 10
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        author: $('[for="author"]').data('error'),
        comment: $('[for="comment"]').data('error'),
        email: $('[for="email"]').data('error'),
        subject: $('[for="subject"]').data('error'),
    },
    submitHandler: function submitHandler(form) {
        var loader = '<div class="c-loader" style="margin: 20px auto auto auto"></div>';
        $('#form-message').remove();
        $('.wpcf7-form').append(loader);
        $('#commentform').append(loader);

        setTimeout(function () {
            $('.c-loader').remove();
            $('.wpcf7-form [name]').val('');
            $('#commentform [name]').val('');

            var message = '<div id="form-message" style="display: block; text-align: center; margin-top: 15px">' + $('#submit_button').data('send') + '</div>';

            if ($('#form-message').length === 0) {
                $('.wpcf7-form').append(message);
                $('#commentform').append(message);
            }
        }, 1000);
    }
};

// rating
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS для Browserify
        module.exports = factory;
    } else {
        // Используя глобальные переменные браузера
        factory(jQuery);
    }
}(function ($) {
    'use script';

    var StarRating = function (elm, option) {
        var elRat = $(elm),
            elRatRange = elRat.find('.js-rating__range'),
            valMaxRat = Number(elRat.attr('data-max-rat')),
            valRat = Number(elRat.attr('data-rat'));

        var self,
            calculatingVal = function (maxRat, Rat) {
                if (Rat > maxRat) Rat = maxRat;
                return Rat / maxRat * 100;
            },
            setRat = function () {
                elRatRange.css('width', calculatingVal(valMaxRat, valRat) + '%');
            },
            init = function () {
                setRat();
            };
        self = {
            init: init
        };
        return self;
    };

    $.fn.starRating = function (opt) {
        return this.each(function () {
            var starRating;
            if (!$(this).data('starRating')) {
                starRating = new StarRating(this, $.extend(true, {}, opt));
                starRating.init();
                $(this).data('starRating', starRating);
            }
        });
    };
}));

function ScrollTop() {
    var height = 400,
        speed = 800;

    var $link = $('<span class="__cl-c-button-up___ js-btn-up"><span class="__cl-c-button-up__in___" rabindex="0"></span></span>').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, speed);

        return false;
    });

    var $container = $($link).appendTo('.js-box-arrow').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > height) {
            $container.fadeIn();
        } else {
            $container.fadeOut();
        }
    });
}

var btnUpPosition = function ($) {
    var initialized = 0;
    var defaults = {
        wrapSelector: '.js-outer-wrap',
        btnUpSelector: '.js-btn-up',
        btnUpPadding: '0',
        footerSelector: '.js-footer'
    };
    var settings = $.extend({}, defaults, {} || {});

    var initialize = function initialize(params) {
        if (initialized) {
            return;
        }

        initialized = 1;
        settings = $.extend({}, defaults, params || {});
        var btnUpBottomDefault = parseInt(($(settings.btnUpSelector).css('bottom')), 10);
        check({
            btnBottomDefault: btnUpBottomDefault,
            btnSelector: $(settings.btnUpSelector),
            btnPadding: settings.btnUpPadding
        });
        $(window).on('scroll', function () {
            check({
                btnBottomDefault: btnUpBottomDefault,
                btnSelector: $(settings.btnUpSelector),
                btnPadding: settings.btnUpPadding
            });
        });
    };

    var check = function check(params) {
        if (params.btnSelector.length < 1) {
            return;
        }

        var wrapPadding = parseInt(($(settings.wrapSelector).css('padding-bottom')), 10) || 0,
            { btnPadding, btnBottomDefault, btnSelector } = params,
            resultCoordinate = $(document).height() + btnBottomDefault
                - ($(window).scrollTop() + $(window).outerHeight()
                    + $(settings.footerSelector).outerHeight() + wrapPadding - btnPadding);

        if (resultCoordinate < 0) {
            $(btnSelector).css('bottom', btnBottomDefault - resultCoordinate);
        } else {
            $(btnSelector).css('bottom', btnBottomDefault);
        }
    };

    return {
        initialize: initialize,
        check: check
    };
}(jQuery);

// scroll to element
function scrollToItem(elem) {
    var el = $(elem).attr('href').slice(1),
        elToScroll = $(`#${el}`),
        navHeight = 0,
        time = 500,
        gap = 50,
        offsetTop = elToScroll.offset().top,
        totalScroll = offsetTop - navHeight - gap;

    $('body,html').animate({
        scrollTop: totalScroll
    }, time);

    return false;
}

// for youtube video
function findVideos() {
    var videos = document.querySelectorAll('.js-video');

    for (var i = 0; i < videos.length; i++) {
        setupVideo(videos[i]);
    }
}

function setupVideo(video) {
    var link = video.querySelector('.js-video-link');
    var media = video.querySelector('.js-video-media');
    var button = video.querySelector('.js-video-button');
    var id = media.getAttribute('data-yid');

    video.addEventListener('click', () => {
        var iframe = createIframe(id);

        link.remove();
        button.remove();
        video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('is-enabled');
}

function createIframe(id) {
    var iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('iframe-video');

    return iframe;
}

function generateURL(id) {
    var query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
}

// Btn-fixed position nearby footer
var btnFixedPosition = (function ($) {
    var initialized = 0;
    var defaults = {
        wrapSelector: '.js-outer-wrap',
        btnFixedSelector: '.js-contents-fixed',
        btnFixedPadding: '0',
        footerSelector: '.js-footer'
    };
    var settings = $.extend({}, defaults, {} || {});

    var initialize = function initialize(params) {
        if (initialized) {
            return;
        }
        initialized = 1;

        settings = $.extend({}, defaults, params || {});

        var btnFixedBottomDefault = parseInt(($(settings.btnFixedSelector).css('bottom')), 10);

        check({
            btnBottomDefault: btnFixedBottomDefault,
            btnSelector: $(settings.btnFixedSelector),
            btnPadding: settings.btnFixedPadding,
        });
        $(window).on('scroll resize orientationchange', function () {
            check({
                btnBottomDefault: btnFixedBottomDefault,
                btnSelector: $(settings.btnFixedSelector),
                btnPadding: settings.btnFixedPadding,
            });
        });
    };

    var check = function check(params) {
        if (params.btnSelector.length < 1) {
            return;
        }
        var wrapPadding = parseInt(($(settings.wrapSelector).css('padding-bottom')), 10) || 0,
            { btnPadding, btnBottomDefault, btnSelector } = params,
            resultCoordinate = $(document).height() + btnBottomDefault
                - ($(window).scrollTop() + $(window).outerHeight()
                    + $(settings.footerSelector).outerHeight() + wrapPadding - btnPadding);

        if (resultCoordinate < 0) {
            $(btnSelector).css('bottom', btnBottomDefault - resultCoordinate);
        } else {
            $(btnSelector).css('bottom', btnBottomDefault);
        }
    };

    return {
        initialize: initialize,
        check: check
    };
})(jQuery);
