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
        navClass: ['owl-prev-t', 'owl-next-t'],
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
    // $('#slide-close, .dropDownMenu ul li a').click(function (e) {
    $('#slide-close').click(function (e) {
        e.preventDefault();
        $('.dropDownMenu').fadeToggle();
        $('#hamburger').toggleClass('active');
        $('.dropDownMenu').toggleClass('active');
        
    });

    $('.dropDownMenu>ul>li>a').click(function (e) {

        if ($('.dropDownMenu').hasClass('active')) {
                $('.dropDownMenu').fadeToggle();
                $('#hamburger').toggleClass('active');
                $('.dropDownMenu').toggleClass('active');
                e.preventDefault();
        }
    });

    //подключение модалки
    $('.bpopup').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        $(href).bPopup({
                closeClass:'close',
                positionStyle: 'fixed'
                //follow: [false, false], //x, y
            });
    });

    $('.SupportService').click(function(e) {
        e.preventDefault();

        $('#ModalSupport').bPopup({
                closeClass:'close',
                positionStyle: 'fixed'
                //follow: [false, false], //x, y
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
                    $this.addClass("active");
                });
                //on blur check field and remove class if needed
                $this.blur(function () {
                    if ($this.val() === '' || $this.val() === 'blank') {
                        $this.next().removeClass("active");
                        $this.removeClass();
                    }
                });
            });
        }
        // just add a class of "topLabel to the input field!"
        topLabel(".topLabel");
    })(jQuery);

    $(".dropDownMenu ul li a[href^='#']").click(function(e){
        e.preventDefault();
        var id  = $(this).attr('href'), //забираем идентификатор бока с атрибута href
            top = $(id).offset().top; //узнаем высоту от начала страницы до блока на который ссылается якорь
        
        $("html, body").animate({scrollTop: (top - 90)});
    });

    $('.Like').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active');
      
      });

    // клик по иконке уведомления
      $('.Notification__icon').click(function (e) {
        $('.Notification-popup').fadeToggle();
    });
    // если клик не по иконке уведомления то закрываем 
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".Notification__icon"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0  ) // и не по его дочерним элементам
        { 
            $('.Notification-popup').slideUp(200);
		}	
	});

    // клик по иконке профиля
    $('.Profile-btn-js').click(function (e) {
        $('.Profile-popup').fadeToggle();
    });

    // если клик не по иконке профиля то закрываем 
    $(document).mouseup(function (e){ 
		var div = $(".Profile-btn-js"); 
		if (!div.is(e.target) && div.has(e.target).length === 0  ) 
        { 
            $('.Profile-popup').slideUp(200);
		}	
	});

    


    $(".accordeon > li > span").on('click', function (e) {
        e.preventDefault();
        var menu = $(this).closest('.accordeon');
        if (false == $(this).next().is(':visible')) {
            menu.find('li').removeClass('slide active');
            menu.find('ul').slideUp();
        }
        $(this).next().slideToggle();
        $(this).parent().addClass('slide');
    });

    $("#slider-ui").slider({
		range: true,
		min: 18,
		max: 100,
		values: ['0', '100'],
		slide: function(event, ui) {
			$('#min').text(ui.values[0]);
			$('#max').text(ui.values[1]);
		}
	});


    $("#Tabs-js .SettingsTabs__head .SettingsTabs__tab").on("click", function(){
        var tabs = $("#Tabs-js .SettingsTabs__tab")
            cont = $("#Tabs-js .SettingsTabs__cont");
      // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
      // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");
        return false;
    });

//клик по кнопкк плюс - кторый инициирует клк по полю input type="file"
    $("#plus-download").click(function(e){
        // поле не заполнено;
        e.preventDefault();
        //console.log("click");
        $('#input__file').trigger('click');
        
    });

 $("#plus-download2").click(function(e){
        // поле не заполнено;
        e.preventDefault();
        //console.log("click");
        $('#input__file2').trigger('click');
 });


$(".ChatSlider").slick({
    infinite: true,
    dots: false,
    vertical: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
            vertical: false
            }
        },
        {
            breakpoint: 540,
            settings: {
                vertical: false,
                slidesToShow: 2
            }
            }
        ]
});

$('.Slider-tab').owlCarousel({
    loop: false,
    autoWidth: true,
    items: 1,
    nav:true,
    dots: false,
    navClass: ['owl-prev-tab', 'owl-next-tab'],

});

$('.Flag-js_').on('click', function (e) {
    if ($('.Flag__dropdown').hasClass('active')) {
        $(".selectlink-js").html($(this).html());
        $('.Flag .Flag__dropdown').slideUp(200);
        $('.Flag .Flag__dropdown').removeClass('active');
        $(".selectlink-js").removeClass('active');
    } else {

    }
});

$('.Hidden-title span').click(function (e) {
        $('.Hidden-text').fadeToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).text("Открыть оригинал");
        } else {
            $(this).text("Скрыть оригинал");
        }
    });
      
//end
});


    (function($) {
        function setChecked(target) {
            var checked = $(target).find("input[type='checkbox']:checked").length;
            if (checked) {
                $(target).find('select option:first').html('Выбрано: ' + checked);
            } else {
                $(target).find('select option:first').html('Выберите из списка');
            }
        }
     
        $.fn.checkselect = function() {
            this.wrapInner('<div class="checkselect-popup"></div>');
            this.prepend(
                '<div class="checkselect-control">' +
                    '<select class="form-control"><option></option></select>' +
                    '<div class="checkselect-over"></div>' +
                '</div>'
            );	
     
            this.each(function(){
                setChecked(this);
            });		
            this.find('input[type="checkbox"]').click(function(){
                setChecked($(this).parents('.checkselect'));
            });
     
            this.parent().find('.checkselect-control').on('click', function(){
                $popup = $(this).next();
                $('.checkselect-popup').not($popup).css('display', 'none');
                if ($popup.is(':hidden')) {
                    $popup.css('display', 'block');
                    $(this).find('select').focus();
                } else {
                    $popup.css('display', 'none');
                }
            });
     
            $('html, body').on('click', function(e){
                if ($(e.target).closest('.checkselect').length == 0){
                    $('.checkselect-popup').css('display', 'none');
                }
            });
        };
    })(jQuery);	
     
    $('.checkselect').checkselect();


// new SlimSelect({
//     select: '#select-single-nosearch'
//   })

  $(".select-single-nosearch").each((i, e) => {
    new SlimSelect({
      select: e,
      settings: {
        placeholderText: 'Choose from list',
        showSearch: false,
      }
    })
  });
  $(".select-single-search").each((i, e) => {
    new SlimSelect({
      select: e,
      settings: {
        placeholderText: 'Choose from list',
        showSearch: true
        
      }
    })
  });


