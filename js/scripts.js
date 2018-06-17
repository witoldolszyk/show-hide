$(document).ready(function(){
    $(".btn1").click(function(){
        $(".hide").slideUp(1000);
    });
    $(".btn2").click(function(){
        $(".show").fadeIn(1000).css("color", "#7D515A");
    });
});
