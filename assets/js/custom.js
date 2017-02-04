    $(function () {
        $('.scroll a').bind('click', function (event) {
            var $anchor = $(this).attr("href");
            $anchor = $anchor.split("/").join("");
            $anchor = $anchor.replace("terminix-web","");
            $anchor = $anchor.replace("faq","");
            $anchor = $anchor.replace("manual","");
            if ($anchor.length) {
                var element = $anchor;
            }
            else {
                var element = "body";
            }
            $('body,html').stop().animate({
                scrollTop: $(element).offset().top
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        });
        $(window).load(function(){ 
            respnosiveRows();
        });
        $(window).resize(function() {
            respnosiveRows();
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $('.my-slider').bxSlider({
          mode: 'fade',
          auto: true
        });
        $(".tabs-content li[class='selected']").show();
        $(".tabs-navigation li:not(.hamburger-button) a").click(function(event){
            $(".tabs-content li").hide();
            $(".tabs-navigation li").removeClass("selected");
            $(this).parent().addClass("selected");
            var tab_id = $(this).attr("data-content");
            $(".tabs-content li[data-content='" + tab_id + "']").show();
            $("#tabs").removeClass("tabs-responsive");
            event.preventDefault();
        });

    });
    
    function respnosiveRows(){
        width = $(window).width();
        $('.row').find('.one-third').each(function (index) {
            if(width <= 550){
                $(this).addClass('responsive');
            } else {
                $(this).removeClass('responsive');
            }
        });
        $('.row').each(function (index) {
            var max_height = 0;
            $(this).find('.one-third').each(function (index) {
                $(this).css('min-height', 0);
                if($(this).outerHeight() > max_height)
                  {
                    max_height = $(this).outerHeight();
                  }          
             });
            if(!$(this).find('.one-third').hasClass('responsive')){
                $(this).find('.one-third').css('min-height', max_height);
            }
            max_height = 0;
        });
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    function navbar() {

      var nav = document.getElementById("navbar");
      if ( !nav.classList.contains("responsive") ) {
          nav.classList.add("responsive");
          return;
      }

      nav.classList.remove("responsive");
    }

    function packagestabs(){
      var tabs = document.getElementById("tabs");
      if ( !tabs.classList.contains("tabs-responsive") ) {
          tabs.classList.add("tabs-responsive");
          return;
      }

      tabs.classList.remove("tabs-responsive");
    }

    $('.set-language').click(function(e){
        lang = $(this).attr("data-lang");
        setLanguage(lang);
        e.preventDefault();
        location.reload();
    });
    function setLanguage(lang){
        alert(lang);
        Cookies.set('lang', lang);
        console.log('lang : ' + lang);
    }
    function getLanguage(){
        var lang = Cookies.get('lang');
        if(lang){
            return lang;
        } else {
            return "en";
        }
    }
