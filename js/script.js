
(function($) {

	"use strict";

    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
    if ($("#clock").length) {
        $('#clock').countdown('2024/11/20', function(event) {
            var $this = $(this).html(event.strftime(''
            + '<div class="box"><div>%D</div> <span>Days</span> </div>'
            + '<div class="box"><div>%H</div> <span>Hours</span> </div>'
            + '<div class="box"><div>%M</div> <span>Mins</span> </div>'
            + '<div class="box"><div>%S</div> <span>Secs</span> </div>'));
        });
    }


    /*------------------------------------------
        = TOGGLE MUSUC BIX
    -------------------------------------------*/
    if($(".music-box").length) {
        var musicBtn = $(".music-box-toggle-btn"),
            musicBox = $(".music-holder");

        musicBtn.on("click", function() {
            musicBox.toggleClass("toggle-music-box");
            return false;
        })
    }


})(window.jQuery);

var btnFacebook = document.getElementById('facebook');
var btnInstagram = document.getElementById('instagram');

btnFacebook.addEventListener('click', function() {
    window.open("https://www.facebook.com/linhphuong.lily")
});
btnInstagram.addEventListener('click', function() {
    window.open("https://www.facebook.com/linhphuong.lily")
});