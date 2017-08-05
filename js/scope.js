/**
 * Created by kelly on 2017/6/14.
 */

//function test(){
//    //if(false){
//        var i =10;
//    //};
//    console.log(i);
//}
//test();

//this.m = 100;
//function test(){
//    console.log(this.m);
//}
//
//window.test();
//
//this.m = 1000;
//var obj = {
//    m:200,
//    test:function(){
//        alert(this.m);
//        //console.log(this.m);
//        return function(){
//            alert(this.m);
//            //console.log(this.m); //指向到外边了
//        }
//    }
//};
////obj.test();
////(obj.test())();
//var t= obj.test();
//window.t();


function te(){
    alert(this.style.color);
}
document.getElementById("test").onclick = te;