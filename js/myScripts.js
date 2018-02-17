$("#left-side").click(function() {
    $("#container").removeClass();
    $("#container").addClass("active-left");
});
$("#right-side").click(function() {
    $("#container").removeClass();
    $("#container").addClass("active-right");
});
$(".back-to-center").click(function() {
    $("#container").removeClass();
    $("#container").addClass("active-center");
});
$( window ).resize(function() {
    if ($("#container").hasClass("active-left"))
    {
        $("#container").removeClass("active-left");
        $("#container").addClass("active-left");
    }
    if ($("#container").hasClass("active-center"))
    {
        $("#container").removeClass("active-center");
        $("#container").addClass("active-center");
    }
    if ($("#container").hasClass("active-right"))
    {
        $("#container").removeClass("active-right");
        $("#container").addClass("active-right");
    }
});


