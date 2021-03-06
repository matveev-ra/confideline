$(function () {
    
    //прилипает меню к верху
    $(window).scroll(function () {
        var wScrTop = $(window).scrollTop()
        if (wScrTop > 0) {
            $('.Top').addClass('Fixed-bar')
        } else {
            $('.Top').removeClass('Fixed-bar')
        }

    });

    //select для языков
    $(".selectlink-js").on('click', function (e) {
        var $menu_popup = $(this).next();
        $menu_popup.slideToggle(200, function () {
            $('.Flag .Flag__dropdown').not($menu_popup).slideUp(200);
            if ($menu_popup.is(':hidden')) {
                $('.Flag__dropdown').removeClass('active');
                $(".selectlink-js").removeClass('active');
            } else {
                $('.Flag__dropdown').addClass('active');
                $(".selectlink-js").addClass('active');
            }
        });
        return false;
    });
    $('.Flag-js').on('click', function (e) {
        if ($('.Flag__dropdown').hasClass('active')) {
            $(".selectlink-js").html($(this).html());
            $('.Flag .Flag__dropdown').slideUp(200);
            $('.Flag .Flag__dropdown').removeClass('active');
            $(".selectlink-js").removeClass('active');
        }
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".selectlink-js"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
            $('.Flag__dropdown').slideUp(200);
		}	
	});
    
    

    $('.btn-trigger').click(function (e) {
        $('.Cantry__dropdown').slideToggle(200);
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".btn-trigger"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) 
        { // и не по его дочерним элементам
			//div.hide(); // скрываем его
            $('.Cantry__dropdown').slideUp(200);
		}	
	});

    $('.Cantry-js ').on('click', function (e) {
        var cantry = $(this).children().text()
        $("span.txt").text(cantry);
        $('.Cantry__dropdown').slideUp(200);
                
            
    });
    $(".Cantry__dropdown .Flag__select").on("click", function(){
        var tabs = $(".Cantry__dropdown .Flag__select")
            cont = $(".Contacts__wrap-tab .Cantry-tab");
      // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
      // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });





    //подключение слайдера для отзывово
    $('.Reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 4,
        dots: false,
        navClass: ['slick-prev-t', 'slick-next-t'],
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }

        }

    });

    //подключение слайдера для фото в профиле юзера
    $('.ProfUser-slider').owlCarousel({
        loop: true,
        autoWidth:true,
        margin: 10,
        nav: true,
        items: 5,
        dots: true,
        navClass: ['slick-prev-t', 'slick-next-t'],
        responsiveClass: true,
        responsive: {
            320: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }

        }

    });



    //работа бургера меню
    $('#hamburger').click(function (e) {
        $('.dropDownMenu').fadeToggle();
        $(this).toggleClass('active');
        $('.dropDownMenu').toggleClass('active');
        
    });
    //закрыть боковое меню
    $('#slide-close, .dropDownMenu ul li a').click(function (e) {
        e.preventDefault();
        $('.dropDownMenu').fadeToggle();
        $('#hamburger').toggleClass('active');
        $('.dropDownMenu').toggleClass('active');
        
    });

    //подключение модалки
    $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
                closeClass:'close'
            });
    });

    // form label
    (function ($) {
        function topLabel(inputType) {
            $(inputType).each(function () {
                var $this = $(this);
                // on focus add class active to label
                $this.focus(function () {
                    $this.next().addClass("active");
                });
                //on blur check field and remove class if needed
                $this.blur(function () {
                    if ($this.val() === '' || $this.val() === 'blank') {
                        $this.next().removeClass();
                    }
                });
            });
        }
        // just add a class of "topLabel to the input field!"
        topLabel(".topLabel");
    })(jQuery);

    $("a[href^='#']").click(function(e){
        e.preventDefault();
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
            top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        
        $("html, body").animate({scrollTop: (top - 90)});
    });

    $('.Like').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
      
      });

});