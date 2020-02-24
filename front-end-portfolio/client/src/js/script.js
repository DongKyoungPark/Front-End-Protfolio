import $ from 'jquery';

// const $ = window.jQuery;

$(function ($) {
    let speed = 1000;
    let h = 0;
    let section_top;
    let section_height = [0];
    let window_height = $(window).height();
    let header_height = $('#header').innerHeight();

    $(window).trigger("scroll");

    function now() {
        let temp;
        let window_top = $(window).scrollTop();
        $('section').each(function (i) {
            if (window_top + (window_height / 3) >= section_height[i]) {
                temp = i;
            } else {
                return false;
            }
        });
        return temp;
    };

    let moving = false;

    function move(i) {
        moving = true;
        if ($('html,body').is(':animated')) return false;
        //섹션 구간 구하기
        section_top = $('section').eq(i).offset().top + -header_height;
        $('html,body').clearQueue().animate({
            scrollTop: section_top
        }, speed, function () {
            active(i);
            moving = false;
        });
    };

    function active(i) {
        if ($('html,body').is(':animated')) return false;
        $('.gnb li').find('a').removeClass('active');
        $('.gnb li').eq(i).find('a').addClass('active');
    };

    $(window).on('resize', function () {
        $('#home').clearQueue().animate({
            'height': window_height - header_height
        }, speed);
    });

    $(window).on('keydown', function () {
        if (window.event.key === 'F5') window.location.reload();
    });

    $(window).on('touchmove scroll', function () {
        if (now() !== 0) {
            $('.bar-move').eq(0).addClass('bar_01');
            $('.bar-move').eq(1).addClass('bar_02');
            $('.bar-move').eq(2).addClass('bar_03');
            $('.bar-move').eq(3).addClass('bar_04');
            $('.bar-move').eq(4).addClass('bar_05');
            $('#header').addClass('active');
            if ($('.scrolltop').is(':hidden')) $('.scrolltop').stop().fadeIn(speed);
        } else {
            $('#header').removeClass('active');
            $('.scrolltop').stop().fadeOut();
        };

        let alhpa = $(window).scrollTop() / 500;
        $('#home').css({
            'background-image': 'linear-gradient(to bottom, rgba(255,255,255,' + alhpa + '), rgba(255,255,255,' + alhpa + '), url(../images/bg_main.jpg)',
            'max-width': '100%'
        });
        if (moving) return false;
        active(now());
    });

    $('section').first().height(window_height - header_height);
    $('section').each(function (i) {
        h += $(this).height();
        section_height[i + 1] = h;
    });

    $('.logo a, .scrolltop').on('click', function () {
        if (moving) return false;
        $('html,body').clearQueue().animate({
            scrollTop: 0
        }, speed, function () {
            active(now());
        });
    });

    $('.m-gnb').on('click', function () {
        $(this).toggleClass('active');
        $('.gnb li a').removeClass('active');
        if ($(this).hasClass('active')) {
            $('.gnb-wrap').css({
                'top': '0',
                'opacity': '1'
            });
            $('#header .inner-container').css({
                'padding': '0'
            });
        } else {
            $('.gnb-wrap').css({
                'top': '-100%',
                'opacity': '0'
            });
        }
        $(window).on('scroll', function () {
            $('.gnb li a').removeClass('active');
        });
        $('.gnb li a').on('click', function () {
            $('.m-gnb').removeClass('active');
            $('.gnb-wrap').css({
                'top': '-100%',
                'opacity': '0'
            });
        });
    });

    $('.gnb li').eq(now()).find('a').addClass('active');
    $('.gnb li a').on('click', function () {
        let idx = $(this).parents('li').index();
        move(idx);
        return false;
    });

    $('.btn-scroll').on('click', function () {
        move(1);
    });

    /* top btn */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.top-btn-wrap').fadeIn();
        } else {
            $('.top-btn-wrap').fadeOut();
        }
    });

    $('.top-btn-wrap').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    //Home_title animation (open source)
    let TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
        let that = this;
        let delta = 150 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        let elements = document.getElementsByClassName('txt-rotate');
        for (let i = 0; i < elements.length; i++) {
            let toRotate = elements[i].getAttribute('data-rotate');
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.04em solid #666 }";
        document.body.appendChild(css);
    };
});