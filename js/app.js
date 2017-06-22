var cargarPagina = function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    
//    $(".project-card").click(openCard);
    
    /*page('/', home);
    page('/about', about);
    page('/skills', skills);
    page('/portfolio', portfolio);
    page('/contact', contact);
    page();*/
};

function openCard(){
    var $idCard = $(this).data("id");
    $("#"+ $idCard).removeClass("hide");
}

/*function about(){
    $("#about").removeClass("hide");
}*/


$(document).ready(cargarPagina);