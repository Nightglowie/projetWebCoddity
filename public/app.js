$(document).ready(function(){
    $("#btn-menuBurger").click(function(){
        $("#menuBurger").toggleClass("isOpen");
        $(".body").toggleClass("isOpen");
        $(this).find(".barre").toggleClass("white");
    });
});