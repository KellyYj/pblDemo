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

//ʵ���ٲ���
function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth); //ȷ��һ�ŷŵĸ���
    var boxArr =[]; //����ӵĸ߶�
    box.each(function(index,value){
        var boxHeight = box.eq(index).height();  //��ȡÿһ�������ڸ߶�
        if(index<num){
            boxArr[index] = boxHeight;
            //console.log(boxArr[index]);
        }else{
        //�ڷ�ͼƬ
            var minboxHeight = Math.min.apply(null,boxArr);  //�õ���С���ӵĸ߶�
            var minboxIndex = $.inArray(minboxHeight,boxArr); //��С�߶�ͼƬ�ڵ�һ����Сλ��
            //console.log(minboxIndex);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();//��ǰ�߶�=ǰһ��ͼƬ+����ڷ���ͼƬ�ĸ߶�
        }
    });
}



//��������
function scrollside(){
    var box  = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);//��ȡ���ĸ߶�
    var documentHeight = $(document).width();//��ǰ�����ĸ߶�
    var scrollHeight = $(window).scrollTop(); //�����ĸ߶�

    return (lastboxHeight<scrollHeight+documentHeight)?true:false;

}

