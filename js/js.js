/**
 * Created by kelly on 2017/6/15.
 */
//$(document).ready(function(){
//    $("#flipshow").click(function(){
//        $("#content").slideDown(1000);
//    });
//    $("#hide").on("click",function(){
//       $("#content").slideUp(1000);
//    });
//    $("#toggel").on("click",function(){
//       $("#content").slideToggle(1000,function(){
//           $("#content").css("background","red");
//           //alert("callback");
//       });
//    });
//
//});

$(document).ready(function(){
   //$("div").css("width","100px");
   // $("div").css("height","100px");
   // $("div").css("background","red");
   // $("div").css({
   //     width:"100px",height:"100px",background:"gold"
   // });
    $("div").addClass("style1");
    $("div").click(function(){
        //$("div").addClass("style2");
        //$("div").remove("style1");
        $("div").toggleClass("style2");
    });
});