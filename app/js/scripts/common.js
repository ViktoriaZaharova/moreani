
/************************  Меню  ***********************/
(function($) {
    $(function() {
        $(".nav-icon").click(function () {
            if($(".nav-icon").hasClass("close_menu")){
                $('.nav-icon').addClass("active");
                $('.nav-icon').removeClass("close_menu");
                $(".mobile_menu").addClass("visibility");
                $("#overlay").addClass("block");
                //$(".resp-menu").addClass("fixed");
            }else{
                $('.nav-icon').removeClass("active");
                $('.nav-icon').addClass("close_menu");
                $(".mobile_menu").removeClass("visibility");
                $("#overlay").removeClass("block");
                //$(".resp-menu").removeClass("fixed");
            }
        });
        $(".mobile_menu .yakor").click(function () {
            $('.nav-icon').removeClass("active");
            $('.nav-icon').addClass("close_menu");
            $(".mobile_menu").removeClass("visibility");
            $("#overlay").removeClass("block");
        });
        $("#overlay").click(function () {
            $('.nav-icon').removeClass("active");
            $('.nav-icon').addClass("close_menu");
            $(".mobile_menu").removeClass("visibility");
            $("#overlay").removeClass("block");
        });
    })
})(jQuery);

/************************  Меню  ************************/


$(document).ready(function(  ) {

    // Сокращение меню
    var wrapper = document.querySelector(".nav-wrapper");
    var nav = priorityNav.init({
        mainNavWrapper: ".nav-wrapper", // mainnav wrapper selector (must be direct parent from mainNav)
        mainNav: ".nav-ul", // mainnav selector. (must be inline-block)
        navDropdownLabel: 'Еще <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 8L0.602885 0.5L8.39711 0.500001L4.5 8Z" fill-opacity="1"/></svg>',
        navDropdownClassName: "nav__dropdown", // class used for the dropdown.
        navDropdownToggleClassName: "nav__dropdown-toggle", // class used for the dropdown toggle.
    });

    //Маска телефона
    $(".phone_input").inputmask("+7 (999) 999 - 99 - 99");

    // Селект
    $('.js-example-basic-single').select2();

    // Активация кнопки избранное
    $('.fav-btn').click(function () {
        $(this).toggleClass('active');
    });

    // Активация фильтров каталога
    $('.show-filter').click(function () {
        $("#catalog-filter").toggleClass('active');
    });

    // Активация мобильного поиска
    $('button.mobile-search').click(function () {
        $('.mobile-search-form').addClass('active');
    });
    $('.close-modal-search').click(function () {
        $('.mobile-search-form').removeClass('active');
    });



    // UI Slider
    $(".polzunok-5").slider({
        min: $(".polzunok-5").data("min"),
        max: $(".polzunok-5").data("max"),
        values: [$(".polzunok-input-5-left").val(), $(".polzunok-input-5-right").val()],
        range: true,
        animate: "fast",
        slide : function(event, ui) {
            $(".polzunok-input-5-left").val(ui.values[ 0 ]);
            $(".polzunok-input-5-right").val(ui.values[ 1 ]);
        }
    });

    $(document).focusout(function() {
        if($(".polzunok-input-5-left").length) {
            var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),
                opt_left = $(".polzunok-5").slider("option", "min"),
                where_right = $(".polzunok-5").slider("values", 1),
                input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),
                opt_right = $(".polzunok-5").slider("option", "max"),
                where_left = $(".polzunok-5").slider("values", 0);
            if (input_left > where_right) {
                input_left = where_right;
            }
            if (input_left < opt_left) {
                input_left = opt_left;
            }
            if (input_left == "") {
                input_left = 0;
            }
            if (input_right < where_left) {
                input_right = where_left;
            }
            if (input_right > opt_right) {
                input_right = opt_right;
            }
            if (input_right == "") {
                input_right = 0;
            }
            $(".polzunok-input-5-left").val(input_left);
            $(".polzunok-input-5-right").val(input_right);
            $(".polzunok-5").slider("values", [input_left, input_right]);
        }
    });

    // количество
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // Показ списка чекбоксов в фильтре каталога
    $('.charac-good').readmore({ //вызов плагина
        speed: 350, //скорость анимации показать скрыть текст
        collapsedHeight: 310, //высота блока краткого текста в px
        moreLink: '<a class="more_chr" href="#">Развернуть все характеристики</a>', //Ссылка на раскрытие блока
        lessLink: '<a  class="more_chr" href="#">Скрыть все характеристики</a>' //Ссылка на скрытие блока
    });

    // Слайдер товара

    $( '#example5' ).sliderPro({
        width: 550,
        height: 390,
        autoplay: false,
        orientation: 'vertical',
        loop: false,
        arrows: false,
        buttons: false,
        thumbnailsPosition: 'left',
        thumbnailPointer: true,
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        breakpoints: {
            1230: {

                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                thumbnailWidth: 80,
                width: 440,
                height: 340,
                thumbnailHeight: 80

            },
            768: {

                thumbnailsPosition: 'bottom',
                orientation: 'horizontal',
                width: 440,
                height: 340,
                thumbnailWidth: 80,
                thumbnailHeight: 80

            }
        }
    });

    // Фикс шапка
    /*
    $(window).scroll(function(){
        $('.header').toggleClass('header--fixed', $(this).scrollTop() > 170);
        $('.mobile_menu').toggleClass('mobile_menu--fixed', $(this).scrollTop() > 170);
        $('.nav-icon').toggleClass('nav-icon--fixed', $(this).scrollTop() > 170);
    });
    */

    // Карусель на главной
    $('.one_slide').owlCarousel({
        //center: true,
        items:1,
        loop: true,
        autoplay: false,
        mouseDrag: true,
        autoHeight: true,
        nav: false,
        dots: true,
        touchDrag: true,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>'],
        margin:0,
        responsive:{
            1400:{
                dots: true,
            },
            0:{
                dots: true,
            }
        }
    });

    $('.carusel-4').owlCarousel({
        //center: true,
        items:1,
        loop:false,
        autoplay: false,
        mouseDrag: true,
        nav: true,
        dots: false,
        touchDrag: true,
        autoHeight: true,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>'],
        responsive:{
            1250:{
                items:4,
                margin:30,
            },
            993:{
                items:3,
                margin:20,
            },
            768:{
                items:2,
                margin:20,
            },
            550:{
                autoHeight: true,
                items:2,
                margin:20,
            },
            0:{
                autoHeight: true,
                items:1,
            }
        }

    });

    $('.network-slider').owlCarousel({
        //center: true,
        items:1,
        loop:false,
        autoplay: false,
        mouseDrag: true,
        nav: true,
        dots: false,
        touchDrag: true,
        autoHeight: true,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>'],
        responsive:{
            1250:{
                items:3,
                margin:10,
            },
            1050:{
                items:1,
                margin:20,
            },
            768:{
                items:1,
                margin:20,
            },
            550:{
                autoHeight: true,
                items:1,
                margin:20,
            },
            0:{
                autoHeight: true,
                items:1,
            }
        }

    });

    $('.header-slider').owlCarousel({
        //center: true,
        items:1,
        loop:false,
        autoplay: false,
        mouseDrag: true,
        nav: true,
        autoWidth:true,
        dots: false,
        touchDrag: true,
        autoHeight: true,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.75 88.49"><path d="M152.88,160.71a6.11,6.11,0,0,1-8.85-8.42L176.5,118.4,144,84.37A6.06,6.06,0,0,1,152.81,76l35.82,37.46a6.09,6.09,0,0,1,.78,9.06Z" transform="translate(-142.32 -74.09)"/></svg>'],
        responsive:{
            1300:{
                items:7,
                margin:30,
            },
            1050:{
                items:5,
                margin:30,
            },
            993:{
                items:5,
                margin:20,
            },
            768:{
                items:2,
                margin:20,
            },
            550:{
                autoHeight: true,
                items:2,
                margin:20,
            },
            0:{
                autoHeight: true,
                margin:20,
                items:1,
            }
        }

    });






    $('#show-table-row').click(function () {
        $('.btn-table-row').hide();
        $('.table-tarif tfoot').removeClass('change-color');
        $('.table-tarif .hidden-row').removeClass('hidden-row');
        $('.table-tarif .bg-white').removeClass('bg-white');
    });


    // Устанавливаем обработчик потери фокуса для всех полей ввода текста

    $('input#id--1, input#id--2, input#id--3').unbind().blur( function(){

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

        // После того, как поле потеряло фокус, перебираем значения id, совпадающее с id данного поля



        switch(id)
        {

            // Проверка поля "Компания"
            case 'id--1':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                // Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                    $(this).addClass('not_error');
                    $('#submit-1').removeClass('disabled');
                    $(this).next('.error-box').text('')
                        //.css('color','#00bce7')
                        .animate({'paddingTop':'0'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'0'},400);
                }

                // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else
                {
                    $('#submit-1').addClass('disabled');
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('&bull; поле "Компания" обязательно для заполнения <br/> &bull; минимум 3 символа <br/> &bull; цифры не допускаются')
                        //.css('color','#fff')
                        .animate({'paddingTop':'10px'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'10px'},400);

                }
                break;

            // Проверка поля "Ваше имя"
            case 'id--2':
                var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

                // Eсли длина имени больше 2ух символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово "Принято", т.е. валидация для этого поля пройдена успешно

                if(val.length > 2 && val != '' && rv_name.test(val))
                {
                    $('#submit-1').removeClass('disabled');
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('')
                        //.css('color','#00bce7')
                        .animate({'paddingTop':'0'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'0'},400);
                }

                // Иначе, мы удаляем класс not-error, и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else
                {
                    $('#submit-1').addClass('disabled');
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.error-box').html('&bull; поле "Ваше имя" обязательно для заполнения <br/> &bull; минимум 3 символа <br/> &bull; цифры не допускаются')
                        //.css('color','#fff')
                        .animate({'paddingTop':'10px'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'10px'},400);

                }
                break;

            // Проверка email
            case 'id--3':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if(val != '' && rv_email.test(val))
                {
                    $('#submit-1').removeClass('disabled');
                    $(this).addClass('not_error');
                    $(this).next('.error-box').text('')
                        //.css('color','#00bce7')
                        .animate({'paddingTop':'0'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'0'},400);
                }
                else
                {
                    $('#submit-1').addClass('disabled');
                    $(this).addClass('error');
                    $(this).next('.error-box').html('&bull; поле "E-mail" обязательно для заполнения<br> &bull; поле должно содержать правильный email-адрес<br> (например: example123@mail.ru)')
                        //.css('color','#9f192d')
                        .animate({'paddingTop':'10px'},400)
                        .animate({'paddingLeft':'0', 'paddingTop':'10px'},400);

                }
                break;


        } // end switch(...)

    }); // end blur()

});

$(function() {
    // Скрол
    $('.scroll').perfectScrollbar();

});
$(window).load(function(  ) {
    $(".yakor").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
