console.log("Joyeux anniversaire!");


var $p = $('p');
$("p").hide();

$("h1").on('click', function (event) {

 $("p:first").show();


 $("p:first").on("click", function () {

  $("p:eq(1)").show();

 });

 $("p:eq(1)").on("click", function () {

  $("p:eq(2)").show();

 });


 $("#V_japonaise").on("click", function () {

  $("body").addClass("newBody");

 });

});


