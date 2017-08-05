/**
 * Created by kelly on 2017/6/14.
 */


//$(document).ready(function(){
//   //alert("over");
//    $("p").click(function(){
//        $(this).hide();
//    });
//});


$(document).ready(function(){

    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });

    $("#full").click(function(){
        $("p").toggle(1000);
    });
});