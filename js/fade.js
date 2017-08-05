/**
 * Created by kelly on 2017/6/15.
 */

$(document).ready(function(){
   $("#in").on("click", function () {
       $("#div1").fadeIn(1000);
       $("#div2").fadeIn(1000);
       $("#div3").fadeIn(1000);
       $("#div4").fadeIn(1000);
   })
    $("#out").on("click",function(){
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
        $("#div4").fadeOut(1000);
    });
    $("#taggel").on("click",function(){
       $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
        $("#div4").fadeToggle(1000);
    });

    $("#to").on("click",function(){
        $("#div1").fadeTo(1000,0.5);
        $("#div2").fadeTo(1000,0.2);
        $("#div3").fadeTo(1000,0.5);
        $("#div4").fadeTo(1000,0.1);  //透明的效果
    });
});