var cargarPagina = function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('.close-menu', 'click', function(event) {
        event.stopPropagation();
        $('.open').removeClass('oppenned');
    });
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    
    $("#basic-skills").on('mouseover',changeImage);
    $("#basic-skills").on('mouseout', returnImage);
    $("#intermediate-skills").on('mouseover',changeImage);
    $("#intermediate-skills").on('mouseout', returnImage);
    $("#advanced-skills").on('mouseover',changeImage);
    $("#advanced-skills").on('mouseout', returnImage);
    
    page('/', home);
    page('/about', about);
    page('/skills', skills);
    page('/portfolio', portfolio);
    page('/contact', contact);
    page();
};

var home = function(){
    $("section").addClass("hide");
    $("#home").removeClass("hide");
}
var about = function(){
    $("section").addClass("hide");
    $("#about").removeClass("hide");
}
var skills = function(){
    $("section").addClass("hide");
    $("#skills").removeClass("hide");
}
var portfolio = function(){
    $("section").addClass("hide");
    $("#portfolio").removeClass("hide");
}
var contact = function(){
    $("section").addClass("hide");
    $("#contact").removeClass("hide");
}

var changeImage = function(){
    var level = $(this).data('level');
    switch(level){
        case 1:
            $("#basic").attr("src", "img/basic-1.png");
        break;
        case 2:
            $("#intermediate").attr("src", "img/intermediate-1.png");
        break;
        case 3:
            $("#advanced").attr("src", "img/advanced-1.png");
        break;
    }    
};

var returnImage = function(){
    var level = $(this).data('level');
    switch(level){
        case 1:
            $("#basic").attr("src", "img/basic.png");
        break;
        case 2:
            $("#intermediate").attr("src", "img/intermediate.png");
        break;
        case 3:
            $("#advanced").attr("src", "img/advanced.png");
        break;
    }
};



$(document).ready(cargarPagina);