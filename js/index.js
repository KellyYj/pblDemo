/**
 * Created by kelly on 2017/6/14.
 */

$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.gif"},{"src":"3.jpg"},{"src":"10.jpg"},{"src":"4.jpg"}]};
        window.onscroll = function(){

            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                   var box = $("<div>").addClass("box").appendTo($("#container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src","./image/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        }
        //$(window).resize(function(){
        //    imgLocation();
        //});
    });
});

//实现瀑布流
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth); //确定一排放的个数
    var boxArr =[]; //存盒子的高度
    box.each(function(index,value){
        var boxHeight = box.eq(index).height();  //获取每一个盒子在高度
        if(index<num){
            boxArr[index] = boxHeight;
            //console.log(boxArr[index]);
        }else{
        //摆放图片
            var minboxHeight = Math.min.apply(null,boxArr);  //得到最小盒子的高度
            var minboxIndex = $.inArray(minboxHeight,boxArr); //最小高度图片在第一排最小位置
            //console.log(minboxIndex);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();//当前高度=前一张图片+后面摆放在图片的高度
        }
    });
}



//滚动加载
function scrollside(){
    var box  = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);//获取最后的高度
    var documentHeight = $(document).width();//当前容器的高度
    var scrollHeight = $(window).scrollTop(); //滚动的高度

    return (lastboxHeight<scrollHeight+documentHeight)?true:false;

}

